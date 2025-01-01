import {configDotenv} from "dotenv";
import {execSync, spawnSync} from "node:child_process";
import {parse, stringify} from "yaml";
import fs from "fs";
import path from "path";

let up = false, down = false;

switch (process.argv[2]) {
    case "up":
        up = true;
        break;
    case "down":
        down = true;
        break;
    case "both":
        up = down = true;
        break;
    case "yaml":
        break;
    default:
        throw new Error("argv[2] must be up, down, 'both' (for up&down), or yaml (for only updating deploy.yml).");
}

configDotenv();

function parseGhVariables() {
    let variables: { [key: string]: string } = {};
    let response: {
        name: string;
        value: string
    }[] = JSON.parse(execSync("gh variable list --json name,value").toString());
    for (let i = 0; i < response.length; i++) {
        variables[response[i].name] = response[i].value;
    }
    return variables;
}

let ghVariables = parseGhVariables();

for (const key in process.env) {
    if (!key.startsWith("NEXT_PUBLIC_")) continue;
    if (up) {
        if (ghVariables[key] === undefined) {
            console.log("Variable", key, "is not set on Github. Adding momentarily.");
            let spawnSync1 = spawnSync("gh", ["variable", "set", key, "--body", process.env[key] ?? ""]);
            if (spawnSync1.status !== 0) {
                console.log({
                    signal: spawnSync1.signal,
                    error: spawnSync1.error,
                    stdout: spawnSync1.stdout,
                    status: spawnSync1.status,
                });
            }
            ghVariables[key] = process.env[key] ?? "";
        } else if (ghVariables[key] !== process.env[key]) {
            console.log("Variable", key, "is not the same on Github and local, updating Github (remote)");
            let spawnSync1 = spawnSync("gh", ["variable", "set", key, "--body", process.env[key] ?? ""]);
            if (spawnSync1.status !== 0) {
                console.log({
                    signal: spawnSync1.signal,
                    error: spawnSync1.error,
                    stdout: spawnSync1.stdout,
                    status: spawnSync1.status,
                });
            }
            ghVariables[key] = process.env[key] ?? "";
        }
    }
}

function addToDotenv(key: string, value: string) {
    let envPath = path.join(__dirname, "..", ".env");
    if (fs.existsSync(envPath)) {
        console.log(".env will be created at", envPath);
    }
    fs.appendFile(envPath, `\n${key}=${value}`, "utf8", function (err) {
        if (err) throw err;
    });
}

for (const key in ghVariables) {
    if (!key.startsWith("NEXT_PUBLIC_")) continue;
    if (down) {
        if (process.env[key] === undefined) {
            console.log("Variable", key, "is not set on Local. Adding momentarily.");
            addToDotenv(key, ghVariables[key]);
            process.env[key] = ghVariables[key] ?? "";
        } else if (ghVariables[key] !== process.env[key]) {
            console.log("Variable", key, "is not the same on Github and local, updating Github (remote)");
            addToDotenv(key, ghVariables[key]);
            process.env[key] = ghVariables[key] ?? "";
        }
    }
}

let deployYmlPath = path.join(__dirname, "..", ".github", "workflows", "deploy.yml");
let deployYmlParsed = parse(fs.readFileSync(deployYmlPath).toString());
console.log(deployYmlParsed.env);
for (const ghVariablesKey in ghVariables) {
    deployYmlParsed.env[ghVariablesKey] = `\${{ vars.${ghVariablesKey}}`;
}
fs.writeFileSync(deployYmlPath, stringify(deployYmlParsed));
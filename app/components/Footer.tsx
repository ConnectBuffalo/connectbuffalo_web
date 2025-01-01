import Image from "next/image";
import {Icon, IconifyIcon} from "@iconify/react";
import {BrandingSnowHorizontal} from "@/app/branding";

type Social = {
    icon: string | IconifyIcon;
    label: string;
    url: string | any;
};
const socials: Social[] = [
    {
        label: "Bluesky",
        icon: "fa6-brands:bluesky",
        url: process.env.NEXT_PUBLIC_SOCIALS_BLUESKY,
    },
    {
        label: "Instagram",
        icon: "fa6-brands:instagram",
        url: process.env.NEXT_PUBLIC_SOCIALS_INSTAGRAM,
    },
    {
        label: "Facebook",
        icon: "fa6-brands:facebook",
        url: process.env.NEXT_PUBLIC_SOCIALS_FACEBOOK,
    },
    {
        label: "Threads",
        icon: "fa6-brands:threads",
        url: process.env.NEXT_PUBLIC_SOCIALS_THREADS,
    },
    {
        label: "LinkedIn",
        icon: "fa6-brands:linkedin",
        url: process.env.NEXT_PUBLIC_SOCIALS_LINKEDIN,
    },
];

for (let i = 0; i < socials.length; i++) {
    let isMissing = [];
    if (socials[i].label === "") isMissing.push("label");
    if (socials[i].icon === "") isMissing.push("icon");
    if (socials[i].url === "") isMissing.push("url");
    if (isMissing.length > 0) throw new Error(`[FOOTER] Social #${i + 1}, the following are either empty or missing: ${isMissing.join(" ")}\n${JSON.stringify(socials[i])}`);
}

const Footer = () => {
    const navItems = [
        {href: "#about", label: "About"},
        {href: "#services", label: "Services"},
        {href: "#plans", label: "Plans"},
        {href: "#how-it-works", label: "How It Works"},
        {href: "#impact", label: "Impact"},
        {href: "#team", label: "Team"},
        {href: "#partners", label: "Partners"},
        {href: "#faq", label: "FAQ"},
        {href: "#contact", label: "Contact"},
    ];

    return (
        <footer className="bg-blue-900 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <Image
                            src={BrandingSnowHorizontal}
                            alt="Connect Buffalo"
                            width={200}
                            height={79.4}
                            className="mb-4"
                        />
                        <p className="text-sm mt-2">
                            Empowering the Buffalo community with fast, affordable internet and digital equity.
                        </p>
                    </div>
                    <div className="col-span-1">
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <nav className="flex flex-col space-y-2">
                            {navItems.slice(0, 5).map((item) => (
                                <a key={item.href} href={item.href}
                                   className="hover:text-blue-300 transition-colors duration-200">
                                    {item.label}
                                </a>
                            ))}
                        </nav>
                    </div>
                    <div className="col-span-1">
                        <h3 className="text-lg font-semibold mb-4">More Info</h3>
                        <nav className="flex flex-col space-y-2">
                            {navItems.slice(5).map((item) => (
                                <a key={item.href} href={item.href}
                                   className="hover:text-blue-300 transition-colors duration-200">
                                    {item.label}
                                </a>
                            ))}
                        </nav>
                    </div>
                </div>
                <div
                    className="mt-8 pt-8 border-t border-blue-800 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm">&copy; {new Date().getFullYear()} Connect Buffalo. All rights reserved.</p>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        {/*Loop for socials*/}
                        {socials.map((social, key) => (
                            <a
                                key={key}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.label}
                                className="text-white hover:text-blue-300 transition-colors duration-200"
                            >
                                <Icon icon={social.icon} height={24}/>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;


"use client";

import {motion} from "framer-motion";
import Image from "next/image";

type Role = "ROLE_GOES_HERE"
    | "Chief Executive Officer"
    | "Chief Marketing Officer"
    | "Chief Operating Officer"
    | "Chief Programming Officer"
    | "Chief Technology Officer"
    | string; // Added string to the type, just in case.

type Created = {
    name: string;
    role: Role;
    image: any; // Should be require("/public/img-grayscale.ext?webp")
    /*social: {
        twitter?: string;
        linkedin?: string;
    };*/
};
const teamMembers: Created[] = [
    {
        name: "Tariq LeFever",
        role: "Chief Executive Officer",
        image: require("/public/team/Tariq-LeFever-grayscale.png?webp"),
    },
    {
        name: "Alyssa Kornacki",
        role: "Chief Operating Officer",
        image: require("/public/team/Alyssa-Kornacki-grayscale.jpg?webp"),
    },
    {
        name: "Rebecca Nagel",
        role: "Chief Marketing Officer",
        image: require("/public/team/Rebecca-Nagel-grayscale.jpg?webp"),
    },
    {
        name: "Regina Hooton",
        role: "Chief Technology Officer",
        image: require("/public/team/Regina-Hooton-grayscale.jpg?webp"),
    },
    {
        name: "Jonathan Coupal",
        role: "Chief Infrastructure Officer",
        image: require("/public/team/Jon-Coupal-grayscale.png?webp"),
    },
];

const Team = () => {
    return (
        <section id="team" className="py-20 bg-blue-50">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5}}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Our Team</h2>
                    <p className="text-xl text-gray-600">Meet the people behind Connect Buffalo</p>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={member.name}
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.5, delay: index * 0.1}}
                            className="bg-white rounded-lg shadow-md overflow-hidden"
                        >
                            <div className="aspect-square relative">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-blue-900">{member.name}</h3>
                                <p className="text-gray-600">{member.role}</p>
                                {/*<div className="flex space-x-4">
                                    {(typeof member.social.twitter == "string" && member.social.twitter.length > 0) &&
                                        <a href={member.social.twitter}
                                           className="text-gray-400 hover:text-blue-500 transition-colors">
                                            <Twitter className="w-5 h-5"/>
                                            <span className="sr-only">Twitter</span>
                                        </a>}
                                    {(typeof member.social.twitter == "string" && member.social.twitter.length > 0) &&
                                        <a href={member.social.linkedin}
                                           className="text-gray-400 hover:text-blue-500 transition-colors">
                                            <Linkedin className="w-5 h-5"/>
                                            <span className="sr-only">LinkedIn</span>
                                        </a>}
                                </div>*/}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;


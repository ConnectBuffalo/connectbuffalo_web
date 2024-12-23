"use client";

import {motion} from "framer-motion";
import {Button} from "@/components/ui/button";

const ImageReq = require("/public/hero/Acephotography_FB.png?webp&height=500").default;
const BlueBase64 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAA1JREFUGFdjkLfu+gQAAzgB1zQsIGgAAAAASUVORK5CYII=";

const Hero = () => {
    return (
        <section className="text-white py-20" style={{
            // backgroundBlendMode: "dark",
            background: `url("${BlueBase64}"), url("${ImageReq.src}")`,
            backgroundSize: "100% 100%, cover",
            backgroundPosition: "center, center"
        }}>
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5}}
                    className="text-center"
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">Connect Buffalo</h1>
                    <p className="text-xl md:text-2xl mb-8">Empowering Buffalo, Connecting Communitites.</p>
                    <div className="flex justify-center">
                        {/* @ts-ignore */}
                        <givebutter-widget id="pnGRdj" label="Get Connected"></givebutter-widget>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;


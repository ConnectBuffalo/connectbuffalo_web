"use client";

import {useState} from "react";
import {motion, AnimatePresence} from "framer-motion";
import {ChevronDown, ChevronUp} from "lucide-react";

const FAQ = () => {
    const faqs = [
        {
            question: "How fast is Connect Buffalo's internet?",
            answer: "Our network typically provides speeds of 50-100 Mbps, depending on your location and plan. We offer plans suitable for streaming, gaming, and working from home.",
        },
        {
            question: "How much does the service cost?",
            answer: "Our plans start at $25/month for basic internet access. We offer various tiers to suit different needs and budgets.",
        },
        {
            question: "Do I need special equipment to connect?",
            answer: "Yes, we provide a small antenna that needs to be installed on your roof or exterior wall. Our team handles the installation process for you.",
        },
        {
            question: "Is Connect Buffalo available in my area?",
            answer: "We're continuously expanding our coverage in Buffalo. Enter your address on our website to check availability in your neighborhood.",
        },
        {
            question: "How can I get involved in the community network?",
            answer: "We welcome community involvement! You can volunteer, host a node, or participate in our digital literacy programs. Contact us to learn more about opportunities.",
        },
    ];

    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <section id="faq" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5}}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Frequently Asked Questions</h2>
                    <p className="text-xl text-gray-600">Find answers to common questions about Connect Buffalo</p>
                </motion.div>
                <div className="max-w-3xl mx-auto">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.5, delay: index * 0.1}}
                            className="mb-4"
                        >
                            <button
                                className="flex justify-between items-center w-full text-left p-4 bg-blue-50 rounded-lg focus:outline-none"
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                            >
                                <span className="text-lg font-semibold text-blue-900">{faq.question}</span>
                                {activeIndex === index ? (
                                    <ChevronUp className="w-6 h-6 text-blue-900"/>
                                ) : (
                                    <ChevronDown className="w-6 h-6 text-blue-900"/>
                                )}
                            </button>
                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{opacity: 0, height: 0}}
                                        animate={{opacity: 1, height: "auto"}}
                                        exit={{opacity: 0, height: 0}}
                                        transition={{duration: 0.3}}
                                        className="p-4 bg-white border border-blue-100 rounded-b-lg"
                                    >
                                        <p className="text-gray-700">{faq.answer}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;


"use client";

import React, {useState} from "react";
import {motion} from "framer-motion";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {toast} from "sonner"; // Import toast for notifications

const currentUrl = "http://localhost:3000/";

const ContactForm = () => {
    const [submissionStatus, setSubmissionStatus] = useState<string | null>(null);
    const [submittingStatus, setSubmittingStatus] = useState<boolean>(false);

    const handleSubmit = async (e: FormData) => {
        if (submissionStatus === "success") return; // Prevent further submissions if successful
        setSubmittingStatus(true);
        try {
            const response = await fetch("https://connectbuffalo.org/api/submit_contact", {
                method: "POST",
                body: e,
            });

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            setSubmissionStatus("success");
            toast.success("Your contact request has been sent successfully!"); // Toast for success
            console.log("Form submitted:", e);
        } catch (error) {
            console.error("Error submitting form:", error);
            setSubmissionStatus("error");
            toast.error("There was an error sending your contact request."); // Toast for error
        }
        setSubmittingStatus(false);
    };

    return (
        <section id="contact" className="py-20 bg-blue-50">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5, delay: 0.2}}
                    className="max-w-md mx-auto"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Contact Us</h2>
                    <p className="text-xl text-gray-600">Get in touch with the Connect Buffalo team</p>
                    <form action={handleSubmit} className="space-y-4">
                        <Input name="redirect" type="hidden" value={`${currentUrl}?[RESULT]`}/>
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                Name
                            </label>
                            <Input
                                type="text"
                                id="name"
                                name="name"
                                disabled={submissionStatus === "success" || submittingStatus}
                                required
                                className="w-full"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                Email
                            </label>
                            <Input
                                type="email"
                                id="email"
                                name="email"
                                disabled={submissionStatus === "success" || submittingStatus}
                                required
                                className="w-full"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                Message
                            </label>
                            <Textarea
                                id="message"
                                name="message"
                                disabled={submissionStatus === "success" || submittingStatus}
                                required
                                className="w-full"
                                rows={4}
                                maxLength={1000}
                            />
                        </div>
                        <Button type="submit" disabled={submissionStatus === "success" || submittingStatus}
                                className="w-full bg-blue-900 text-white hover:bg-blue-800">
                            Send Message
                        </Button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactForm;
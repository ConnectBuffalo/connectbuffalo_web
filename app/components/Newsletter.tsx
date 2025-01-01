"use client";

import {useState} from "react";
import {motion} from "framer-motion";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
// import { subscribeToNewsletter } from '@/app/actions/newsletter'
import {toast} from "sonner";

export default function Newsletter() {
    const [loading, setLoading] = useState(false);

    async function handleSubmit(formData: FormData) {
        setLoading(true);
        try {
            const result = {success: true, error: null};
            if (result.success) {
                toast.success("Successfully subscribed to the newsletter!");
                const form = document.getElementById("newsletter-form") as HTMLFormElement;
                form?.reset();
            } else {
                toast.error(result.error || "Failed to subscribe. Please try again.");
            }
        } catch (error) {
            toast.error("An unexpected error occurred. Please try again.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <section className="bg-blue-900 text-white py-16">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5}}
                    className="max-w-2xl mx-auto text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Connected</h2>
                    <p className="text-lg mb-8">
                        Subscribe to our newsletter for updates on our mission to connect Buffalo.
                    </p>
                    <form
                        id="newsletter-form"
                        action={handleSubmit}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <Input
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            className="bg-white/10 text-white placeholder:text-gray-300 border-white/20"
                            required
                        />
                        <Input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            className="bg-white/10 text-white placeholder:text-gray-300 border-white/20"
                            required
                        />
                        <Button
                            type="submit"
                            disabled={loading}
                            className="bg-white text-blue-900 hover:bg-blue-100"
                        >
                            {loading ? "Subscribing..." : "Subscribe"}
                        </Button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}


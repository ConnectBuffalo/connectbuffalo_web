import {Body, Container, Head, Heading, Html, Link, Preview, Text} from "@react-email/components";
import {Tailwind} from "@react-email/tailwind";

export default function WelcomeEmail({
                                         userFirstName = "",
                                     }: {
    userFirstName?: string
}) {
    return (
        <Html>
            <Head/>
            <Preview>Welcome to Connect Buffalo's Newsletter</Preview>
            <Tailwind>
                <Body className="bg-white font-sans">
                    <Container className="mx-auto py-20 px-4">
                        <Heading className="text-2xl font-bold text-gray-900 text-center">
                            Welcome to Connect Buffalo
                        </Heading>
                        <Text className="text-gray-600 mt-4">
                            Hi {userFirstName || "there"},
                        </Text>
                        <Text className="text-gray-600">
                            Thank you for subscribing to our newsletter! We're excited to keep you updated
                            about our mission to provide fast, affordable internet access to the Buffalo community.
                        </Text>
                        <Text className="text-gray-600">
                            You'll receive updates about:
                        </Text>
                        <ul className="list-disc pl-6 text-gray-600">
                            <li>Network expansion updates</li>
                            <li>Community events and initiatives</li>
                            <li>Service improvements and new features</li>
                            <li>Ways to get involved</li>
                        </ul>
                        <Text className="text-gray-600 mt-4">
                            If you have any questions, feel free to{" "}
                            <Link
                                href="https://connectbuffalo.org/contact"
                                className="text-blue-600 underline"
                            >
                                contact us
                            </Link>
                            .
                        </Text>
                        <Text className="text-gray-600 mt-8">
                            Best regards,
                            <br/>
                            The Connect Buffalo Team
                        </Text>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
}


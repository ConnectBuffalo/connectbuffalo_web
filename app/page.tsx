import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Plans from "./components/Plans";
import HowItWorks from "./components/HowItWorks";
import CommunityImpact from "./components/CommunityImpact";
import Team from "./components/Team";
import Partners from "./components/Partners";
import FAQ from "./components/FAQ";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Newsletter from "@/app/components/Newsletter";

export default function Home() {
    return (
        <div className="min-h-screen bg-white text-gray-800">
            <Header/>
            <main>
                <Hero/>
                <About/>
                <Services/>
                <Plans/>
                <HowItWorks/>
                <CommunityImpact/>
                <Team/>
                <Partners/>
                <FAQ/>
                <ContactForm/>
                <Newsletter/>
            </main>
            <Footer/>
        </div>
    );
}


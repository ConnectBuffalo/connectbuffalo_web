import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import HowItWorks from './components/HowItWorks'
import CommunityImpact from './components/CommunityImpact'
import Team from './components/Team'
import Team from './components/Partners'
import FAQ from './components/FAQ'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <HowItWorks />
        <CommunityImpact />
        <Team />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}


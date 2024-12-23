import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Connect-Buffalo-Logo-Horizontal-Snow-2000px-daBArEQe66ME6d0yvC2ebHcYp7VsZT.png"
              alt="Connect Buffalo"
              width={160}
              height={40}
              className="h-6 w-auto"
            />
          </div>
          <nav className="flex flex-wrap justify-center md:justify-end gap-4">
            <a href="#about" className="hover:text-blue-300 transition-colors duration-200">
              About
            </a>
            <a href="#services" className="hover:text-blue-300 transition-colors duration-200">
              Services
            </a>
            <a href="#how-it-works" className="hover:text-blue-300 transition-colors duration-200">
              How It Works
            </a>
            <a href="#impact" className="hover:text-blue-300 transition-colors duration-200">
              Impact
            </a>
            <a href="#team" className="hover:text-blue-300 transition-colors duration-200">
              Team
            </a>
            <a href="#faq" className="hover:text-blue-300 transition-colors duration-200">
              FAQ
            </a>
            <a href="#contact" className="hover:text-blue-300 transition-colors duration-200">
              Contact
            </a>
          </nav>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Connect Buffalo. All rights reserved.</p>
          <p className="mt-2">
            Built with love for the Buffalo community. Empowering connectivity and digital equity.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer


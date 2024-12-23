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
              width={200} // Adjusted size
              height={50}
              className="h-8 w-auto"
            />
          </div>
          <div className="flex flex-col md:flex-row justify-between w-full items-center">
            <nav className="flex flex-wrap justify-center md:justify-start gap-4">
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
            <div className="flex gap-4 mt-4 md:mt-0 md:ml-8">
              <a
                href="https://instagram.com/useconnectbuffalo"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-white hover:text-blue-300 transition-colors duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.34 3.608 1.316.975.975 1.254 2.242 1.316 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.34 2.633-1.316 3.608-.975.975-2.242 1.254-3.608 1.316-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.34-3.608-1.316-.975-.975-1.254-2.242-1.316-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.849c.062-1.366.34-2.633 1.316-3.608C4.524 2.503 5.791 2.225 7.157 2.163c1.265-.058 1.645-.07 4.849-.07zm0-2.163C8.768 0 8.332.013 7.052.072c-1.633.073-3.073.404-4.24 1.572C1.655 3.073 1.324 4.513 1.251 6.146.192 7.74.013 8.768.013 12s.179 4.26 1.238 5.854c.073 1.633.404 3.073 1.572 4.24 1.167 1.167 2.607 1.499 4.24 1.572 1.633.073 2.672.06 5.947.06s4.314.013 5.947-.06c1.633-.073 3.073-.404 4.24-1.572 1.167-1.167 1.499-2.607 1.572-4.24.073-1.633.06-2.672.06-5.947s.013-4.314-.06-5.947c-.073-1.633-.404-3.073-1.572-4.24-1.167-1.167-2.607-1.499-4.24-1.572C16.314.013 15.276 0 12 0z" />
                  <circle cx="12" cy="12" r="3.5" />
                  <circle cx="18.406" cy="5.594" r="1.44" />
                </svg>
              </a>
              <a
                href="https://bsky.app/profile/connectbuffalo.bsky.social"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Bluesky"
                className="text-white hover:text-blue-300 transition-colors duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 6.627 5.373 12 12 12s12-5.373 12-12c0-6.627-5.373-12-12-12zm0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z" />
                </svg>
              </a>
            </div>
          </div>
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

import Image from 'next/image'
import {BrandingSnowHorizontal} from "@/app/branding";

const Footer = () => {
  const navItems = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#plans", label: "Plans" },
    { href: "#how-it-works", label: "How It Works" },
    { href: "#impact", label: "Impact" },
    { href: "#team", label: "Team" },
    { href: "#partners", label: "Partners" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Contact" }
  ]

  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Image
              src={BrandingSnowHorizontal}
              alt="Connect Buffalo"
              width={200}
              height={79.4}
              className="mb-4"
            />
            <p className="text-sm mt-2">
              Empowering the Buffalo community with fast, affordable internet and digital equity.
            </p>
          </div>
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              {navItems.slice(0, 5).map((item) => (
                <a key={item.href} href={item.href} className="hover:text-blue-300 transition-colors duration-200">
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">More Info</h3>
            <nav className="flex flex-col space-y-2">
              {navItems.slice(5).map((item) => (
                <a key={item.href} href={item.href} className="hover:text-blue-300 transition-colors duration-200">
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-blue-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Connect Buffalo. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href={process.env.NEXT_PUBLIC_SOCIALS_INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-white hover:text-blue-300 transition-colors duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a
              href={process.env.NEXT_PUBLIC_SOCIALS_BLUESKY}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Bluesky"
              className="text-white hover:text-blue-300 transition-colors duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.25c-5.376 0-9.75 4.374-9.75 9.75s4.374 9.75 9.75 9.75 9.75-4.374 9.75-9.75S17.376 2.25 12 2.25zm2.259 14.23l-2.259-1.052-2.259 1.052.431-2.517-1.828-1.782 2.526-.368 1.13-2.29 1.13 2.29 2.526.368-1.828 1.782.431 2.517z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer


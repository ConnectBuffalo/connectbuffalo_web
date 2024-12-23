import Image from 'next/image'
import {BrandingSnowHorizontal} from "@/app/branding";

const Footer = () => {
  return (
      <footer className="bg-blue-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Image
                  src={BrandingSnowHorizontal}
                  alt="Connect Buffalo"
                  width={200}
                  height={79.4}
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
          <div className="mt-8 flex justify-center gap-4">
            <a
                href={process.env.NEXT_PUBLIC_SOCIALS_INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-white hover:text-blue-300 transition-colors duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256">
                <path fill="currentColor"
                      d="M128 23.064c34.177 0 38.225.13 51.722.745c12.48.57 19.258 2.655 23.769 4.408c5.974 2.322 10.238 5.096 14.717 9.575s7.253 8.743 9.575 14.717c1.753 4.511 3.838 11.289 4.408 23.768c.615 13.498.745 17.546.745 51.723s-.13 38.226-.745 51.723c-.57 12.48-2.655 19.257-4.408 23.768c-2.322 5.974-5.096 10.239-9.575 14.718s-8.743 7.253-14.717 9.574c-4.511 1.753-11.289 3.839-23.769 4.408c-13.495.616-17.543.746-51.722.746s-38.228-.13-51.723-.746c-12.48-.57-19.257-2.655-23.768-4.408c-5.974-2.321-10.239-5.095-14.718-9.574c-4.479-4.48-7.253-8.744-9.574-14.718c-1.753-4.51-3.839-11.288-4.408-23.768c-.616-13.497-.746-17.545-.746-51.723s.13-38.225.746-51.722c.57-12.48 2.655-19.258 4.408-23.769c2.321-5.974 5.095-10.238 9.574-14.717c4.48-4.48 8.744-7.253 14.718-9.575c4.51-1.753 11.288-3.838 23.768-4.408c13.497-.615 17.545-.745 51.723-.745M128 0C93.237 0 88.878.147 75.226.77c-13.625.622-22.93 2.786-31.071 5.95c-8.418 3.271-15.556 7.648-22.672 14.764S9.991 35.738 6.72 44.155C3.555 52.297 1.392 61.602.77 75.226C.147 88.878 0 93.237 0 128s.147 39.122.77 52.774c.622 13.625 2.785 22.93 5.95 31.071c3.27 8.417 7.647 15.556 14.763 22.672s14.254 11.492 22.672 14.763c8.142 3.165 17.446 5.328 31.07 5.95c13.653.623 18.012.77 52.775.77s39.122-.147 52.774-.77c13.624-.622 22.929-2.785 31.07-5.95c8.418-3.27 15.556-7.647 22.672-14.763s11.493-14.254 14.764-22.672c3.164-8.142 5.328-17.446 5.95-31.07c.623-13.653.77-18.012.77-52.775s-.147-39.122-.77-52.774c-.622-13.624-2.786-22.929-5.95-31.07c-3.271-8.418-7.648-15.556-14.764-22.672S220.262 9.99 211.845 6.72c-8.142-3.164-17.447-5.328-31.071-5.95C167.122.147 162.763 0 128 0m0 62.27c-36.302 0-65.73 29.43-65.73 65.73s29.428 65.73 65.73 65.73c36.301 0 65.73-29.428 65.73-65.73c0-36.301-29.429-65.73-65.73-65.73m0 108.397c-23.564 0-42.667-19.103-42.667-42.667S104.436 85.333 128 85.333s42.667 19.103 42.667 42.667s-19.103 42.667-42.667 42.667m83.686-110.994c0 8.484-6.876 15.36-15.36 15.36s-15.36-6.876-15.36-15.36s6.877-15.36 15.36-15.36s15.36 6.877 15.36 15.36"></path>
              </svg>
            </a>
            <a
                href={process.env.NEXT_PUBLIC_SOCIALS_BLUESKY}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Bluesky"
                className="text-white hover:text-blue-300 transition-colors duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="1.14em" height="1em" viewBox="0 0 256 226">
                <path fill="currentColor"
                      d="M55.491 15.172c29.35 22.035 60.917 66.712 72.509 90.686c11.592-23.974 43.159-68.651 72.509-90.686C221.686-.727 256-13.028 256 26.116c0 7.818-4.482 65.674-7.111 75.068c-9.138 32.654-42.436 40.983-72.057 35.942c51.775 8.812 64.946 38 36.501 67.187c-54.021 55.433-77.644-13.908-83.696-31.676c-1.11-3.257-1.63-4.78-1.637-3.485c-.008-1.296-.527.228-1.637 3.485c-6.052 17.768-29.675 87.11-83.696 31.676c-28.445-29.187-15.274-58.375 36.5-67.187c-29.62 5.041-62.918-3.288-72.056-35.942C4.482 91.79 0 33.934 0 26.116C0-13.028 34.314-.727 55.491 15.172"></path>
              </svg>
            </a>
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

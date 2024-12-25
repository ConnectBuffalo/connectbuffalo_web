'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import {BrandingSnowHorizontal} from "@/app/branding";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center space-x-2"
        >
          <Image
            src={require("/public/"+BrandingSnowHorizontal+"?webp")}
            alt="Connect Buffalo"
            height={200}
            className="h-12 w-auto"
          />
        </motion.div>
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent text-white hover:bg-blue-800">About Us</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-blue-500 to-blue-900 p-6 no-underline outline-none focus:shadow-md"
                        href="/"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium text-white">
                          Connect Buffalo
                        </div>
                        <p className="text-sm leading-tight text-blue-100">
                          Empowering our community with fast, affordable internet
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href="#about" title="About">
                    Learn about our mission and vision
                  </ListItem>
                  <ListItem href="#team" title="Our Team">
                    Meet the people behind Connect Buffalo
                  </ListItem>
                  <ListItem href="#partners" title="Partners">
                    See who we're working with
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent text-white hover:bg-blue-800">Services</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  <ListItem href="#services" title="Our Services">
                    Explore our internet service offerings
                  </ListItem>
                  <ListItem href="#plans" title="Plans">
                    Find the perfect plan for your needs
                  </ListItem>
                  <ListItem href="#how-it-works" title="How It Works">
                    Learn about our connection process
                  </ListItem>
                  <ListItem href="#impact" title="Community Impact">
                    See how we're making a difference
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="#faq" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle() + " bg-transparent text-white hover:bg-blue-800"}>
                  FAQ
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="#contact" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle() + " bg-transparent text-white hover:bg-blue-800"}>
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {isOpen ? (
                <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 1 1 1.414-1.414l4.829 4.828 4.828-4.828z" />
              ) : (
                <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-blue-800 py-2"
        >
          <div className="container mx-auto px-4 flex flex-col space-y-2">
            <MobileNavLink href="#about" onClick={() => setIsOpen(false)}>About</MobileNavLink>
            <MobileNavLink href="#team" onClick={() => setIsOpen(false)}>Our Team</MobileNavLink>
            <MobileNavLink href="#partners" onClick={() => setIsOpen(false)}>Partners</MobileNavLink>
            <MobileNavLink href="#services" onClick={() => setIsOpen(false)}>Services</MobileNavLink>
            <MobileNavLink href="#plans" onClick={() => setIsOpen(false)}>Plans</MobileNavLink>
            <MobileNavLink href="#how-it-works" onClick={() => setIsOpen(false)}>How It Works</MobileNavLink>
            <MobileNavLink href="#impact" onClick={() => setIsOpen(false)}>Impact</MobileNavLink>
            <MobileNavLink href="#faq" onClick={() => setIsOpen(false)}>FAQ</MobileNavLink>
            <MobileNavLink href="#contact" onClick={() => setIsOpen(false)}>Contact</MobileNavLink>
          </div>
        </motion.div>
      )}
    </header>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-100 hover:text-blue-900 focus:bg-blue-100 focus:text-blue-900",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-blue-700">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

const MobileNavLink = ({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) => (
  <a href={href} className="block py-2 px-4 text-white hover:bg-blue-700 rounded transition-colors duration-200" onClick={onClick}>
    {children}
  </a>
)

export default Header


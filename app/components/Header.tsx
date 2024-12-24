'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
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
            // width={200}
            height={200}
            className="h-12 w-auto"
          />
        </motion.div>
        <nav className="hidden md:flex space-x-4">
          <NavLink href="#about">About</NavLink>
          <NavLink href="#services">Services</NavLink>
          <NavLink href="#how-it-works">How It Works</NavLink>
          <NavLink href="#impact">Impact</NavLink>
          <NavLink href="#team">Team</NavLink>
          <NavLink href="#partners">Partners</NavLink>
          <NavLink href="#faq">FAQ</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </nav>
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
            <NavLink href="#about" onClick={() => setIsOpen(false)}>About</NavLink>
            <NavLink href="#services" onClick={() => setIsOpen(false)}>Services</NavLink>
            <NavLink href="#how-it-works" onClick={() => setIsOpen(false)}>How It Works</NavLink>
            <NavLink href="#impact" onClick={() => setIsOpen(false)}>Impact</NavLink>
            <NavLink href="#team" onClick={() => setIsOpen(false)}>Team</NavLink>
            <NavLink href="#faq" onClick={() => setIsOpen(false)}>FAQ</NavLink>
            <NavLink href="#contact" onClick={() => setIsOpen(false)}>Contact</NavLink>
          </div>
        </motion.div>
      )}
    </header>
  )
}

const NavLink = ({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) => (
  <a href={href} className="hover:text-blue-300 transition-colors duration-200" onClick={onClick}>
    {children}
  </a>
)

export default Header


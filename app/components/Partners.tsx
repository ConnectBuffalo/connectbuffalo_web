'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const partners = [
  {
    name: 'Cloudflare',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/94/Cloudflare_Logo.png',
    website: 'https://www.cloudflare.com'
  },
  {
    name: 'Microsoft',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
    website: 'https://www.microsoft.com'
  },
  {
    name: 'Zendesk',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Zendesk_logo.svg/726px-Zendesk_logo.svg.png',
    website: 'https://www.zendesk.com'
  },
  {
    name: 'Datadog',
    logo: 'https://1000logos.net/wp-content/uploads/2024/07/Datadog-Logo.png',
    website: 'https://www.datadog.com'
  },
]

const Partners = () => {
  return (
    <section id="partners" className="py-20 bg-blue">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Our Partners</h2>
          <p className="text-xl text-gray-600">Working together to connect Buffalo</p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              <a
                href={partner.website}
                className="group relative w-full aspect-square bg-gray-50 rounded-lg overflow-hidden flex items-center justify-center p-4 transition-transform hover:scale-105"
              >
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  width={120}
                  height={120}
                  className="object-contain filter grayscale group-hover:grayscale-0 transition-all"
                />
              </a>
              <p className="mt-2 text-sm text-gray-600 text-center">{partner.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Partners


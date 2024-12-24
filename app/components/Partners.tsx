'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const partners = [
  {
    name: 'City of Buffalo',
    logo: 'https://www.buffalony.gov/ImageRepository/Document?documentID=1657',
    website: 'https://www.buffalony.gov'
  },
  {
    name: 'Buffalo Public Schools',
    logo: 'https://www.buffaloschools.org/cms/lib/NY01913551/Centricity/Template/GlobalAssets/images///logos/District%20Logo.png',
    website: 'https://www.buffaloschools.org'
  },
  {
    name: 'University at Buffalo',
    logo: 'https://www.buffalo.edu/content/dam/www/shared_assets/images/ub-logo/UB-Logo-2021.png',
    website: 'https://www.buffalo.edu'
  },
  {
    name: 'M&T Bank',
    logo: 'https://www3.mtb.com/content/dam/mtb-web/images/mtb-logos/m&t-logo.png',
    website: 'https://www.mtb.com'
  },
  {
    name: 'Buffalo Bills',
    logo: 'https://static.www.nfl.com/t_q-best/league/api/clubs/logos/BUF',
    website: 'https://www.buffalobills.com'
  },
  {
    name: 'Community Foundation',
    logo: 'https://www.cfgb.org/wp-content/uploads/2018/12/CFGB_Logo_Stacked_RGB.png',
    website: 'https://www.cfgb.org'
  }
]

const Partners = () => {
  return (
    <section id="partners" className="py-20 bg-white">
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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
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


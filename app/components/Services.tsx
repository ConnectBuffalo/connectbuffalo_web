'use client'

import { motion } from 'framer-motion'
import { Wifi, Shield, Users } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: <Wifi className="w-12 h-12 text-blue-900" />,
      title: 'High-Speed Internet',
      description: 'Enjoy fast and reliable internet access for streaming, gaming, and working from home.'
    },
    {
      icon: <Shield className="w-12 h-12 text-blue-900" />,
      title: 'Privacy-Focused',
      description: 'We prioritize your privacy and security with encrypted connections and no data selling.'
    },
    {
      icon: <Users className="w-12 h-12 text-blue-900" />,
      title: 'Community-Driven',
      description: 'Join a network built by and for the community, with opportunities to get involved and expand coverage.'
    }
  ]

  return (
    <section id="services" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600">Connecting Buffalo with cutting-edge technology</p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services


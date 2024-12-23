'use client'

import { motion } from 'framer-motion'
import { CheckCircle, MapPin, Wifi, PhoneCall } from 'lucide-react'

const HowItWorks = () => {
  const steps = [
    {
      icon: <MapPin className="w-12 h-12 text-blue-900" />,
      title: 'Check Coverage',
      description: 'Enter your address to see if Connect Buffalo is available in your area.'
    },
    {
      icon: <CheckCircle className="w-12 h-12 text-blue-900" />,
      title: 'Choose a Plan',
      description: 'Select the plan that best fits your needs and budget.'
    },
    {
      icon: <Wifi className="w-12 h-12 text-blue-900" />,
      title: 'Install Equipment',
      description: 'Our team will install a small antenna on your roof to connect you to our network.'
    },
    {
      icon: <PhoneCall className="w-12 h-12 text-blue-900" />,
      title: 'Get Connected',
      description: 'Enjoy fast, reliable internet and join our community network.'
    }
  ]

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">How It Works</h2>
          <p className="text-xl text-gray-600">Get connected in four easy steps</p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-blue-50 p-6 rounded-lg shadow-md"
            >
              <div className="flex justify-center mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">{step.title}</h3>
              <p className="text-gray-700">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks


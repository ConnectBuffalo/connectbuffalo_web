'use client'

import { motion } from 'framer-motion'
import { Book, Briefcase, Heart } from 'lucide-react'

const CommunityImpact = () => {
  const impacts = [
    {
      icon: <Book className="w-12 h-12 text-blue-900" />,
      title: 'Education',
      description: 'Empowering students with access to online learning resources and digital literacy programs.'
    },
    {
      icon: <Briefcase className="w-12 h-12 text-blue-900" />,
      title: 'Economic Growth',
      description: 'Fostering local businesses and remote work opportunities through reliable internet access.'
    },
    {
      icon: <Heart className="w-12 h-12 text-blue-900" />,
      title: 'Community Engagement',
      description: 'Connecting neighbors and promoting civic participation through our community network.'
    }
  ]

  return (
    <section id="impact" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Community Impact</h2>
          <p className="text-xl text-gray-600">Transforming Buffalo through connectivity</p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {impacts.map((impact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="flex justify-center mb-4">{impact.icon}</div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">{impact.title}</h3>
              <p className="text-gray-700">{impact.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CommunityImpact


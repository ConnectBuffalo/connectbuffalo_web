'use client'

import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">About Connect Buffalo</h2>
          <p className="text-xl text-gray-600">Bridging the digital divide in our community</p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-blue-900 mb-4">Our Mission</h3>
            <p className="text-gray-700">
              Connect Buffalo is a community-driven Wireless Internet Service Provider (WISP) dedicated to providing fast, 
              reliable, and affordable internet access to all residents of Buffalo, NY. We believe that internet access is 
              a fundamental right and essential for education, economic opportunity, and community engagement.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold text-blue-900 mb-4">How We Work</h3>
            <p className="text-gray-700">
              Using a mesh network of community-hosted nodes, we create a resilient and expandable network that grows 
              with our community. By leveraging innovative technology and the power of collaboration, we're able to 
              offer high-speed internet at a fraction of the cost of traditional providers.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About


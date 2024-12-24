'use client'

import { motion } from 'framer-motion'
import { Home, Building2, Wifi } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useCallback } from 'react'

const plans = [
  {
    icon: <Home className="w-12 h-12 text-blue-900" />,
    title: 'Residential Membership',
    description: 'Fast, reliable internet for your home',
    price: '$25',
    period: 'per month',
    features: [
      'Speeds up to 100 Mbps',
      'No data caps',
      'Free installation',
      'Community support'
    ]
  },
  {
    icon: <Building2 className="w-12 h-12 text-blue-900" />,
    title: 'Corporate Sponsorship',
    description: 'Support the community and get high-speed internet',
    price: 'Starting at $60',
    period: 'per month',
    features: [
      'Gigabit speeds',
      'Priority support',
      'Custom solutions available',
      'Tax-deductible contribution'
    ]
  },
  {
    icon: <Wifi className="w-12 h-12 text-blue-900" />,
    title: 'Community Hotspot',
    description: 'Free internet access in public spaces',
    price: 'Free',
    period: 'for everyone',
    features: [
      'Available in select locations',
      'Basic browsing and email',
      'Usage limits may apply',
      'Expanding coverage'
    ]
  }
]

const Plans = () => {
  const scrollToContact = useCallback(() => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <section id="plans" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Our Plans</h2>
          <p className="text-xl text-gray-600">Choose the perfect plan for your needs</p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md flex flex-col"
            >
              <div className="flex justify-center mb-4">{plan.icon}</div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">{plan.title}</h3>
              <p className="text-gray-600 mb-4">{plan.description}</p>
              <div className="text-center mb-4">
                <span className="text-3xl font-bold text-blue-900">{plan.price}</span>
                <span className="text-gray-600"> {plan.period}</span>
              </div>
              <ul className="mb-6 flex-grow">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center mb-2">
                    <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button 
                className="w-full bg-blue-900 text-white hover:bg-blue-800"
                onClick={scrollToContact}
              >
                Choose Plan
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Plans

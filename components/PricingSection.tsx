import React from 'react';
import { motion } from 'framer-motion';

interface PricingTier {
  name: string;
  price: string;
  features: string[];
}

const pricingTiers: PricingTier[] = [
  {
    name: 'Basic AI Video Creation',
    price: '$29/month',
    features: [
      'Up to 5 AI-generated videos per month',
      'Basic editing tools',
      'Standard support',
    ],
  },
  {
    name: 'Pro AI Video Suite',
    price: '$79/month',
    features: [
      'Up to 20 AI-generated videos per month',
      'Advanced editing tools',
      'Priority support',
      'Custom branding options',
    ],
  },
  {
    name: 'Enterprise AI Solutions',
    price: 'Contact us',
    features: [
      'Unlimited AI-generated videos',
      'Full suite editing tools',
      'Dedicated account manager',
      'Custom integration and support',
    ],
  },
];

const PricingSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <motion.div
          className="text-4xl font-bold text-orange-600 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          AI Pricing Plans
        </motion.h2>
        <motion.div
          className="text-lg text-gray-700 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          Choose the plan that best suits your AI video creation needs.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={index}
              className="bg-red-600 text-white rounded-lg p-6 shadow-lg transition-transform transform hover:scale-105"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <h3 className="text-2xl font-semibold mb-4">{tier.name}</h3>
              <p className="text-xl mb-4">{tier.price}</p>
              <ul className="mb-6">
                {tier.features.map((feature, fIndex) => (
                  <li key={fIndex} className="mb-2">
                    - {feature}
                  </li>
                ))}
              </ul>
              <button className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition-colors">
                Get Started with AI
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
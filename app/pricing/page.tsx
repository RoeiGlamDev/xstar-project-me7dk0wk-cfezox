import React from 'react';
import { motion } from 'framer-motion';

interface PricingOption {
  title: string;
  price: string;
  features: string[];
}

const pricingOptions: PricingOption[] = [
  {
    title: 'Basic Plan',
    price: '$19/month',
    features: [
      'Access to AI video generation tools',
      '5 videos per month',
      'Standard support',
    ],
  },
  {
    title: 'Pro Plan',
    price: '$49/month',
    features: [
      'All Basic Plan features',
      '20 videos per month',
      'Priority support',
      'Advanced editing tools',
    ],
  },
  {
    title: 'Enterprise Plan',
    price: 'Contact us',
    features: [
      'All Pro Plan features',
      'Unlimited videos',
      'Dedicated account manager',
      'Custom integrations',
    ],
  },
];

const FAQ = [
  {
    question: 'What is AI video generation?',
    answer: 'AI video generation uses advanced algorithms to create videos automatically based on your inputs.',
  },
  {
    question: 'How does billing work?',
    answer: 'Billing is monthly, and you can cancel anytime without penalties.',
  },
  {
    question: 'Can I upgrade my plan later?',
    answer: 'Yes, you can upgrade your plan at any time through your account settings.',
  },
];

const PricingPage: React.FC = () => {
  return (
    <div className="bg-white text-gray-800 p-8">
      <motion.div
        className="text-4xl font-bold text-center text-red-600 mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        AI Pricing Plans
      </motion.h1>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {pricingOptions.map((option, index) => (
          <div
            key={index}
            className="bg-orange-100 border-2 border-red-500 rounded-lg p-5 transition-transform transform hover:scale-105"
          >
            <h2 className="text-xl font-semibold text-red-600">{option.title}</h2>
            <p className="text-2xl font-bold text-gray-800">{option.price}</p>
            <ul className="list-disc pl-5 mt-3">
              {option.features.map((feature, idx) => (
                <li key={idx} className="text-gray-700">{feature}</li>
              ))}
            </ul>
            <motion.div
              className="mt-4 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition"
              whileHover={{ scale: 1.05 }}
            >
              Choose Plan
            </motion.button>
          </div>
        ))}
      </motion.div>
      <div className="mt-10">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Frequently Asked Questions</h2>
        {FAQ.map((item, idx) => (
          <div key={idx} className="mb-4">
            <h3 className="font-semibold text-orange-600">{item.question}</h3>
            <p className="text-gray-700">{item.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPage;
import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface NewsletterSectionProps {
  title: string;
  description: string;
}

const NewsletterSection: React.FC<NewsletterSectionProps> = ({ title, description }) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add email submission logic here
    setIsSubmitted(true);
  };

  return (
    <section className="bg-white py-10">
      <div className="container mx-auto text-center">
        <motion.div 
          className="text-3xl font-bold text-red-600 mb-4"
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h2>
        <motion.div 
          className="text-lg text-gray-700 mb-6"
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {description}
        </motion.p>
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col items-center">
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="Enter your email" 
              required 
              className="border border-gray-300 rounded-md p-2 mb-4 w-80 focus:outline-none focus:border-orange-500"
            />
            <motion.div 
              type="submit" 
              className="bg-orange-500 text-white rounded-md px-6 py-2 transition duration-300 hover:bg-red-600"
              whileHover={{ scale: 1.05 }}
            >
              Subscribe
            </motion.button>
          </form>
        ) : (
          <motion.div 
            className="mt-4 text-lg text-green-600" 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.5 }}
          >
            Thank you for subscribing to AI! Stay tuned for our latest updates.
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default NewsletterSection;
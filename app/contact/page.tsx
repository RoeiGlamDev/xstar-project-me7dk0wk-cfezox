import React from 'react';
import { motion } from 'framer-motion';

interface ContactProps {
  businessHours: string;
  location: string;
}

const Contact: React.FC<ContactProps> = () => {
  const businessHours = "Monday - Friday: 9 AM - 5 PM";
  const location = "123 Tech Lane, Innovation City, CA 90210";

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-8">
      <motion.div 
        className="text-4xl font-bold text-red-600 mb-6"
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
      >
        Contact AI
      </motion.h1>
      <motion.div 
        className="text-lg text-gray-700 mb-4"
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        We’re here to assist you with all your AI video needs. Reach out to us!
      </motion.p>
      <form className="w-full max-w-md bg-red-100 p-6 rounded-lg shadow-lg">
        <motion.div 
          htmlFor="name" 
          className="block text-sm font-medium text-gray-700"
          whileHover={{ scale: 1.05 }}
        >
          Name
        </motion.label>
        <motion.div 
          type="text" 
          id="name" 
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-orange-400" 
          required 
        />
        
        <motion.div 
          htmlFor="email" 
          className="block text-sm font-medium text-gray-700 mt-4"
          whileHover={{ scale: 1.05 }}
        >
          Email
        </motion.label>
        <motion.div 
          type="email" 
          id="email" 
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-orange-400" 
          required 
        />
        
        <motion.div 
          htmlFor="message" 
          className="block text-sm font-medium text-gray-700 mt-4"
          whileHover={{ scale: 1.05 }}
        >
          Message
        </motion.label>
        <motion.div 
          id="message" 
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-orange-400" 
          rows={4} 
          required 
        />
        
        <motion.div 
          type="submit" 
          className="mt-6 w-full bg-orange-500 text-white font-bold py-2 rounded-md hover:bg-orange-600 transition duration-300"
          whileHover={{ scale: 1.05 }}
        >
          Send Message
        </motion.button>
      </form>

      <div className="mt-8 text-center">
        <motion.div 
          className="text-2xl font-semibold text-red-600"
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Our Location
        </motion.h2>
        <motion.div 
          className="mt-2 text-lg text-gray-700"
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          {location}
        </motion.p>
        <motion.div 
          className="mt-2 text-lg text-gray-700"
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          {businessHours}
        </motion.p>
      </div>
    </div>
  );
};

export default Contact;
import React from 'react';
import { motion } from 'framer-motion';

interface CTASectionProps {
  title: string;
  subtitle: string;
  buttonText: string;
  onButtonClick: () => void;
}

const CTASection: React.FC<CTASectionProps> = ({
  title = "Elevate Your Video Creation with AI",
  subtitle = "Transform your ideas into stunning AI-generated videos effortlessly.",
  buttonText = "Start Creating Now",
  onButtonClick,
}) => {
  return (
    <section className="flex flex-col items-center justify-center py-20 bg-white">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }} 
        className="text-center"
      >
        <h2 className="text-4xl font-bold text-red-600">{title}</h2>
        <p className="mt-4 text-lg text-gray-700">{subtitle}</p>
        <motion.div 
          onClick={onButtonClick} 
          whileHover={{ scale: 1.05 }} 
          whileTap={{ scale: 0.95 }} 
          className="mt-6 px-6 py-3 text-white bg-orange-600 rounded-lg shadow-lg transition duration-300 ease-in-out"
        >
          {buttonText}
        </motion.button>
      </motion.div>
    </section>
  );
};

export default CTASection;
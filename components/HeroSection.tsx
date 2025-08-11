import React from 'react';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ 
  title = "Welcome to AI", 
  subtitle = "Transforming your ideas into stunning videos with advanced AI technology.", 
  ctaText = "Get Started", 
  ctaLink = "#" 
}) => {
  return (
    <section className="relative flex items-center justify-center h-screen bg-gradient-to-r from-red-500 to-orange-500">
      <div className="absolute inset-0 bg-white opacity-10"></div>
      <div className="relative z-10 text-center p-8">
        <motion.div 
          className="text-5xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h1>
        <motion.div 
          className="text-lg text-white mb-8"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {subtitle}
        </motion.p>
        <motion.div 
          href={ctaLink}
          className="inline-block px-6 py-3 bg-white text-red-500 font-semibold rounded-lg shadow-lg hover:bg-red-500 hover:text-white transition-colors duration-300"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {ctaText}
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;
import React from 'react';
import { motion } from 'framer-motion';

interface FooterProps {
  companyName: string;
  links: { title: string; url: string }[];
  socialMedia: { platform: string; url: string }[];
}

const Footer: React.FC<FooterProps> = ({ 
  companyName = "AI", 
  links, 
  socialMedia 
}) => {
  return (
    <footer className="bg-white text-black py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <motion.div 
          className="text-center md:text-left mb-4 md:mb-0"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl font-bold text-red-600">{companyName} - Transforming Your Video Experience</h2>
          <p className="text-gray-600">Empowering creators with AI-driven video solutions.</p>
        </motion.div>

        <motion.div 
          className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {links.map((link, index) => (
            <a 
              key={index} 
              href={link.url} 
              className="text-red-500 hover:text-orange-500 transition duration-200"
            >
              {link.title}
            </a>
          ))}
        </motion.div>

        <motion.div 
          className="flex space-x-4 mt-4 md:mt-0"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {socialMedia.map((media, index) => (
            <a 
              key={index} 
              href={media.url} 
              className="text-red-500 hover:text-orange-500 transition duration-200"
              aria-label={Follow us on ${media.platform}}
            >
              {media.platform}
            </a>
          ))}
        </motion.div>
      </div>

      <div className="text-center mt-6 border-t border-gray-300 pt-4">
        <p className="text-gray-500">&copy; {new Date().getFullYear()} {companyName}. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
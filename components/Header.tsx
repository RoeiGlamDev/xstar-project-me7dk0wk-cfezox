import React from 'react';
import { motion } from 'framer-motion';

interface HeaderProps {
  logo: string;
}

const Header: React.FC<HeaderProps> = ({ logo }) => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <motion.div
          className="flex items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img src={logo} alt="AI Logo" className="h-10 w-10 mr-2" />
          <h1 className="text-2xl font-bold text-red-600">AI - VidNexus</h1>
        </motion.div>
        <nav className="hidden md:flex space-x-6">
          <motion.div
            href="#features"
            className="text-lg text-orange-500 hover:text-red-600 transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Features
          </motion.a>
          <motion.div
            href="#about"
            className="text-lg text-orange-500 hover:text-red-600 transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            About
          </motion.a>
          <motion.div
            href="#contact"
            className="text-lg text-orange-500 hover:text-red-600 transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Contact
          </motion.a>
        </nav>
        <div className="md:hidden">
          <button className="text-red-600 focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
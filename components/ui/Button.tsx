import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', onClick, children }) => {
  const baseStyles = 'px-6 py-3 rounded focus:outline-none transition duration-300 ease-in-out';
  const primaryStyles = 'bg-red-600 text-white hover:bg-red-700';
  const secondaryStyles = 'bg-orange-500 text-white hover:bg-orange-600';

  const variantStyles = variant === 'primary' ? primaryStyles : secondaryStyles;

  return (
    <motion.div
      className={`${baseStyles`} ${variantStyles}}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="AI Button"
    >
      {children}
    </motion.button>
  );
};

export default Button;
import React from 'react';
import { motion } from 'framer-motion';

interface SlideUpProps {
  children: React.ReactNode;
  delay?: number;
}

const SlideUp: React.FC<SlideUpProps> = ({ children, delay = 0 }) => {
  const slideUpAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { delay, duration: 0.5 } },
    exit: { opacity: 0, y: 20, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      variants={slideUpAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
      className="flex flex-col items-center justify-center"
    >
      {children}
    </motion.div>
  );
};

export default SlideUp;
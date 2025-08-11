import React from 'react';
import { motion } from 'framer-motion';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-black bg-opacity-50 z-50">
          <motion.div
            className="bg-white rounded-lg shadow-lg w-11/12 md:w-1/3"
            initial={{ scale: 0}}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
          >
            <div className="p-6">
              <h2 className="text-2xl font-bold text-red-600 mb-4">{title}</h2>
              <div className="text-gray-700 mb-4">
                <p className="mb-2">Welcome to AI, where we leverage cutting-edge technology to revolutionize video creation.</p>
                <p>Our platform, VidNexus, empowers you to create stunning AI-generated videos with ease, harnessing the power of advanced algorithms and machine learning.</p>
              </div>
              {children}
              <button
                onClick={onClose}
                className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default Modal;
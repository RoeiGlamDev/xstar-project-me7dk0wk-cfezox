import React from 'react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-red-600 text-white text-center p-5">
      <motion.div
        className="text-5xl font-bold mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Welcome to AI - VidNexus
      </motion.h1>
      <motion.div
        className="text-xl mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Revolutionizing video creation with cutting-edge AI technology
      </motion.p>
      <motion.div
        className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition duration-300"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
      >
        Get Started
      </motion.button>
    </section>
  );
};

const FeaturesSection: React.FC = () => {
  return (
    <section className="bg-white text-gray-800 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Features of AI - VidNexus</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <motion.div
            className="bg-red-500 text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-4">AI-Powered Video Creation</h3>
            <p>Utilize advanced algorithms to generate high-quality videos effortlessly.</p>
          </motion.div>
          <motion.div
            className="bg-orange-500 text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-4">Real-Time Collaboration</h3>
            <p>Work together with your team in real-time, no matter where you are.</p>
          </motion.div>
          <motion.div
            className="bg-red-500 text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold mb-4">Seamless Integration</h3>
            <p>Easily integrate with your favorite tools and platforms for a smooth workflow.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const LuxuryDesignSection: React.FC = () => {
  return (
    <section className="bg-red-600 text-white py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Experience Luxury with AI - VidNexus</h2>
        <p className="mb-6">
          Our platform combines state-of-the-art technology with a user-friendly interface, providing you with a luxury experience in video creation.
        </p>
        <motion.div
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition duration-300"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
        >
          Learn More
        </motion.button>
      </div>
    </section>
  );
};

const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <LuxuryDesignSection />
    </div>
  );
};

export default HomePage;
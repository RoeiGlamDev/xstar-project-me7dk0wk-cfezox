import React from 'react';
import { motion } from 'framer-motion';

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const features: Feature[] = [
  {
    title: 'Automated Video Creation',
    description: 'Harness the power of AI to create stunning videos in minutes, eliminating the need for manual editing.',
    icon: <i className="fas fa-video text-orange-500"></i>,
  },
  {
    title: 'Advanced AI Analytics',
    description: 'Utilize cutting-edge analytics to understand viewer engagement and optimize video content for maximum impact.',
    icon: <i className="fas fa-chart-line text-orange-500"></i>,
  },
  {
    title: 'Seamless Integration',
    description: 'Easily integrate with various platforms for a smooth workflow, ensuring your videos reach your audience effortlessly.',
    icon: <i className="fas fa-plug text-orange-500"></i>,
  },
  {
    title: 'Customizable Templates',
    description: 'Choose from a wide range of AI-generated templates tailored for different industries and purposes.',
    icon: <i className="fas fa-th-large text-orange-500"></i>,
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <motion.div
          className="text-3xl font-bold text-red-500 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Discover AI Features
        </motion.h2>
        <motion.div
          className="text-gray-600 mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Explore the innovative AI services that VidNexus offers to revolutionize your video creation.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="p-6 border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-red-500 mb-2">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
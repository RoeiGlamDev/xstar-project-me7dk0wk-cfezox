import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <motion.div
      className="bg-white bg-opacity-30 backdrop-blur-md border border-orange-500 rounded-lg p-6 shadow-lg transition-transform transform hover:scale-105"
      whileHover={{ scale: 1.05 }}
    >
      <h2 className="text-2xl font-bold text-red-600 mb-2">{title}</h2>
      <p className="text-gray-800">{description}</p>
    </motion.div>
  );
};

const VidNexusCard: React.FC = () => {
  const title = "AI Video Creation";
  const description = "Transform your ideas into stunning AI-generated videos with VidNexus. Experience the future of technology in video production.";

  return <Card title={title} description={description} />;
};

export default VidNexusCard;
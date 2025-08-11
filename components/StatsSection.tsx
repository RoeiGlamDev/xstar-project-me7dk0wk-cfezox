import React from 'react';
import { motion } from 'framer-motion';

interface StatsItem {
  title: string;
  value: number;
  description: string;
}

const statsData: StatsItem[] = [
  { title: 'AI Videos Created', value: 250, description: 'Innovative AI-generated video content' },
  { title: 'Clients Served', value: 150, description: 'Empowering brands with AI technology' },
  { title: 'Awards Won', value: 5, description: 'Recognized for excellence in AI solutions' },
  { title: 'Countries Reached', value: 30, description: 'Global impact through AI-driven creativity' },
];

const StatsSection: React.FC = () => {
  return (
    <section className="bg-white py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-red-600 mb-6">Achievements of AI</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-orange-500 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.2 }}
            >
              <motion.div className="text-3xl font-bold text-white mb-2">
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 100 }}
                  className="counter"
                >
                  {stat.value}
                </motion.span>
              </motion.h3>
              <p className="text-white text-lg">{stat.title}</p>
              <p className="text-white text-sm mt-2">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
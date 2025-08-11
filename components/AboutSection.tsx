import React from 'react';
import { motion } from 'framer-motion';

interface AboutSectionProps {
    companyStory: string;
    mission: string;
    teamMembers: { name: string; role: string; expertise: string; }[];
}

const AboutSection: React.FC<AboutSectionProps> = ({ companyStory, mission, teamMembers }) => {
    return (
        <section className="bg-white py-16 px-4">
            <div className="max-w-6xl mx-auto">
                <motion.div 
                    className="text-4xl font-bold text-red-600 mb-6"
                    initial={{ opacity: 0, y: -20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.5 }}
                >
                    About AI
                </motion.h2>
                
                <motion.div 
                    className="text-lg text-gray-800 mb-8"
                    initial={{ opacity: 0, y: -20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    {companyStory}
                </motion.p>

                <motion.div 
                    className="text-2xl font-semibold text-orange-600 mb-4"
                    initial={{ opacity: 0, y: -20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    Our Mission
                </motion.h3>
                <motion.div 
                    className="text-lg text-gray-800 mb-8"
                    initial={{ opacity: 0, y: -20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    {mission}
                </motion.p>

                <motion.div 
                    className="text-2xl font-semibold text-red-600 mb-4"
                    initial={{ opacity: 0, y: -20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.5, delay: 0.8 }}
                >
                    Meet Our Team
                </motion.h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {teamMembers.map((member, index) => (
                        <motion.div 
                            key={index}
                            className="bg-orange-100 p-4 rounded-lg shadow transition-transform transform hover:scale-105"
                            initial={{ opacity: 0, y: 20 }} 
                            animate={{ opacity: 1, y: 0 }} 
                            transition={{ duration: 0.5, delay: 1 + index * 0.2 }}
                        >
                            <h4 className="font-bold text-red-600">{member.name}</h4>
                            <p className="text-gray-700">{member.role}</p>
                            <p className="text-gray-500">{member.expertise}</p>
                        </motion.li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default AboutSection;
import React from 'react';
import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  position: string;
  bio: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Alice Johnson',
    position: 'CEO & Founder',
    bio: 'A visionary leader in AI technology with over 10 years of experience.',
    image: '/images/alice.jpg',
  },
  {
    name: 'Bob Smith',
    position: 'CTO',
    bio: 'Expert in machine learning algorithms and AI systems architecture.',
    image: '/images/bob.jpg',
  },
  {
    name: 'Charlie Brown',
    position: 'Head of Product',
    bio: 'Passionate about creating user-friendly AI solutions that transform industries.',
    image: '/images/charlie.jpg',
  },
];

const About: React.FC = () => {
  return (
    <div className="bg-white p-8">
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-red-600">About AI</h1>
        <p className="mt-4 text-lg text-gray-700">
          At AI, we are redefining the future of technology through innovative AI video solutions with our platform, VidNexus.
        </p>
      </motion.div>

      <motion.div
        className="mb-10"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-semibold text-orange-600">Our History</h2>
        <p className="mt-4 text-gray-700">
          Founded in 2021, AI has rapidly evolved to become a leader in AI technology, specializing in video generation and editing. Our commitment to innovation and quality has allowed us to build a platform that empowers creators worldwide.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-semibold text-orange-600 mb-6">Our Values</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Innovation: Pioneering new ideas in AI technology.</li>
          <li>Integrity: Building trust through transparency and honesty.</li>
          <li>Collaboration: Working together to achieve common goals.</li>
          <li>Excellence: Striving for the highest quality in everything we do.</li>
        </ul>
      </motion.div>

      <motion.div
        className="mt-10"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-semibold text-orange-600 mb-6">Meet the Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="bg-red-100 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <img src={member.image} alt={member.name} className="rounded-full w-32 h-32 mx-auto" />
              <h3 className="text-xl font-bold text-red-600 mt-4">{member.name}</h3>
              <p className="text-gray-600">{member.position}</p>
              <p className="mt-2 text-gray-700">{member.bio}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default About;
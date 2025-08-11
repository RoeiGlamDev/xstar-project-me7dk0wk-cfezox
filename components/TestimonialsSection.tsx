import React from 'react';
import { motion } from 'framer-motion';

interface Testimonial {
  id: number;
  name: string;
  photo: string;
  review: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    photo: '/images/sarah.jpg',
    review: 'AI transformed our video marketing strategy! The videos created are not only engaging but have significantly increased our conversion rates.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Michael Smith',
    photo: '/images/michael.jpg',
    review: 'With AI, we were able to automate our video production process, saving time and resources while improving quality.',
    rating: 4,
  },
  {
    id: 3,
    name: 'Lisa Wang',
    photo: '/images/lisa.jpg',
    review: 'The insights provided by AI’s video analytics have helped us tailor our content to better meet our audience’s needs.',
    rating: 5,
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="bg-white py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-red-600">What Our Clients Say About AI</h2>
        <p className="text-lg text-gray-700 mb-10">Discover how AI is revolutionizing video creation for businesses.</p>
        <div className="flex flex-wrap justify-center">
          {testimonials.map(({ id, name, photo, review, rating }) => (
            <motion.div
              key={id}
              className="bg-orange-100 p-5 rounded-lg shadow-lg m-4 w-80 transition-transform transform hover:scale-105"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <img src={photo} alt={name} className="rounded-full w-16 h-16 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-red-500">{name}</h3>
              <p className="text-gray-600 mb-3">Rating: {'⭐'.repeat(rating)}{'⭐'.repeat(5 - rating)}</p>
              <p className="text-gray-700">{review}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
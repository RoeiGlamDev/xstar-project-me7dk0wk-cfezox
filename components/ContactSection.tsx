import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ContactFormValues {
  name: string;
  email: string;
  message: string;
  reason: string;
}

const ContactSection: React.FC = () => {
  const [formValues, setFormValues] = useState<ContactFormValues>({
    name: '',
    email: '',
    message: '',
    reason: '',
  });

  const [errors, setErrors] = useState<Partial<ContactFormValues>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactFormValues> = {};
    if (!formValues.name) newErrors.name = 'Name is required';
    if (!formValues.email) newErrors.email = 'Email is required';
    if (!formValues.message) newErrors.message = 'Message is required';
    if (!formValues.reason) newErrors.reason = 'Please select a reason for contact';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission logic here
      console.log('Form submitted', formValues);
    }
  };

  return (
    <section className="bg-white p-8 rounded-lg shadow-lg">
      <motion.div 
        className="text-3xl font-bold text-red-500 mb-6"
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
      >
        Contact Us at AI
      </motion.h2>
      <p className="text-gray-700 mb-4">
        Have questions about our AI video solutions? Reach out to us!
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-red-500" htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formValues.name}
            onChange={handleChange}
            className={mt-1 p-2 border rounded w-full ${errors.name ? 'border-red-500' : 'border-gray-300'}}
            placeholder="Your Name"
          />
          {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
        </div>
        <div>
          <label className="block text-red-500" htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formValues.email}
            onChange={handleChange}
            className={mt-1 p-2 border rounded w-full ${errors.email ? 'border-red-500' : 'border-gray-300'}}
            placeholder="Your Email"
          />
          {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
        </div>
        <div>
          <label className="block text-red-500" htmlFor="reason">Reason for Contact</label>
          <select
            name="reason"
            id="reason"
            value={formValues.reason}
            onChange={handleChange}
            className={mt-1 p-2 border rounded w-full ${errors.reason ? 'border-red-500' : 'border-gray-300'}}
          >
            <option value="">Select a reason</option>
            <option value="inquiry">General Inquiry</option>
            <option value="partnership">Partnership Opportunities</option>
            <option value="support">Support Request</option>
          </select>
          {errors.reason && <p className="text-red-500 text-xs">{errors.reason}</p>}
        </div>
        <div>
          <label className="block text-red-500" htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            value={formValues.message}
            onChange={handleChange}
            className={mt-1 p-2 border rounded w-full ${errors.message ? 'border-red-500' : 'border-gray-300'}}
            placeholder="Your Message"
            rows={4}
          />
          {errors.message && <p className="text-red-500 text-xs">{errors.message}</p>}
        </div>
        <button
          type="submit"
          className="mt-4 bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition"
        >
          Send Message
        </button>
      </form>
      <div className="mt-8">
        <h3 className="text-xl font-bold text-red-500">Business Information</h3>
        <p className="text-gray-700">Company: AI</p>
        <p className="text-gray-700">Location: 123 Tech Lane, Silicon Valley, CA</p>
        <p className="text-gray-700">Business Hours: Mon-Fri, 9 AM - 5 PM</p>
      </div>
    </section>
  );
};

export default ContactSection;
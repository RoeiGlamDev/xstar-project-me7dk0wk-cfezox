import { useEffect, useRef } from 'react';
import React, { useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { ParticleSystem } from 'three/examples/jsm/particles/ParticleSystem';
import { motion } from 'framer-motion';

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 5;

      const particles = new ParticleSystem();
      // Initialize particles with red, orange, and white colors
      // Add particle settings and animations here

      scene.add(particles);
      
      const animate = () => {
        requestAnimationFrame(animate);
        particles.rotation.x += 0.01;
        particles.rotation.y += 0.01;
        renderer.render(scene, camera);
      };
      animate();

      return () => {
        renderer.dispose();
      };
    }
  }, []);

  return (
    <div className="relative w-full h-screen bg-white">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
        <motion.div
          className="text-5xl font-bold text-red-600 hover:text-orange-500 transition-colors duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          Welcome to AI
        </motion.h1>
        <motion.div
          className="mt-4 text-xl text-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          At AI, we create cutting-edge videos powered by advanced technology.
        </motion.p>
        <motion.div
          className="mt-6 px-6 py-3 bg-orange-500 text-white rounded-lg shadow-md hover:bg-red-600 transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore VidNexus
        </motion.button>
      </div>
    </div>
  );
};

export default ParticleBackground;
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { animated, useSpring } from 'react-spring';
import { OrbitControls, Float } from '@react-three/drei';

const FloatingElements: React.FC = () => {
  const props = useSpring({
    to: { position: [0, 1, 0] },
    from: { position: [0, 0, 0] },
    config: { mass: 1, tension: 170, friction: 26 },
    loop: { reverse: true },
  });

  return (
    <div className="w-full h-screen flex items-center justify-center bg-white">
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} />
        <animated.mesh {...props}>
          <Float speed={3} rotationIntensity={2} floatIntensity={2}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="#FF4500" />
          </Float>
        </animated.mesh>
        <OrbitControls />
      </Canvas>
      <div className="absolute top-10 left-10 text-center">
        <h1 className="text-5xl font-bold text-red-600">Welcome to AI</h1>
        <p className="mt-4 text-xl text-orange-500">
          Create Stunning AI Videos with VidNexus
        </p>
      </div>
    </div>
  );
};

export default FloatingElements;
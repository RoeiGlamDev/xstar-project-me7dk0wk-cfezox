import React from 'react';
import { Canvas } from 'react-three-fiber';
import { animated, useSpring } from 'react-spring';
import { Html } from '@react-three/drei';

const Scene: React.FC = () => {
  const springProps = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: { tension: 280, friction: 60 },
  });

  return (
    <div className="w-full h-screen bg-white flex items-center justify-center">
      <Canvas className="shadow-lg rounded-lg" camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        
        <animated.group style={springProps}>
          <mesh>
            <boxBufferGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="orange" />
          </mesh>
          <Html center>
            <div className="bg-white p-4 rounded-lg shadow-lg text-center">
              <h1 className="text-red-600 text-3xl font-bold">Welcome to AI</h1>
              <p className="text-orange-600">Creating the Future of Video with AI Technology</p>
              <button className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-500 transition-colors">
                Explore VidNexus
              </button>
            </div>
          </Html>
        </animated.group>
      </Canvas>
    </div>
  );
};

export default Scene;
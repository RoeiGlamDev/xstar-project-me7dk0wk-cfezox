import { useEffect, useRef } from 'react';
import * as THREE from 'three';

/
 * Custom hook for managing 3D interactions for the VidNexus platform.
 * This hook uses Three.js to create and interact with 3D elements that showcase AI-generated videos.
 * 
 * @param {string} elementId - The id of the DOM element to attach the 3D canvas to.
 * @returns {void}
 */
const use3D = (elementId: string): void => {
    const sceneRef = useRef<THREE.Scene | null>(null);
    const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
    const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
    
    useEffect(() => {
        // Initialize the 3D scene
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.getElementById(elementId)?.appendChild(renderer.domElement);

        // Set background color for the VidNexus experience
        scene.background = new THREE.Color(0xffffff); // White background

        // Add 3D elements here, e.g., AI video representations
        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial({ color: 0xff4500 }); // Orange color
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        // Position the camera
        camera.position.z = 5;

        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            renderer.render(scene, camera);
        };
        animate();

        // Clean up on component unmount
        return () => {
            renderer.dispose();
            sceneRef.current = null;
            cameraRef.current = null;
            rendererRef.current = null;
        };
    }, [elementId]);

    sceneRef.current = sceneRef.current || scene;
    cameraRef.current = cameraRef.current || camera;
    rendererRef.current = rendererRef.current || renderer;
};

export default use3D;
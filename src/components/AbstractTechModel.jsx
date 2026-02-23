import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Float, Stars, Torus, Environment } from '@react-three/drei';

const Core = () => {
    const meshRef = useRef();

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
            meshRef.current.rotation.z = state.clock.getElapsedTime() * 0.1;
        }
    });

    return (
        <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
            {/* Outer rings representing cloud/data orbits */}
            <Torus args={[2.5, 0.05, 16, 100]} rotation={[Math.PI / 4, 0, 0]}>
                <meshStandardMaterial color="#C8F353" emissive="#C8F353" emissiveIntensity={0.5} wireframe />
            </Torus>
            <Torus args={[3, 0.02, 16, 100]} rotation={[-Math.PI / 3, Math.PI / 6, 0]}>
                <meshStandardMaterial color="#A855F7" emissive="#A855F7" emissiveIntensity={0.8} />
            </Torus>

            {/* Inner dynamic core representing AI */}
            <Sphere ref={meshRef} args={[1.5, 64, 64]}>
                <MeshDistortMaterial
                    color="#1E293B"
                    attach="material"
                    distort={0.5}
                    speed={2.5}
                    roughness={0.2}
                    metalness={0.8}
                />
            </Sphere>

            {/* Glowing inner node */}
            <Sphere args={[0.8, 32, 32]}>
                <meshStandardMaterial color="#C8F353" emissive="#C8F353" emissiveIntensity={2} />
            </Sphere>
        </Float>
    );
};

export default function AbstractTechModel() {
    return (
        <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: 1, pointerEvents: 'auto' }}>
            <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
                <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#A855F7" />
                <Stars radius={50} depth={50} count={1000} factor={3} saturation={0} fade speed={1} />
                <Core />
                <OrbitControls enableZoom={false} enablePan={false} autoRotate={false} />
                <Environment preset="city" />
            </Canvas>
        </div>
    );
}

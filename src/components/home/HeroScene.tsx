"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Float, MeshDistortMaterial, MeshWobbleMaterial } from "@react-three/drei";
import { Suspense } from "react";

function Scene() {
    return (
        <>
            <PerspectiveCamera makeDefault position={[0, 0, 5]} />
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
            <pointLight position={[-10, -10, -10]} intensity={1} color="#D4A017" />

            <Float speed={2} rotationIntensity={1} floatIntensity={1}>
                {/* Modern Abstract Luxury Entity (Representing an Apartment/Building) */}
                <mesh scale={1.2}>
                    <boxGeometry args={[1, 2.5, 1]} />
                    <meshStandardMaterial color="#ffffff" metalness={0.8} roughness={0.1} transparent opacity={0.6} />
                </mesh>

                {/* Accent Elements */}
                <mesh position={[0.6, 0.5, 0.6]}>
                    <boxGeometry args={[0.2, 1.5, 0.2]} />
                    <meshStandardMaterial color="#D4A017" />
                </mesh>

                <mesh position={[-0.6, -0.5, -0.6]}>
                    <boxGeometry args={[0.2, 1.5, 0.2]} />
                    <meshStandardMaterial color="#D4A017" />
                </mesh>

                {/* Dynamic Glow Sphere */}
                <mesh position={[0, 0, 0]}>
                    <sphereGeometry args={[0.5, 32, 32]} />
                    <MeshDistortMaterial
                        color="#D4A017"
                        speed={2}
                        distort={0.4}
                        radius={1}
                    />
                </mesh>
            </Float>
        </>
    );
}

export default function HeroScene() {
    return (
        <div className="absolute inset-0 z-0 opacity-80">
            <Canvas>
                <Suspense fallback={null}>
                    <Scene />
                </Suspense>
            </Canvas>
        </div>
    );
}

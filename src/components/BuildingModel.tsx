import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Environment, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

interface BuildingModelProps {
  progress: number;
}

export function BuildingModel({ progress }: BuildingModelProps) {
  const groupRef = useRef<THREE.Group>(null);
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024;
  
  const isDragging = useRef(false);
  const targetRotation = useRef({ x: 0, y: Math.PI / 4 });
  const lastMousePos = useRef({ x: 0, y: 0 });

  useFrame((state) => {
    if (!groupRef.current) return;
    
    // 2. POSITION & SCALE
    let targetX = 0;
    let targetY = isMobile ? -1.0 : -1.2; 
    let targetScale = isMobile ? 0.75 : 0.85;

    // Smoothly apply transforms
    groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, targetX, 0.08);
    groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, targetY, 0.08);
    groupRef.current.scale.setScalar(THREE.MathUtils.lerp(groupRef.current.scale.x, targetScale, 0.08));
    
    if (isMobile) {
      // Auto slow rotation on mobile
      groupRef.current.rotation.y += 0.005;
    } else {
      // Auto rotation on desktop when not dragging
      if (!isDragging.current) {
        targetRotation.current.y += 0.005;
      }
      
      // Smooth easing to rotation
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotation.current.y, 0.1);
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotation.current.x, 0.1);
    }
  });

  const onPointerDown = (e: React.PointerEvent) => {
    if (isMobile) return;
    isDragging.current = true;
    lastMousePos.current = { x: e.clientX, y: e.clientY };
    e.stopPropagation();
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const onPointerUp = (e: React.PointerEvent) => {
    isDragging.current = false;
    (e.target as HTMLElement).releasePointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current || isMobile) return;
    
    const deltaX = e.clientX - lastMousePos.current.x;
    const deltaY = e.clientY - lastMousePos.current.y;
    
    targetRotation.current.y += deltaX * 0.01;
    targetRotation.current.x += deltaY * 0.01;
    
    // Clamp X rotation for subtle tilt
    targetRotation.current.x = Math.max(-0.15, Math.min(0.15, targetRotation.current.x));
    
    lastMousePos.current = { x: e.clientX, y: e.clientY };
  };

  return (
    <group 
      ref={groupRef}
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
      onPointerMove={onPointerMove}
    >
      {/* Main Building Body */}
      <mesh position={[0, 1.9, 0]}>
        <boxGeometry args={[1.6, 3.8, 1.6]} />
        <meshStandardMaterial 
          color="#ffffff" 
          metalness={0.4} 
          roughness={0.1}
        />
      </mesh>

      {/* Windows */}
      <group>
        {Array.from({ length: 12 }).map((_, floor) => (
          <group key={floor} position={[0, floor * 0.3 + 0.2, 0]}>
            {Array.from({ length: 4 }).map((_, side) => (
              <group key={side} rotation={[0, (side * Math.PI) / 2, 0]}>
                {Array.from({ length: 3 }).map((_, win) => {
                  const statsHighlight = progress >= 0.2 && progress <= 0.4 
                    ? Math.abs((progress - 0.2) / 0.2 * 12 - floor) < 1.5 
                    : false;
                  
                  const featuresHighlight = progress >= 0.6 && progress <= 0.8 && floor > 8;
                  const isHighlighted = statsHighlight || featuresHighlight;
                  
                  return (
                    <mesh key={win} position={[(win - 1) * 0.45, 0, 0.81]}>
                      <planeGeometry args={[0.28, 0.22]} />
                      <meshStandardMaterial 
                        color={isHighlighted ? '#ffffff' : '#4cc9f0'} 
                        emissive={isHighlighted ? '#ffffff' : '#4cc9f0'} 
                        emissiveIntensity={isHighlighted ? 3 : 0.5} 
                        transparent 
                        opacity={0.8} 
                      />
                    </mesh>
                  );
                })}
              </group>
            ))}
          </group>
        ))}
      </group>

      {/* Roof Detail */}
      <mesh position={[0, 3.9, 0]}>
        <boxGeometry args={[1.3, 0.1, 1.3]} />
        <meshStandardMaterial color="#4361ee" />
      </mesh>
      
      {/* Grounded Base */}
      <mesh position={[0, -0.05, 0]}>
        <boxGeometry args={[2.2, 0.1, 2.2]} />
        <meshStandardMaterial 
          color={progress > 0.6 && progress < 0.7 ? '#4cc9f0' : '#1a1a1a'} 
          emissive={progress > 0.6 && progress < 0.7 ? '#4cc9f0' : '#000000'}
          emissiveIntensity={2}
          metalness={0.8} 
          roughness={0.2} 
        />
      </mesh>

      <Environment preset="city" />
      <ContactShadows 
        position={[0, -0.1, 0]} 
        opacity={0.9} 
        scale={18} 
        blur={2.2} 
        far={4} 
      />
    </group>
  );
}

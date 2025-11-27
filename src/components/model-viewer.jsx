import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';


const FloatingModel = ({ url }) => {
  const { scene } = useGLTF(url);
  const modelRef = useRef();

  // Subtle animation: float up and down, gentle rotation
  useFrame(({ clock }) => {
    if (modelRef.current) {
      const t = clock.getElapsedTime();
      modelRef.current.rotation.y = Math.sin(t / 4) * 0.2;
      modelRef.current.position.y = -35 + Math.sin(t) * 0.2;
    }
  });
  return <primitive ref={modelRef} object={scene} scale={8}   rotation={[0, Math.PI / 8, 0]}  position={[10, -35, 0]}  />;
};

const Static3DShowcase = ({ modelUrl }) => {
  return (
    <div style={{ width: '100%', height: '400px' }}>
      <Canvas camera={{ position: [-50, 0, 20], fov: 50 }} dpr={[1, 2]} gl={{ antialias: true }}>
        <ambientLight intensity={1.5} />
        <directionalLight position={[10, 10, 10]} intensity={2} />
        <directionalLight position={[-10, -10, -10]} intensity={1} />
        <pointLight position={[0, 10, 0]} intensity={1} />
        <spotLight position={[20, 20, 20]} intensity={1.5} angle={0.3} penumbra={0.1} />
        <Suspense fallback={null}>
          <FloatingModel url={modelUrl} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Static3DShowcase;
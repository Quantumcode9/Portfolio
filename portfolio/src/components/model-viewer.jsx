import React, { useEffect, useRef } from 'react';




const ModelViewer = ({ modelUrl }) => {
    const modelRef = useRef(null);
    useEffect(() => {
        const modelElement = modelRef.current;

        const handleClick = (event) => {
            console.log('Model clicked!', event);
            modelElement.cameraOrbit = '265deg 119deg 1m'; 
        };
        modelElement.addEventListener('click', handleClick);

        return () => {
            modelElement.removeEventListener('click', handleClick);
        }
    }, []);



    return (
        <model-viewer
  ref={modelRef}
  src={modelUrl}
  alt="A 3D model of a laptop"
  ios-src={modelUrl}
  environment-image="neutral"
  exposure="1" 
    shadow-color="#000"
  disable-tap
  shadow-intensity="1"
  shadow-softness="1"
  disable-pan
  disable-zoom
  camera-controls
  camera-orbit="265deg 100deg 25m"
  min-camera-orbit="auto 100deg auto"
  max-camera-orbit="auto 100deg auto"
  style={{
    width: '100%',
    height: '400px',
    border: '1px solid #ccc',
    transition: 'all 0.3s ease',
  }}
  onPointerOver={() => {
    modelRef.current.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.3)';
    modelRef.current.style.border = '1px solid #999';
  }}
  onPointerOut={() => {
    modelRef.current.style.boxShadow = '';
    modelRef.current.style.border = '1px solid #ccc';
  }}
></model-viewer>
    );
};

export default ModelViewer;

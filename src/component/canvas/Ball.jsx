import React, { Suspense } from "react";
import { Canvas,useFrame} from "@react-three/fiber";
import { Decal, Float, OrbitControls, Preload, useTexture } from "@react-three/drei";
import CanvasLoader from '../Loader';

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  
  // Use a ref to keep track of the mesh
  const meshRef = React.useRef();
  
  // Rotate and move the mesh on each frame
  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    if (meshRef.current) {
      // Rotation
      meshRef.current.rotation.y = elapsedTime * 0.1;
      
      // Movement
      meshRef.current.position.y = Math.sin(elapsedTime * 0.5) * 0.5; // Vertical movement
      meshRef.current.position.x = Math.cos(elapsedTime * 0.5) * 0.5; // Horizontal movement
    }
  });
  
  
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={1}>
      <ambientLight intensity={1.25} />
      <directionalLight position={[0, 0, 1.05]} />
      <mesh castShadow receiveShadow scale={2.05}>
        <icosahedronGeometry args={[1, 1]} />
        {<meshStandardMaterial color="#fff8eb"
        polygonOffset polygonOffsetFactor={-5}
        flatShading  />}
        <Decal 
        map={decal}
        position={[0,0,1]}
        rotation={[2*Math.PI,0,6.25]}
        scale={2}
       />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas frameloop="demand" dpr={[1, 2]} gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;

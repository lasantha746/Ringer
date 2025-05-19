// ObjViewer.jsx
import React, { useEffect, useRef } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';
import * as THREE from 'three';
import { MTLLoader, OBJLoader } from 'three-stdlib';

function Model({
  objPath,
  mtlPath,
  width,
  height,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  onModelTopReady,
}) {
  const groupRef = useRef();
  const innerRef = useRef(); // <== NEW

  const materials = useLoader(MTLLoader, mtlPath);
  const obj = useLoader(OBJLoader, objPath, (loader) => {
    materials.preload();
    loader.setMaterials(materials);
  });

  useEffect(() => {
    const PIXELS_TO_UNITS = 100;

    const box = new THREE.Box3().setFromObject(obj);
    const size = new THREE.Vector3();
    const center = new THREE.Vector3();

    box.getSize(size);
    box.getCenter(center);

    obj.position.sub(center); // Center it locally

    const widthUnits = width / PIXELS_TO_UNITS;
    const heightUnits = height / PIXELS_TO_UNITS;

    const scaleX = widthUnits / size.x;
    const scaleY = heightUnits / size.y;
    const scaleZ = heightUnits / size.z;
    const scale = Math.min(scaleX, scaleY, scaleZ);

    groupRef.current.scale.setScalar(scale);

    // Compute world top point
    // Compute world top point + some extra Y offset
    const modelBox = new THREE.Box3().setFromObject(obj);
    const modelCenter = new THREE.Vector3();
    modelBox.getCenter(modelCenter);
    const topY = modelBox.max.y;

    // This is the actual top center of the model
    const topPoint = new THREE.Vector3(modelCenter.x, topY, modelCenter.z);

    // Add offset to move target above the model
    const verticalOffset = modelBox.getSize(new THREE.Vector3()).y * -0.20; // 25% above top
    topPoint.y += verticalOffset;

    const worldTopPoint = topPoint.clone();
    groupRef.current.localToWorld(worldTopPoint);


    if (onModelTopReady) {
      onModelTopReady(worldTopPoint);
    }
  }, [obj, width, height]);

  return (
    <group // Outer group for final position & rotation
      ref={groupRef}
      position={position}
      rotation={rotation.map(THREE.MathUtils.degToRad)}
    >
      <primitive ref={innerRef} object={obj} />
    </group>
  );
}

export default function ObjViewer({
  obj,
  mtl,
  width,
  height,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
}) {
  const controlsRef = useRef();

  const handleModelTopReady = (topPoint) => {
    if (controlsRef.current) {
      controlsRef.current.target.copy(topPoint);
      controlsRef.current.update();
    }
  };

  return (
    <div className="w-full h-full flex items-center justify-center">
      <Canvas
        className="w-full h-full flex items-center justify-center"
        camera={{ position: [0, 0, 5], fov: 50 }}
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[10, 10, 5]} intensity={1} />

        <Model
          objPath={obj}
          mtlPath={mtl}
          width={width}
          height={height}
          position={position}
          rotation={rotation}
          onModelTopReady={handleModelTopReady}
        />

        <OrbitControls ref={controlsRef} enableZoom={true} />
      </Canvas>
    </div>
  );
}

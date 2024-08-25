import { Canvas } from "@react-three/fiber";
import React from "react";
import "./style.css";
import { OrbitControls } from "@react-three/drei";
import {
  Bloom,
  EffectComposer,
  ToneMapping,
} from "@react-three/postprocessing";
import * as THREE from "three";
import Cyl from "./Cyl";

const App = () => {
  return (
    <>
      <Canvas camera={{ fov: 35 }}>
        <OrbitControls />
        <ambientLight />
        <Cyl />
        <EffectComposer>
          {/* your effects go here */}
          <Bloom
            mipmapBlur
            intensity={12.0} // The bloom intensity.
            luminanceThreshold={0} // luminance threshold. Raise this value to mask out darker elements in the scene.
            luminanceSmoothing={0} // smoothness of the luminance threshold. Range is [0, 1]
          />
          <ToneMapping adaptive />
        </EffectComposer>
      </Canvas>

      <div className="w-full bg-black py-32" >
        <h1 className="text-white text-center text-xl" > Made with ❤️ by Adnaan Hussain </h1>

      </div>
    </>
  );
};

export default App;

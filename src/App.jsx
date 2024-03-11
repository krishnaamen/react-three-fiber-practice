import { Canvas } from "@react-three/fiber"

import './App.css';
import Sphere from "./components/Sphere";
import Cube from "./components/Cube";
import Torus from "./components/Torus";
import TorusKnot from "./components/TorusKnot";
import { OrbitControls } from "@react-three/drei";

//https://github.com/pmndrs/drei?tab=readme-ov-file#cameracontrols
//https://youtu.be/vTfMjI4rVSI?si=JsQq57kKWo1wLOwT 

const App = () => {


  return (
    <div className="maindiv">
      <h1>Cube</h1>
      <Canvas >

        <directionalLight position={[0, 0, 2]} />
        <Cube position={[0, 0, 2]} size={[2, 2, 2]} color={'orange'} />

        {/* <group position={[1, 0, -3]}>
          <Cube position={[1, 0, 0]} color={"green"} size={[1, 1, 1]} />
          <Cube position={[-1, 0, 0]} color={"blue"} size={[1, 1, 1]} />
          <Cube position={[1, 2, 0]} color={"red"} size={[1, 1, 1]} />
          <Cube position={[-1, 2, 0]} color={"black"} size={[1, 1, 1]} />

        </group> */}



      </Canvas >
      <h1>Sphere mix</h1>
      <Canvas>
        <directionalLight position={[2, 1, 10]} />
        <Sphere position={[1, 0, 0]} size={[1.5, 100, 30]} color={'red'} wireframe={false} />
        <Sphere position={[1, 0, 0]} size={[1.5, 100, 30]} color={'blue'} wireframe={true} />

      </Canvas>

      <h1>Sphere with wireframe true</h1>
      <Canvas>
        <directionalLight position={[1, 1, 2]} />
        <Sphere position={[0, 1, 0]} size={[1.5, 12, 30]} color={'blue'} wireframe={true} />
        <OrbitControls />
      </Canvas>

      <h1>Torus</h1>
      <Canvas>
        <directionalLight position={[2, 1, 10]} />
        <Torus position={[1, 0, 0]} size={[1, 0.1, 30, 30]} color={'blue'} />
      </Canvas>

      <h1>TorusKnot</h1>
      // canvas should be adjusted
      <Canvas>
        <directionalLight position={[2, 1, 10]} />
        <TorusKnot position={[, 0, 0]} size={[1, 0.1, 30, 30]} color={'blue'} />
      </Canvas>

    </div>
  )
}

export default App

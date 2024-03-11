import { Canvas, useFrame } from "@react-three/fiber"
import { useRef } from "react"


const Sphere = ({ position, size, color }) => {
  const ref = useRef();
  useFrame((state, delta) => {
    ref.current.rotation.x += delta
    ref.current.rotation.y += delta
    ref.current.position.x = Math.sin(state.clock.elapsedTime) * 2;
    ref.current.position.y = Math.sin(state.clock.elapsedTime) * 2;


  })

  return (
    <mesh position={position} ref={ref}>
      <sphereGeometry args={size} />
      <meshStandardMaterial color={color} />
    </mesh>

  )
}


const Torus = ({ position, size, color }) => {
  const ref = useRef();
  useFrame((state, delta) => {
    ref.current.rotation.x += delta
    ref.current.rotation.y += delta
    ref.current.position.x = Math.sin(state.clock.elapsedTime);
    ref.current.position.z = Math.sin(state.clock.elapsedTime);


  })

  return (
    <mesh position={position} ref={ref}>
      <torusGeometry args={size} />
      <meshStandardMaterial color={color} />
    </mesh>

  )
}




const Cube = ({ position, size, color }) => {
  const ref = useRef()
  useFrame((state, delta) => {
    ref.current.rotation.x += delta
    ref.current.rotation.y += delta
    ref.current.position.z = Math.sin(state.clock.elapsedTime) * 2;

  })

  return (
    <mesh position={position} ref={ref}>
      <boxGeometry args={size} />

      <meshStandardMaterial color={color} />

    </mesh>
  )
}



function App() {


  return (
    <>
      <h1>Cube</h1>
      <Canvas>

        <directionalLight position={[0, 0, 2]} />
        <Cube position={[0, 0, 2]} size={[2, 2, 2]} color={'orange'} />

        {/* <group position={[1, 0, -3]}>
          <Cube position={[1, 0, 0]} color={"green"} size={[1, 1, 1]} />
          <Cube position={[-1, 0, 0]} color={"blue"} size={[1, 1, 1]} />
          <Cube position={[1, 2, 0]} color={"red"} size={[1, 1, 1]} />
          <Cube position={[-1, 2, 0]} color={"black"} size={[1, 1, 1]} />

        </group> */}



      </Canvas>
      <h1>Sphere</h1>
      <Canvas>
        <directionalLight position={[2, 1, 10]} />
        <Sphere position={[1, 0, 0]} size={[1.5, 30, 30]} color={'red'} />
      </Canvas>

      <h1>Torus</h1>
      <Canvas>
        <directionalLight position={[2, 1, 10]} />
        <Torus position={[1, 0, 0]} size={[1,0.1, 30, 30]} color={'blue'} />
      </Canvas>

    </>
  )
}

export default App

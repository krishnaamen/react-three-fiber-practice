import { Canvas, useFrame } from "@react-three/fiber"
import { useRef } from "react"




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
      <div>Portfolio</div>
      <Canvas>
        <directionalLight position={[0, 0, 2]} />
        <Cube position={[0,0,2]} size={[2,2,2]} color={'orange'} />

        {/* <group position={[1, 0, -3]}>
          <Cube position={[1, 0, 0]} color={"green"} size={[1, 1, 1]} />
          <Cube position={[-1, 0, 0]} color={"blue"} size={[1, 1, 1]} />
          <Cube position={[1, 2, 0]} color={"red"} size={[1, 1, 1]} />
          <Cube position={[-1, 2, 0]} color={"black"} size={[1, 1, 1]} />

        </group> */}

      </Canvas>

    </>
  )
}

export default App

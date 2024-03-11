import React,{useRef} from 'react'
import { useFrame } from '@react-three/fiber'

const TorusKnot = ({ position, size, color }) => {
    const ref = useRef();
    useFrame((state, delta) => {
      ref.current.rotation.x += delta
      ref.current.rotation.y += delta
      ref.current.position.x = Math.sin(state.clock.elapsedTime);
      ref.current.position.z = Math.sin(state.clock.elapsedTime);
  
  
    })
  
    return (
      <mesh position={position} ref={ref}>
        <torusKnotGeometry args={size} />
        <meshStandardMaterial color={color} />
      </mesh>
  
    )
  }


export default TorusKnot
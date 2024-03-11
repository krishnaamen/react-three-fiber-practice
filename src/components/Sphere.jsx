import React,{useRef} from 'react'
import { useFrame } from '@react-three/fiber';


    const Sphere = ({ position, size, color,wireframe }) => {
        const ref = useRef();
        useFrame((state, delta) => {
          ref.current.rotation.y += delta 
          
          //ref.current.position.x = Math.sin(state.clock.elapsedTime) * 2;
          
      
      
        })
      
        return (
          <mesh position={position} ref={ref}>
            <sphereGeometry args={size} />
            <meshStandardMaterial color={color}  wireframe={wireframe} />
          </mesh>
      
        )
      }


export default Sphere
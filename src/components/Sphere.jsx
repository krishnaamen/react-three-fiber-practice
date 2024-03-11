import React, { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber';


const Sphere = ({ position, size, wireframe }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    const ref = useRef();
    useFrame((state, delta) => {
        ref.current.rotation.y += delta

        //ref.current.position.x = Math.sin(state.clock.elapsedTime) * 2;



    })

    return (
        <mesh
            position={position}
            ref={ref}
            onPointerEnter={(e) => { e.stopPropagation(), setIsHovered(true) }}
            onPointerLeave={() => { setIsHovered(false) }}
            onClick={() => setIsClicked(!isClicked)}
            scale={isClicked ? 2 : 1}


        >
            <sphereGeometry args={size} />
            <meshStandardMaterial color={isHovered ? "orange" : "blue"} wireframe={wireframe} />
        </mesh>

    )
}


export default Sphere
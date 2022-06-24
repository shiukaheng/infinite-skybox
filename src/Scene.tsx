import { useCubeTexture } from "@react-three/drei";
import { Fragment, useRef } from "react";
// import { SkyboxMaterial, SkyboxMaterialComponent } from "./materials/SkyboxMaterial";
import px from "./sample_cubemap/posx.jpg";
import nx from "./sample_cubemap/negx.jpg";
import py from "./sample_cubemap/posy.jpg";
import ny from "./sample_cubemap/negy.jpg";
import pz from "./sample_cubemap/posz.jpg";
import nz from "./sample_cubemap/negz.jpg";
import { extend, useFrame } from "@react-three/fiber";
import { SkyboxMaterial } from "./materials/SkyboxMaterial";
extend({ SkyboxMaterial });

export function Scene() {
    const cubeMap = useCubeTexture([px, nx, py, ny, pz, nz], {path: ""});
    const meshRef = useRef<any>();
    useFrame(()=>{
        if(meshRef.current) {
            meshRef.current.rotation.y += 0.001;
            meshRef.current.rotation.x += 0.005;
            meshRef.current.rotation.z += 0.005;
        }
    })
    return (
        <Fragment>
            <ambientLight/>
            <mesh ref={meshRef}>
                <boxGeometry attach="geometry" args={[10, 10, 10, 10, 10, 10]}/>
                {/* <meshStandardMaterial attach="material" color="red"/> */}
                <skyboxMaterial map={cubeMap}/>
            </mesh>
        </Fragment>
    )
}
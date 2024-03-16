import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from '@react-three/drei';
import { Environment } from '@react-three/drei';
import React, { Suspense } from "react";
import Spinner from "../../compoments/Spinner";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { rovesnikModel } from "../../shared/assets";
import styles from './styles.module.scss';

const BarMap = () => {
    const model = useLoader(GLTFLoader, rovesnikModel);

    return (
         <Canvas className={styles.root}>
            <Suspense fallback={<Spinner />}>
                <primitive object={model.scene} />
            </Suspense>

            <OrbitControls />
            <directionalLight castShadow />
            <Environment preset='city' />
        </Canvas>
    )
};

export default BarMap;

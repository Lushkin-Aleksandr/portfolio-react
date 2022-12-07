import React, {useCallback} from 'react';
import {Engine, ISourceOptions} from "tsparticles-engine";
import {loadFull} from "tsparticles";
import styles from "./BackgroundParticle.module.scss";
import Particles from "react-tsparticles";

export const BackgroundParticle = () => {

    const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine);
    }, []);

    const options: ISourceOptions = {
        fullScreen: false,
        particles: {
            color: {
                value: "#ffffff",
            },
            links: {
                color: "#ffffff",
                distance: 180,
                enable: true,
                opacity: 0.5,
                width: 1,
            },
            collisions: {
                enable: true,
            },
            move: {
                direction: "none",
                enable: true,
                outMode: "bounce",
                random: false,
                speed: 1,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    value_area: 800,
                },
                value: 50,
            },
            opacity: {
                value: 0.5,
            },
            shape: {
                type: "circle",
            },
            size: {
                random: true,
                value: 2,
            },
        },
    }

    return <Particles
        id="BackgroundParticle"
        className={styles.particle}
        init={particlesInit}
        options={options}/>
}
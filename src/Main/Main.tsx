import React from 'react';
import styles from './Main.module.scss'
import stylesContainer from '../common/styles/Container.module.scss'
import {BackgroundParticle} from "./BackgroundParticle/BackgroundParticle";
import ReactTypingEffect from "react-typing-effect";
import Tilt from 'react-parallax-tilt'
// import mainPhoto from '../assets/images/mainPhoto.jpg'

const Main = () => {


    return (
        <div id={'main'} className={styles.mainBlock}>
            <div className={`${stylesContainer.container} ${styles.mainContainer}`}>
                <div className={styles.text}>
                    <span>Hi There</span>
                    <h1>I am Aleksandr Lushkin</h1>
                    <ReactTypingEffect
                        className={styles.typingText}
                        cursorClassName={styles.typingText}
                        text={'A Frontend Developer'}/>
                </div>
                <Tilt reset={false} style={{zIndex: '1'}}>
                    <div className={styles.photoWrapper}>
                        <img src={'mainPhoto'} alt={'main photo'} className={styles.photo}/>
                    </div>
                </Tilt>
                <BackgroundParticle/>
            </div>

        </div>
    );
};

export default Main;
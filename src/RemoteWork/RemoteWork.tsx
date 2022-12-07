import React from 'react';
import styles from './RemoteWork.module.scss'
import stylesContainer from '../common/styles/Container.module.scss'
import Title from "../common/components/Title/Title";
import Button from "../common/components/Button/Button";
import {Fade} from "react-awesome-reveal";


const RemoteWork = () => {
    return (
        <div className={styles.remoteWorkBlock}>
            <Fade triggerOnce={true} duration={1000}>
                <div className={`${stylesContainer.container} ${styles.remoteWorkContainer}`}>
                    <Title text={'Also interested in remote work'}/>
                    <Button className={styles.button}>Hire me</Button>
                </div>
            </Fade>
        </div>
    );
};

export default RemoteWork;
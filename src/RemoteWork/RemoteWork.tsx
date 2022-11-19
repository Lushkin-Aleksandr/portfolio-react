import React from 'react';
import styles from './RemoteWork.module.scss'
import stylesContainer from '../common/styles/Container.module.css'
import Title from "../common/components/Title/Title";
import Button from "../common/components/Button/Button";


const RemoteWork = () => {
    return (
        <div className={styles.remoteWorkBlock}>
            <div className={`${stylesContainer.container} ${styles.remoteWorkContainer}`}>
                <Title text={'Also interested in remote work'}/>
                <Button className={styles.button}>Hire me</Button>
            </div>
        </div>
    );
};

export default RemoteWork;
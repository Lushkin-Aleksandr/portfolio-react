import React from 'react';
import styles from './Main.module.scss'
import stylesContainer from '../common/styles/Container.module.css'

const Main = () => {
  return (
    <div id={'main'} className={styles.mainBlock}>
      <div className={`${stylesContainer.container} ${styles.mainContainer}`}>
        <div className={styles.text}>
          <span>Hi There</span>
          <h1>I am Aleksandr Lushkin</h1>
          <p>Frontend developer</p>
        </div>
        <div className={styles.photoWrapper}>
          <div className={styles.photo}></div>
          <div className={styles.photoBorder}></div>
        </div>
      </div>
    </div>
  );
};

export default Main;
import React from 'react';
import styles from './Main.module.css'
import stylesContainer from '../common/styles/Container.module.css'

const Main = () => {
  return (
    <div className={styles.mainBlock}>
      <div className={stylesContainer.container}>
        <div className={styles.text}>
          <span>Hi There</span>
          <h1>I am Jeffrey Aaron</h1>
          <p>Frontend developer</p>
        </div>
        <div className={styles.photo}></div>
      </div>
    </div>
  );
};

export default Main;
import React from 'react';
import styles from './RemoteWork.module.css'
import stylesContainer from '../common/styles/Container.module.css'


const RemoteWork = () => {
  return (
    <div className={styles.remoteWorkBlock}>
      <div className={`${stylesContainer.container} ${styles.remoteWorkContainer}`}>
        <h2 className={styles.title}>Also interested in remote work</h2>
        <button className={styles.button}>Hire me</button>
      </div>
    </div>
  );
};

export default RemoteWork;
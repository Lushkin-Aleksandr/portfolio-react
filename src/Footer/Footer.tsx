import React from 'react';
import styles from './Footer.module.css'
import stylesContainer from '../common/styles/Container.module.css'


const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={`${stylesContainer.container} ${styles.footerContainer}`}>
        <h2 className={styles.title}>Aleksandr Lushkin</h2>
        <div className={styles.socialNetworks}>
          <div className={styles.icon}></div>
          <div className={styles.icon}></div>
          <div className={styles.icon}></div>
          <div className={styles.icon}></div>
        </div>
        <span className={styles.copyright}>© 2022 All rights reserved</span>
      </div>
    </div>
  );
};

export default Footer;
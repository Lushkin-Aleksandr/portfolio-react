import React from 'react';
import styles from './Footer.module.scss'
import stylesContainer from '../common/styles/Container.module.scss'
import {Fade} from "react-awesome-reveal";


const Footer = () => {
  return (
    <div className={styles.footer}>
      <Fade className={styles.fade} triggerOnce={true} duration={1000}>
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
      </Fade>
    </div>
  );
};

export default Footer;
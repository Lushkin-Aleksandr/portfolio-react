import React from 'react';
import styles from './Footer.module.scss'
import stylesContainer from '../common/styles/Container.module.scss'
import {Fade} from "react-awesome-reveal";
import {SocialNetworkIcon} from "./SocialNetworkIcon/SocialNetworkIcon";
import telegramLogo from '../assets/icons/telegram.svg'
import facebookLogo from '../assets/icons/facebook.svg'
import githubLogo from '../assets/icons/github.svg'
import linkedinLogo from '../assets/icons/linkedin.svg'


const Footer = () => {
  return (
    <div className={styles.footer}>
      <Fade className={styles.fade} triggerOnce={true} duration={1000}>
        <div className={`${stylesContainer.container} ${styles.footerContainer}`}>
          <h2 className={styles.title}>Aleksandr Lushkin</h2>
          <div className={styles.socialNetworks}>
            <SocialNetworkIcon imgUrl={telegramLogo}/>
            <SocialNetworkIcon imgUrl={facebookLogo}/>
            <SocialNetworkIcon imgUrl={linkedinLogo}/>
            <SocialNetworkIcon imgUrl={githubLogo}/>
          </div>
          <span className={styles.copyright}>© 2022 All rights reserved</span>
        </div>
      </Fade>
    </div>
  );
};

export default Footer;
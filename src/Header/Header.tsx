import React from 'react';
import styles from './Header.module.css'
import stylesContainer from '../common/styles/Container.module.css'
import Nav from "../Nav/Nav";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={`${stylesContainer.container} ${styles.headerContainer}`}>
        <Nav/>
      </div>
    </div>
  );
};

export default Header;
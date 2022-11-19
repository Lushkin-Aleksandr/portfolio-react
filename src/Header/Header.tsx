import React from 'react';
import styles from './Header.module.scss'
import stylesContainer from '../common/styles/Container.module.css'
import Nav from "../Nav/Nav";
import {useScrollDirection} from "../utils/useScrollDirection";

const Header = () => {
    const scrollDirection = useScrollDirection()

    return (
        <div className={`${styles.header} ${scrollDirection === 'down' ? styles.hide : styles.show}`}>
            <div className={`${stylesContainer.container} ${styles.headerContainer}`}>
                <Nav/>
            </div>
        </div>
    );
};

export default Header;
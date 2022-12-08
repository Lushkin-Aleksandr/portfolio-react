import React, {useState} from 'react';
import styles from './Header.module.scss'
import stylesContainer from '../common/styles/Container.module.scss'
import Nav from "../Nav/Nav";
import {useScrollDirection} from "../utils/useScrollDirection";
import {BurgerButton} from "./BurgerButton/BurgerButton";

const Header = () => {
    // const scrollDirection = useScrollDirection()
    // const headerClassAfterScroll = scrollDirection === 'down' ? styles.hide : styles.show

    const [isHidden, setIsHidden] = useState(true)
    const hideHeader = () => {
        setIsHidden(!isHidden)
    }

    const headerHideClass = isHidden ?  styles.hide : ''

    return (
        <div className={`${styles.header} ${headerHideClass}`}>
            <div className={`${stylesContainer.container} ${styles.headerContainer}`}>
                <Nav/>
                <BurgerButton isOpen={!isHidden} callback={hideHeader}/>
            </div>
        </div>
    );
};

export default Header;
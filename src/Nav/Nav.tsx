import React from 'react';
import styles from './Nav.module.scss'
import {Link, LinkProps} from "react-scroll";

type PropsType = {

}

const Nav: React.FC<PropsType> = (props) => {

    const linkOptions: LinkProps | object = {
        smooth: true,
        duration: 300,
        spy: true,
        activeClass: styles.active,
    }

    return (
        <div className={styles.nav}>
            <Link to="main" {...linkOptions}>Main</Link>
            <Link to="skills" {...linkOptions}>Skills</Link>
            <Link to="projects" {...linkOptions}>Projects</Link>
            <Link to="contacts" {...linkOptions}>Contacts</Link>
        </div>
    );
};

export default Nav;
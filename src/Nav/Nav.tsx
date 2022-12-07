import React from 'react';
import styles from './Nav.module.css'
import {Link, LinkProps} from "react-scroll";

const Nav = () => {

    const linkOptions: LinkProps | object = {
        smooth: true,
        duration: 300
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
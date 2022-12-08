import React from 'react';
import styles from './Contacts.module.scss'
import stylesContainer from '../common/styles/Container.module.scss'
import Title from "../common/components/Title/Title";
import Button from "../common/components/Button/Button";
import {Fade} from "react-awesome-reveal";


const Contacts = () => {
    return (
        <div id={'contacts'} className={styles.contactsBlock}>
            <Fade className={styles.fade} triggerOnce={true} duration={1000}>
                <div className={`${stylesContainer.container} ${styles.contactsContainer}`}>
                    <Title text={'Contacts'}/>
                    <form className={styles.form}>
                        <input className={styles.input} placeholder={'Name'}/>
                        <input className={styles.input} placeholder={'E-mail'}/>
                        <textarea className={styles.textarea} placeholder={'Your message'}></textarea>
                        <button className={styles.submitButton}>send message</button>
                    </form>
                </div>
            </Fade>
        </div>
    );
};

export default Contacts;
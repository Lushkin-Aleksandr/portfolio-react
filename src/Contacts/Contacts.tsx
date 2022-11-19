import React from 'react';
import styles from './Contacts.module.scss'
import stylesContainer from '../common/styles/Container.module.css'
import Title from "../common/components/Title/Title";
import Button from "../common/components/Button/Button";


const Contacts = () => {
  return (
    <div id={'contacts'} className={styles.contactsBlock}>
      <div className={`${stylesContainer.container} ${styles.contactsContainer}`}>
        <Title text={'Contacts'}/>
        <form className={styles.form}>
          <input className={styles.input} placeholder={'Name'}/>
          <input className={styles.input} placeholder={'E-mail'}/>
          <textarea className={styles.textarea} placeholder={'Your message'}></textarea>
        </form>
        <Button>send message</Button>
      </div>
    </div>
  );
};

export default Contacts;
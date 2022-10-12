import React from 'react';
import styles from './Contacts.module.css'
import stylesContainer from '../common/styles/Container.module.css'


const Contacts = () => {
  return (
    <div className={styles.contactsBlock}>
      <div className={`${stylesContainer.container} ${styles.contactsContainer}`}>
        <h2 className={styles.title}>Contacts</h2>
        <form className={styles.form}>
          <input className={styles.input} placeholder={'input'}/>
          <input className={styles.input} placeholder={'input'}/>
          <textarea className={styles.textarea} placeholder={'textarea'}></textarea>
        </form>
        <button className={styles.button}>Send</button>
      </div>
    </div>
  );
};

export default Contacts;
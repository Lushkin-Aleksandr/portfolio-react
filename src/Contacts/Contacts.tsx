import React from 'react';
import styles from './Contacts.module.css'
import stylesContainer from '../common/styles/Container.module.css'


const Contacts = () => {
  return (
    <div className={styles.contactsBlock}>
      <div className={`${stylesContainer.container} ${styles.contactsContainer}`}>
        <h2 className={styles.title}>Contacts</h2>
        <form className={styles.form}>
          <input placeholder={'input'}/>
          <input placeholder={'input'}/>
          <textarea placeholder={'textarea'}></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
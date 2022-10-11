import React from 'react';
import styles from './Skill.module.css'

type PropsType = {
  title: string
  description: string
}

const Skill:React.FC<PropsType> = (props) => {
  return (
    <div className={styles.skill}>
      <div className={styles.icon}></div>
      <h3 className={styles.title}>{props.title}</h3>
      <span className={styles.description}>{props.description}</span>
    </div>
  );
};

export default Skill;
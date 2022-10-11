import React from 'react';
import styles from './Skills.module.css'
import stylesContainer from '../common/styles/Container.module.css'
import Skill from "./Skill/Skill";


const Skills = () => {
  return (
    <div className={styles.skillsBlock}>
      <div className={`${stylesContainer.container} ${styles.skillsContainer}`}>
        <h2 className={styles.title}>Skills</h2>
        <div className={styles.skills}>
          <Skill title={'HTML'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, ut!'}/>
          <Skill title={'CSS'} description={'Lorem ipsum dolor sit amet'}/>
          <Skill title={'REACT'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, ut!'}/>
        </div>
      </div>

    </div>
  );
};

export default Skills;
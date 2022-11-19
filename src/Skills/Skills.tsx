import React from 'react';
import styles from './Skills.module.scss'
import stylesContainer from '../common/styles/Container.module.css'
import Skill from "./Skill/Skill";
import Title from "../common/components/Title/Title";


const Skills = () => {
  return (
    <div id={'skills'} className={styles.skillsBlock}>
      <div className={`${stylesContainer.container} ${styles.skillsContainer}`}>
        <Title text={'Skills'}/>
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
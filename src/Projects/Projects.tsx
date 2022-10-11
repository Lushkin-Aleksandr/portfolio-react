import React from 'react';
import styles from './Projects.module.css'
import stylesContainer from '../common/styles/Container.module.css'
import Project from "./Project/Project";


const Projects = () => {
  return (
    <div className={styles.projectsBlock}>
      <div className={`${stylesContainer.container} ${styles.projectsContainer}`}>
        <h2 className={styles.title}>Projects</h2>
        <div className={styles.projects}>
          <Project title={'Counter'} description={'Smart counter with Redux'}/>
          <Project title={'Todolist'} description={'Quite Trello!!!'}/>
        </div>
      </div>
    </div>
  );
};

export default Projects;
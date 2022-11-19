import React from 'react';
import styles from './Projects.module.scss'
import stylesContainer from '../common/styles/Container.module.css'
import Project from "./Project/Project";
import Title from "../common/components/Title/Title";


const Projects = () => {
    const counterBg = {
        backgroundImage: `url(https://play-lh.googleusercontent.com/dvPnZK6yR0kw-nM0Vfcy7lNDmdYS50QMCa7318emsFIieB7AtbdJC0ykSv1tczw6udA)`
    }
    const todoBg = {
        backgroundImage: `url(https://play-lh.googleusercontent.com/VPqK75BwKMtTDFF6UQS6E3GYdYqzvZfddDxoKRH-DSlXIcYLN_EeSy5OXKx0bhBTtLUU`
    }

    return (
        <div id={'projects'} className={styles.projectsBlock}>
            <div className={`${stylesContainer.container} ${styles.projectsContainer}`}>
                <Title text={'Projects'}/>
                <div className={styles.projects}>
                    <Project style={counterBg} title={'Counter'} description={'Smart counter with Redux'}/>
                    <Project style={todoBg} title={'Todolist'} description={'Quite Trello!!!'}/>
                    <Project style={todoBg} title={'Future project'} description={'Lorem ipsum dolor sit amet.'}/>
                </div>
            </div>
        </div>
    );
};

export default Projects;
import React from 'react';
import styles from './Skills.module.scss'
import stylesContainer from '../common/styles/Container.module.css'
import Skill from "./Skill/Skill";
import Title from "../common/components/Title/Title";
import HtmlIcon from "../common/components/svgComponents/HtmlIcon";
import CssIcon from "../common/components/svgComponents/CssIcon";
import ReactIcon from "../common/components/svgComponents/ReactIcon";


const Skills = () => {
    return (
        <div id={'skills'} className={styles.skillsBlock}>
            <div className={`${stylesContainer.container} ${styles.skillsContainer}`}>
                <Title text={'Skills'}/>
                <div className={styles.skills}>
                    <Skill
                        title={'HTML'}
                        description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, ut!'}>
                        <HtmlIcon/>
                    </Skill>
                    <Skill
                        title={'CSS'}
                        description={'Lorem ipsum dolor sit amet'}>
                        <CssIcon/>
                    </Skill>
                    <Skill
                        title={'REACT'}
                        description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, ut!'}>
                        <ReactIcon/>
                    </Skill>
                </div>
            </div>

        </div>
    );
};

export default Skills;
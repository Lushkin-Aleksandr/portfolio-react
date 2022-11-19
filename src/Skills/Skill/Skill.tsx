import React from 'react';
import styles from './Skill.module.scss'

type PropsType = {
    title: string
    description: string
    children?: React.ReactNode
}

const Skill: React.FC<PropsType> = (props) => {
    return (
        <div className={styles.skill}>
            <div className={styles.iconContainer}>
                <div className={styles.icon}>{props.children}</div>
            </div>
            <h3 className={styles.title}>{props.title}</h3>
            <p className={styles.description}>{props.description}</p>
        </div>
    );
};

export default Skill;
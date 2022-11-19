import React, {CSSProperties} from 'react';
import styles from './Project.module.scss'


type PropsType = {
    title: string
    description: string
    style?: CSSProperties
}

const Project: React.FC<PropsType> = (props) => {
    return (
        <div className={styles.project}>
            <div style={props.style} className={styles.imgContainer}>
                <a className={styles.link} href="#">View more</a>
            </div>

            <div className={styles.info}>
                <h3 className={styles.title}>{props.title}</h3>
                <p className={styles.description}>{props.description}</p>
            </div>
        </div>
    );
};

export default Project;
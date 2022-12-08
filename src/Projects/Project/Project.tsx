import React, {CSSProperties} from 'react';
import styles from './Project.module.scss'
import Button from "../../common/components/Button/Button";


type PropsType = {
    title: string
    description: string
    style?: CSSProperties
}

const Project: React.FC<PropsType> = (props) => {
    return (
        <div className={styles.project}>
            <div className={styles.imgContainer}>
                <div style={props.style}  className={styles.img}></div>
                <Button className={styles.button}>View</Button>
            </div>

            <div className={styles.info}>
                <h3 className={styles.title}>{props.title}</h3>
                <p className={styles.description}>{props.description}</p>
            </div>
        </div>
    );
};

export default Project;
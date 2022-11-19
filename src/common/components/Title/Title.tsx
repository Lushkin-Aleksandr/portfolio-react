import React from 'react';
import styles from "./Title.module.scss";

type PropsType = {
    text: string
}

const Title = (props: PropsType) => {
    return (
        <div className={styles.title}>
            <h2>{props.text}</h2>
        </div>
    );
};

export default Title;
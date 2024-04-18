import React from 'react';
import styles from "./index.module.scss";

interface IProps {
    title: string,
    color: string,
    widthUnderLine?: boolean,
}

const Index = ({title, color}: IProps) => {
    return (
        <div className={`${styles.wrapper} text__${color}`}>
            <h2>{title}</h2>
        </div>
    );
}

export default Index;

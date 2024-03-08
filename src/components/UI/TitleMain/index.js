import styles from "./index.module.scss";

const TitleMain = ({title, color}) => {
    return (
        // <div className={`${styles.wrapper} ${styles[color]}`}>
        <div className={`${styles.wrapper} text__${color}`}>
            <h2>{title}</h2>
        </div>
    );
}

export default TitleMain;
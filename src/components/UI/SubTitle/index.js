import styles from "./index.module.scss";

const SubTitle = ({ text, color }) => {
    return (
        <div className={`${styles.wrapper} text__${color}`}>
            <h2>{text}</h2>
        </div>
    );
}

export default SubTitle;
import styles from "./index.module.scss";

const Index = ({title, color}) => {
    return (
        <div className={`${styles.wrapper} text__${color}`}>
            <h2>{title}</h2>
        </div>
    );
}

export default Index;

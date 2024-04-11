import styles from "./index.module.scss";

interface Ipros {
    title: string;
    color: string;
    withUnderline: boolean | string;
}

const Index = ({title, color, withUnderline}: Ipros) => {
    return (
        // <div className={`${styles.wrapper} ${styles[color]}`}>
        <div className={`${styles.wrapper} text__${color} ${withUnderline && styles.underlined}`}>
            <h2>{title}</h2>
        </div>
    );
}

export default Index;

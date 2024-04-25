import styles from "./index.module.scss";

interface IProps {
    title: string;
    color?: string;
    withUnderline?: boolean; 
}

const Index = ({title, color, withUnderline}: IProps) => {
    return (
        // <div className={`${styles.wrapper} ${styles[color]}`}>
        <div className={`${styles.wrapper} text__${color} ${withUnderline ? styles.underlined : ''}`}>
            <h2>{title}</h2>
        </div>
    );
}

export default Index;

import styles from "./index.module.scss";

interface Ipros {
    text: string;
    color: string;
}

const Index = ({ text, color } : Ipros) => {
    return (
        <div className={`${styles.wrapper} text__${color}`}>
            <h2>{text}</h2>
        </div>
    );
}

export default Index;

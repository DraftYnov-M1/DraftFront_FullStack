import styles from "./index.module.scss";
interface IProps {
    text: string,
    handleClick?: ()=> void,
}

const Index = ({handleClick, text}: IProps) => {
    return (
        <button className={styles.btn} onClick={handleClick}>
            {text}
        </button>
    );
}

export default Index;

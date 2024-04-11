import styles from "./index.module.css";

interface Iprops {
    children: React.ReactNode;
    onClose: () => void;
}

const Index = ({children, onClose} : Iprops) => {
    return (
        <>
            <div className={styles.overlay} onClick={onClose}></div>
            <div className={styles.modal}>
                {children}
            </div>
        </>
    );
}

export default Index;

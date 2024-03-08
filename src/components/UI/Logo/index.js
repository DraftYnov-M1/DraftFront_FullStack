import styles from "./index.module.scss";

const Logo = ({textSize}) => {
    return (
        <div className={styles.wrapper} style={{fontSize: textSize}}>
            <h2>M.W.A</h2>
        </div>
    );
}

export default Logo;
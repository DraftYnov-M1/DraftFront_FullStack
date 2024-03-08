import Logo from "@/components/UI/Logo";
import styles from "./index.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer__main}>
        <div className={styles.footer__bar} />
        <div className={styles.wrapper}>
            <Logo textSize={30}/>
            <p>Copyright © 2024</p>
        </div>
    </footer>
  );
};

export default Footer;

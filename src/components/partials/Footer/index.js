import Logo from "@/components/UI/Logo";
import styles from "./index.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer__main}>
        <div className={styles.footer__bar} />
        <div className={styles.wrapper}>
          <div className={styles.wrapper__left}>
            <Logo textSize={30}/>
          </div>
          <div className={styles.wrapper__right}>
            <p>Copyright © 2024</p>
          </div>
        </div>
    </footer>
  );
};

export default Footer;

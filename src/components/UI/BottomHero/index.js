"use client";
import Link from "next/link";
import TitleMain from "@/components/UI/TitleMain";
import Slider from "@/components/UI/Slider";
import styles from "./index.module.scss";

const BottomHero = ({buttonLink, buttonText}) => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapper__left}>
                <TitleMain title="Discover the best blog ever" color="grey" />
                <div className={styles.bottomHero__bar}></div>
                <p className={styles.bottomHero__text}>Lorem ipsum <b>dolor sit amet, consectetur adipiscing</b> elit, sed do eiusmod tempor <em>incididunt ut labore et dolore</em> magna aliqua. Ut enim ad minim <b><u>veniam</u></b>.</p>
                <Link className="btn btn__primary" href={buttonLink}>{buttonText}</Link>
            </div>
            <div className={styles.wrapper__right}>
                <Slider />
            </div>
        </div>
    );

}; 

export default BottomHero;
'use client';
import { useEffect, useState } from "react";
import TitleMain from "@/components/UI/TitleMain";
import SubTitle from "@/components/UI/SubTitle";
import Link from "next/link";
import styles from "./index.module.scss";

interface IProps {
    subtitle: string;
    title: string;
    image: string;
    buttonLink: string;
    buttonText: string;
};

const Index = ({subtitle, title, image, buttonLink, buttonText}: IProps) => {

    const [heroHeight, setHeroHeight] = useState<number>(0);

    const adjustSize = () => { 
        const windowHeight = window.innerHeight;
        const headerHeight = (document.querySelector("header") as HTMLElement)?.offsetHeight || 0;
        setHeroHeight(windowHeight - headerHeight);
    }

    useEffect(() => {
        adjustSize();
        window.addEventListener("resize", () => {
            adjustSize();
        });
    }, []);

    return (
        <div className={styles.wrapper} style={{ height: `${heroHeight}px`}}>
            <div className={styles.content}>
                <SubTitle text="We talk about" color="white" />
                <TitleMain title="Cloud Computing" color="white" withUnderline={false}/ >
                <Link className="btn btn__primary" href={buttonLink}>
                    {buttonText}
                </Link>
            </div>
            <div className={styles.overlay}></div>
            <div className={styles.frame}>
                <img src={image} alt="Wonderfull app" />
            </div>
        </div>
    );
};

export default Index;

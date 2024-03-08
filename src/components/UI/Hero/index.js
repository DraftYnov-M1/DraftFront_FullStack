"use client";

import { useEffect, useState } from "react";
import TitleMain from "@/components/UI/TitleMain";
import SubTitle from "@/components/UI/SubTitle";
import Link from "next/link";
import Image from "next/image";
import styles from "./index.module.scss";

const Hero = ({ subtitle, title, image, buttonLink, buttonText }) => {
  const [heroHeight, setHeroHeight] = useState(0);

  const adjustSize = () => {
    const windowHeight = window.innerHeight;
    const headerHeight = document.querySelector("header").offsetHeight;
    setHeroHeight(windowHeight - headerHeight);
  };

  useEffect(() => {
    adjustSize();
    window.addEventListener("resize", () => {
      adjustSize();
    });
  }, []);

  return (
    <div className={styles.wrapper} style={{ height: `${heroHeight}px` }}>
      <div className={styles.content}>
        <SubTitle text="We talk about" color="white" />
        <TitleMain title="Cloud Computing" color="white" />
        <Link href={buttonLink}>{buttonText}</Link>
      </div>
      <div className={styles.overlay}></div>
      <div className={styles.frame}>
        <img src={image} alt="Wonderful app" />
      </div>
    </div>
  );
};

export default Hero;

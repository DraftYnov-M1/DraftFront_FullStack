"use client";
import Link from "next/link";
import SearchInput from '@/components/UI/SearchInput';
import styles from "./index.module.scss";
import Image from "next/image";
import fb_img from '@/assets/Facebook.svg';
import twitt_img from '@/assets/Twitter.svg';

const Index = () => {
    return (
        <>
        <header className={styles.header__main}>
            <SearchInput />
            <h1>MWA</h1>
            <div className={styles.icons_cont}>
                <Image className={styles.logo} src={fb_img} alt="logo"/>
                <div className={styles.circle}/>
                <Image className={styles.logo} src={twitt_img} alt="logo"/>
            </div>
        </header>
        </>
    );
}

export default Index;
"use client";

import Link from "next/link";
import Image from "next/image";
import SearchInput from "@/components/UI/SearchInput";
import facebooklogo from "@/assets/img/facebook.svg";
import twitterlogo from "@/assets/img/twitter.svg"; 
import styles from "./index.module.scss";

const Index = () => {
  return (
    <>
      <header className={styles.header__main}>
        <div className={styles.left_part}>
          <SearchInput />
        </div>
        <Link href="/">
          <h1 className={styles.logo}>M.W.A</h1>
        </Link>
        <div className={styles.right_part}>
            <Image src={facebooklogo} alt="facebook" width={14} height={25} />
            <div className={styles.dot}/>
            <Image src={twitterlogo} alt="twitter" height={18} />
        </div>
      </header>
    </>
  );
};

export default Index;

import React from 'react';
import Image from 'next/image';
import backgroundImage from '@/assets/img/bg.png';
import styles from './index.module.scss';

const Hero = () => {
  return (
    <div className={styles.hero}>
        {/* <Image src={backgroundImage} alt="Background" className={styles.hero_bg_image} /> */}
        <div className={styles.hero_content}>
            <h2>Bienvenue sur notre site</h2>
            <p>Découvrez tout ce que nous avons à offrir.</p>
            <a href="#plus-dinfos" className="cta-button">En savoir plus</a>
        </div>
  </div>
  );
};

export default Hero;

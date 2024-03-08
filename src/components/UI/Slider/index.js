'use client';
import { useState } from "react";
import styles from "./index.module.scss";

const Slider = () => {
    const [translateValue, setTranslateValue] = useState(0);

    const getPrevSlide = () => {
        // Your logic to get the previous slide
    };

    const getNextSlide = () => {
        // Your logic to get the next slide
    };


  return (
    <div className={styles.wrapper}>
        <div className={styles.slider}>
    


        </div>
      
    </div>
  );
};

export default Slider;

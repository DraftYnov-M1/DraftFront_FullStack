'use client';
import { useState, useEffect } from "react";
import sliderImage1 from "@/assets/img/slider1.svg";
import styles from "./index.module.scss";

const Index = () => {


    // TODO : 
    // 1. Iso maquette
    // 2. Bloquer le slide si au début ou à la fin
    // 3. Mettre les points de navigation et les rendre fonctionnels
    // -> Prévoir currentSlide et le mettre à jour à chaque slide
    //4. Calculer de manière dynamique la valeur exacte à slider (attention à la marge/gap)
    // 5. Gérer le swipe avec la souris

    const [translateValue, setTranslateValue] = useState(0);

    const getPrevSlide = () => { 
        setTranslateValue(translateValue + 500)
    }

    const getNextSlide = () => { 
        setTranslateValue(translateValue - 500)
    }

    return (
        <>
            <button className={styles.LeftButton} onClick={()=>getPrevSlide()}>
                <svg width="58" height="60" viewBox="0 0 58 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="27.5" cy="27.5" r="27" transform="matrix(-1 0 0 1 55 5)" fill="#FF7F7F" stroke="white"/>
                    <g clip-path="url(#clip0_605_48)">
                        <path d="M27.5 29.2121V25.2818C27.5 25.0651 27.4356 24.8532 27.3152 24.673C27.1948 24.4928 27.0236 24.3524 26.8234 24.2695C26.6231 24.1865 26.4028 24.1648 26.1902 24.2071C25.9777 24.2494 25.7824 24.3537 25.6291 24.5069L18.4107 31.7253C18.2053 31.9308 18.0898 32.2095 18.0898 32.5002C18.0898 32.7908 18.2053 33.0695 18.4107 33.275L25.6291 40.4934C25.7824 40.6466 25.9777 40.751 26.1902 40.7933C26.4028 40.8355 26.6231 40.8138 26.8234 40.7309C27.0236 40.6479 27.1948 40.5075 27.3152 40.3273C27.4356 40.1471 27.5 39.9353 27.5 39.7185V35.7882H30.788V29.2121H27.5Z" stroke="white" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M37.3641 29.2119V35.788" stroke="white" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M34.0761 29.2119V35.788" stroke="white" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_605_48">
                            <rect width="26.3043" height="26.3043" fill="white" transform="matrix(-1 0 0 1 40.6522 19.3479)"/>
                        </clipPath>
                    </defs>
                </svg>
            </button>
            <div className={styles.wrapper__slider}
                onMouseDown={(e) => { console.log("j'appuie sur le clique") }}
                onMouseMove={(e) => { console.log("je bouge la souris") }}
                onMouseUp={(e) => { console.log("je relache le clique") }}
            >
                <div className={styles.slider} style={{transform: `translateX(${translateValue}px)`}}>
                    <div data-index="1" className={styles.slide}>   
                        <img src={sliderImage1.src} alt="Slider 1" />
                    </div>
                    <div data-index="2" className={styles.slide}>
                        <img src={sliderImage1.src} alt="Slider 1" />
                    </div>
                    <div data-index="3" className={styles.slide}>
                        <img src={sliderImage1.src} alt="Slider 1" />
                    </div>
                    <div data-index="4" className={styles.slide}>
                        <img src={sliderImage1.src} alt="Slider 1" />
                    </div>
                </div>
                <div className={styles.navigation}>
                    <ul className={styles.navigation__item}>
                        <li>
                            <button onClick={()=>getPrevSlide()} />
                        </li>
                        <li>
                            <button />
                        </li>
                        <li>
                            <button  onClick={()=>getNextSlide()} />
                        </li>
                        <li>
                            <button  onClick={()=>getNextSlide()} />
                        </li>
                    </ul>
                </div>
            </div>
            <button className={styles.LeftButton} onClick={()=>getNextSlide()}>
                <svg width="58" height="60" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="27.5" cy="27.5" r="27" fill="#FF7F7F" stroke="white"/>
                    <g clip-path="url(#clip0_12_88)">
                        <path d="M27.5 24.2121V20.2818C27.5001 20.0651 27.5644 19.8532 27.6848 19.673C27.8052 19.4928 27.9764 19.3524 28.1766 19.2695C28.3769 19.1865 28.5972 19.1648 28.8098 19.2071C29.0224 19.2494 29.2176 19.3537 29.3709 19.5069L36.5893 26.7253C36.7947 26.9308 36.9102 27.2095 36.9102 27.5002C36.9102 27.7908 36.7947 28.0695 36.5893 28.275L29.3709 35.4934C29.2176 35.6466 29.0224 35.751 28.8098 35.7933C28.5972 35.8355 28.3769 35.8138 28.1766 35.7309C27.9764 35.6479 27.8052 35.5075 27.6848 35.3273C27.5644 35.1471 27.5001 34.9353 27.5 34.7185V30.7882H24.212V24.2121H27.5Z" stroke="white" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M17.6359 24.2119V30.788" stroke="white" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M20.9239 24.2119V30.788" stroke="white" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_12_88">
                            <rect width="26.3043" height="26.3043" fill="white" transform="translate(14.3478 14.3479)"/>
                        </clipPath>
                    </defs>
                </svg>
            </button>
        </>
    );
}

export default Index;
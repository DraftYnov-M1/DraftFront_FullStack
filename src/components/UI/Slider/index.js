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
            <div className={styles.wrapper}
                onMouseDown={(e) => { console.log("j'appuie sur le clique") }}
                onMouseMove={(e) => { console.log("je bouge la souris") }}
                onMouseUp={(e) => { console.log("je relache le clique") }}
            >
                <div className={styles.slider} style={{transform: `translateX(${translateValue}px)`}}>
                    <div data-index="1" className={styles.slide}>   
                        <img src={sliderImage1.src} alt="Slider 1" />
                    </div>
                    <div data-index="2" className={styles.slide}>
                    </div>
                    <div data-index="3" className={styles.slide}>
                    </div>
                    <div data-index="4" className={styles.slide}>
                    </div>
                </div>
            </div>
            <div className={styles.navigation}>
                <ul className={styles.navigation__item}>
                    <button onClick={()=>getPrevSlide()} />
                    <button />
                    <button  onClick={()=>getNextSlide()} />
                </ul>
            </div>
        </>
    );
}

export default Index;
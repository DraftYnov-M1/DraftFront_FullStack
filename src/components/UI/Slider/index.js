import Image from "next/image";
import style from './index.module.scss';
import img from '@/assets/girl.png'
import swipeImg from '@/assets/swipe.png'

const Slider = () => {
    return(
        <div className={`${style.wrapper}`}>
            <div className={`${style.swipeLeft}`}><Image src={swipeImg}/></div>
            <div className={`${style.background}`}></div>
            <Image className={`${style.img}`} src={img} alt="Cloud Computing"/>
            <div className={`${style.swipeRight}`}><Image className={`${style.image}`} src={swipeImg}/></div>
        </div>
    );
}
export default Slider;
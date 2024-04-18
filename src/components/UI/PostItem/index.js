import Link from "next/link";
import styles from "./index.module.scss";
import Image from "next/image";
import img from "@/assets/arrow.png"

const Index = ({article}) => {

    return (
            <Link className={`${styles.item}`} key={article.id} href={`/blog/${article.id}`}>
                <p>{article.date}</p>
                <h3>{article.title}</h3>
                <a>{article.id}</a>
                <Image className={`${styles.arrow}`} src={img}/>
            </Link>
    );
}

export default Index;

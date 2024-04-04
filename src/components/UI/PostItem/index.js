import Link from "next/link";
import styles from "./index.module.scss";

const Index = ({article}) => {

    return (
        <div className={styles.card} key={article.id}>
            <Link href={`/blog/${article.id}`}>
                <p>{article.id}</p>
                <h2>{article.title}</h2>
                <p>{article.date}</p>
                <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_4_80)">
                        <path d="M31.1667 25.6667H38.5V18.3334" stroke="#2C3E50" stroke-width="2.75" stroke-linecap="round" strokeLinejoin="round"/>
                        <path d="M5.5 22C7.12617 24.354 10.0467 25.7272 12.8333 25.6667C15.62 25.7272 18.5405 24.354 20.1667 22C21.7928 19.646 24.7133 18.2728 27.5 18.3333C30.2867 18.2728 33 20.1667 34.8333 22L38.5 25.6667" stroke="#2C3E50" stroke-width="2.75" stroke-linecap="round" strokeLinejoin="round"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_4_80">
                            <rect width="44" height="44" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>

            </Link>
        </div>
    );
}

export default Index;

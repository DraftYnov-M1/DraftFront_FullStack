import PostItem from "../PostItem/index";
import style from "./index.module.scss";
import { Articles } from "@/interfaces";

interface IProps {
    articles: Articles[],

}
const Index = ({ articles }: IProps) => {
    return (
        <div className={`${style.grid}`}>
            {
                articles?.map(article => (
                    // on utilise le composant PostItem dans l'itération pour afficher chaque article
                    <PostItem key={article.id} article={article} />
                ))
            }
        </div>
    );
}

export default Index;

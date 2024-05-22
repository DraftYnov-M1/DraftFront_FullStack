'use client';
import { createContext, useState, useEffect } from 'react';
import { Article } from "@/interfaces/";

interface ContextProps {
    children: React.ReactNode;
}

type context = {
    articles: Article[];
    addArticle: (article: Article) => void;
    removeArticle: (article: Article) => void;
}

const WishlistContext = createContext<context>({
    articles: [],
    addArticle: () => { },
    removeArticle: () => { },
});

export default WishlistContext;

export const WishlistContextProvider = ({ children }: ContextProps) => {

    const [articles, setArticles] = useState<Article[]>([]);

    // Chercher dans le localstorage si on a des artciles sur la key : wishlist
    // à faire dans le useEffect 
    useEffect(() => {
        const wishlist = JSON.parse(localStorage.getItem("whishlist"));
        if (wishlist) {
            setArticles(wishlist);
        }
    }, []);

    const addArticle = (article: Article) => {
        //rajouter le nouvel article dans le localStorage
        if (!articles.find((item) => item.id === article.id)) {
            setArticles([...articles, article]);
            localStorage.setItem("whishlist", JSON.stringify([...articles, article]));
        }
    };
    
    const removeArticle = (article: Article) => {
        setArticles(articles.filter((item) => item.id !== article.id));
    };

    const context = {
        articles,
        addArticle,
        removeArticle,
    };

    return (
        <WishlistContext.Provider value= { context } >
            { children }
        </WishlistContext.Provider>
		);
}
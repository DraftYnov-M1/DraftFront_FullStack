'use client';
import { createContext, useEffect, useState } from 'react';
import { Article } from "@/interfaces/";

interface ContextProps {
    children: React.ReactNode;
}

type context = {
    articles: Article[];
}

const WishlistContext = createContext<context>({
    articles : []
});

export default WishlistContext;

export const WishlistContextProvider = ({ children }: ContextProps) => {
    const [articles, setArticles] = useState<Article[]>([]);

    //chercher dans le localstorage si on a des articles sur la key wishlist
    // à faire dans le useEffect

    useEffect(() => {
        if (localStorage.getItem('wishlist')) {
            setArticles(JSON.parse(localStorage.getItem('wishlist') || '[]'));
        } else {
            localStorage.setItem('wishlist', JSON.stringify(articles));
        }
    }, []);


    const addArticle = (article: Article) => {
        setArticles([...articles, article]);
        //rajouter le nouvel article dans le localstorage
        localStorage.setItem('wishlist', JSON.stringify([...articles, article]));
    };
    
    const removeProduct = (article: Article) => {
        setArticles(articles.filter((item) => item.id !== article.id));
        //supprimer l'article du localstorage
        localStorage.setItem('wishlist', JSON.stringify(articles.filter((item) => item.id !== article.id)));
    };

    const context = {
        articles,
        addArticle,
        removeProduct,
    };

    return (
        <WishlistContext.Provider value= { context } >
            { children }
        </WishlistContext.Provider>
	);
}
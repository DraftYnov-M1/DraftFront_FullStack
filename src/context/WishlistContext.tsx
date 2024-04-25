'use client';
import { createContext, useState } from 'react';
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

    const addProduct = (article: Article) => {
        setArticles([...articles, article]);
    };
    
    const removeProduct = (article: Article) => {
        setArticles(articles.filter((item) => item.id !== article.id));
    };

    const context = {
        articles,
        addProduct,
        removeProduct,
    };

    return (
        <WishlistContext.Provider value= { context } >
            { children }
        </WishlistContext.Provider>
		);
}
'use client';

import { createContext, useState } from 'react';
import { Article } from '@/interfaces/index';

interface IProps {
    children: React.ReactNode;
};

type ContextType = {
    articles: Article[];
}

const WishlistContext = createContext<ContextType>({
    articles: [],
});

export const WishlistContextProvider = ({children} : IProps) => {
    const [articles, setArticles] = useState<Article[]>([]);

    const addArticle = (article : Article) => {
        setArticles([...articles, article]);
    };

    const removeArticle = (article : Article) => {
        setArticles(articles.filter((item) => item.id !== article.id));
    };

    const context = {
        articles,
        addArticle,
        removeArticle,
    };

    return (
        <WishlistContext.Provider value={context}>
            {children}
        </WishlistContext.Provider>
    );
};
"use client";
import {useEffect, useState} from "react";
import { useParams } from 'next/navigation';
import articlesService from "@/services/articles.api";
import TitleArticle from "@/components/article/TitleArticle";
import DescriptionArticle from "@/components/article/DescriptionArticle";
import DateArticle from "@/components/article/DateArticle";
import { Article } from "@/interfaces/articles";

const Page = () => {

    const params = useParams()
    // const [article, setArticle] = useState<Article | null>(null); ou
    const [article, setArticle] = useState<Article>({
        id: 0,
        date: '',
        title: '',
        description: '',
        image: ''
    });
    const [loading, isLoading] = useState<boolean>(false);

    useEffect(() => { 
        isLoading(true);
        articlesService.getArticle(Number(params.id)).then(data => {
            setArticle(data.results);
        })
        .catch(err => console.log(err))
        .finally(() => isLoading(false));
    }, []);

    if (loading) return <div>Chargement...</div>;

    return (
        <div>
            <TitleArticle title={article?.title} />
            <DateArticle date={article?.date} />
            <DescriptionArticle description={article?.description} />
        </div>
    );
}

export default Page;
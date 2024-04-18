"use client";
import Head from "next/head";
import { useState, useEffect } from "react";
import { GET_ARTICLES } from "@/graphql/queries";
import GridPosts from "@/components/UI/GridPosts";
import Button from "@/components/UI/Button";
import SubTitle from "@/components/UI/SubTitle";
import styles from "./index.module.scss";
import { Article } from "@/interfaces";

const Page = () => {

    // const [articles, setArticles] = useState<Article | null>(null);
    const [filters, setFilters] = useState({
        limit: 6
    });
    const articles = {
        data: {
          getArticles: [
            {
              id: 1,
              title: 'Les Meilleures Pratiques pour la Sécurité des Applications Web',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, libero in fringilla luctus, libero dolor luctus libero, euismod.',
              image: 'https://via.placeholder.com/300',
              date: '2021-08-10T00:00:00Z',
            },
            {
              id: 2,
              title: 'Conseils pour Optimiser les Performances de Votre Site Web',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, libero in fringilla luctus, libero dolor luctus libero, euismod.',
              image: 'https://via.placeholder.com/300',
              date: '2021-08-10T00:00:00Z',
            },
            {
              id: 3,
              title: "Les Avancées Récentes dans le Domaine de l'Intelligence Artificielle",
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, libero in fringilla luctus, libero dolor luctus libero, euismod.',
              image: 'https://via.placeholder.com/300',
              date: '2021-08-10T00:00:00Z',
            },
            {
              id: 4,
              title: 'Les Meilleures Pratiques pour la Sécurité des Applications Web',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, libero in fringilla luctus, libero dolor luctus libero, euismod.',
              image: 'https://via.placeholder.com/300',
              date: '2021-08-10T00:00:00Z',
            },
            {
              id: 5,
              title: 'Conseils pour Optimiser les Performances de Votre Site Web',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, libero in fringilla luctus, libero dolor luctus libero, euismod.',
              image: 'https://via.placeholder.com/300',
              date: '2021-08-10T00:00:00Z',
            },
            {
              id: 6,
              title: "Les Avancées Récentes dans le Domaine de l'Intelligence Artificielle",
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, libero in fringilla luctus, libero dolor luctus libero, euismod.',
              image: 'https://via.placeholder.com/300',
              date: '2021-08-10T00:00:00Z',
            }
          ]  
        }
      };

    // const fetchArticles = async () => {
    //     const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/graphql`, {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify({
    //             query: GET_ARTICLES,
    //             variables: {
    //                 filters: {
    //                     limit: Number(filters.limit) || 6
    //                 }
    //             }
    //         }),
    //     });
    //     const articles = await res.json();
    //     setArticles(articles);
    // }

    // useEffect(() => {
    //     // console.log(filters);
    //     // console.log(articles.data.getArticles.length)
    //     fetchArticles();
    // }, [filters]);

    return (
        <>
        <Head>
            <title>Blog</title>
            <meta name="description" content="Blog page" />
        </Head>
        <div className="container">
            <div id="grid">
                <div className={styles.title__content}>
                    <SubTitle text="Our latest news" color="primary" />
                </div>
                {
                    articles && <GridPosts articles={articles.data.getArticles} />
                }
            </div>
            {
                // on affiche le bouton Load more pour charger plus d'articles
                filters.limit <= articles.data.getArticles.length && (
                    <div className={styles.loadmore}>
                        <Button text="Load more" handleClick={() => {
                            setFilters({limit: filters.limit + 6});
                        }} />
                    </div>
                )
            }
            </div>
        </>
    );
}

export default Page;

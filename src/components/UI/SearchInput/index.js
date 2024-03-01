"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import searchlogo from "@/assets/img/search.svg";
import articlesService from "@/services/articles.api.js";
import styles from "./index.module.scss";

const Index = () => {

    const [search, setSearch] = useState("");
    const [results, setResults] = useState([]);

    useEffect(() => {
        if (search.length > 3) {
            articlesService.searchArticles(search)
                .then(res => {
                    setResults(res.results);
                })
                .catch(err => console.log(err))
        }
    }, [search]);

    return (
        <div className={styles.wrapper}>
            <div className={styles.search}>
                <Image src={searchlogo} alt="search" />
            </div>
            <div className={styles.input}>
                <input
                    type="text"
                    placeholder="search"
                    value={search}
                    name="search"
                    autoComplete="off"
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
            {
                search.length > 3 && (
                    <div className={styles.results}>
                        {
                            results && results.length > 0 ? results.map((result) => {
                                return (
                                    <Link
                                        onClick={()=>setSearch('')}
                                        href={`/blog/${result.id}`} key={result.id}>
                                        <p>{result.title}</p>
                                    </Link>
                                )
                            }) : (
                                <p>No results</p>
                            )
                        }
                    </div>
                )
            }
        </div>
    );
}

export default Index;

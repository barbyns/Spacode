import { useEffect, useState } from "react";
import {Article} from '../types/Article';
import { ArticleCard } from "./ArticleCard";

export const ArticleList: React.FC = ()=> {
    const [articles, setArticles] = useState<Article[]>([]);
    useEffect (()=> {
        fetch('https://api.spaceflightnewsapi.net/v4/articles')
        .then(res => res.json())
        .then(data => setArticles(data.results))
        .catch(err => console.error(err));
    },[]);
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
            {articles.map(article =>(
                <ArticleCard key ={article.id} article={article}/>
            ))}
        </div>
    );
};
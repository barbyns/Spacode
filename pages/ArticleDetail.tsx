import {useParams} from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Article } from '../types/Article'

export const ArticleDetail : React.FC = () => {
    const {id} = useParams<{ id: string} > ();
    const [article, setArticle] = useState<Article | null>(null);

    useEffect(()=> {
        fetch(`https://api.spaceflightnewsapi.net/v4/articles/${id}`)
        .then(res => res.json())
        .then(setArticle)
        .catch(console.error);
    }, [id]);
    if (!article) return <p>Caricament...</p>;
     return (
        <div className="container mx-auto py-6">
            <img src={article.image_url} alt={article.title} className="w-full max-h-96 object-cover rounded"/>
            <h1 className="text-4xl font-bold mt-4">{article.title}</h1>
            <p className="text-sm text-gray-500 mt-2">{new Date(article.published_at).toLocaleDateString()}</p>
        <p className="mt-4 text-lg">{article.summary}</p>
        <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 mt-4 block">Leggi l'articolo originale su {article.news_site}</a>
        </div>
     );
    };

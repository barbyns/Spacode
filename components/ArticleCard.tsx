import {Article} from '../types/Article';
import { Link } from 'react-router-dom'

interface Props {
    article: Article;
}
export const ArticleCard: React.FC<Props> = ({article}) => {
    return (
        <div className="border rounded p-4 shadow hover:shadow-lg transition">
            <img src={article.image_url} alt={article.title} className="w-full h-48 object-cover rounded"/>
            <h2 className="text-xl font-semibold mt-2">{article.title}</h2>
            <p className="text-sm text-gray-500">{new Date(article.published_at).toLocaleDateString()}</p>
            <p className="mt-2 text-gray-700">{article.summary.slice(0,100)}...</p>
            <Link to={`/articles/${article.id}`} className="text-blue-500 mt-2 inline-block">Leggi di più</Link>
        </div>
    );
};
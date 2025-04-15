import { ArticleList } from "../components/ArcticleList";
export const HomePage: React.FC = () => {
    return (
        <div className="container mx-auto py-6">
            <h1 className="text-3xl font-bold mb-4">Ultime Notizie Spaziali</h1>
            <ArticleList/>
        </div>
    );
};
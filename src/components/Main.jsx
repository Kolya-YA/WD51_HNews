import Paginator from "./Paginator";
import NewsItem from "./NewsItem";

const Main = ({ news }) => {

    return (
        <main className="container mx-auto p-4">
            <Paginator />
            <h2 className="text-2xl font-bold text-gray-600">News / Search result</h2>
            <p className="mb-4 text-end text-gray-800">Qty of news: {news.length}</p>
            <ul className="bg-white shadow rounded-lg divide-y divide-gray-200">
                {news?.map((n, i) => (
                    <NewsItem news={n} i={i} key={n.objectID} />
                ))}          
            </ul>
            <Paginator />
        </main>
    );
};

export default Main;
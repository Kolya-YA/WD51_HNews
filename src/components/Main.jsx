import { useState } from "react";

import Paginator from "./Paginator";
import NewsItem from "./NewsItem";
import InfoLine from "./InfoLine";

const Main = ({ news, hiddenNews, setHiddenNews }) => {
    const [showHidden, setShowHidden] = useState(0) // 0 - show unhidden, 1 - show only hidden, 2 - show all
    const addHiddenKey = (n) => ({ ...n, hidden: hiddenNews.includes(+n.objectID) })

    const filterHidden = (n) => {
        if (showHidden === 0 && !n.hidden) return n
        if (showHidden === 1 && n.hidden) return n
        if (showHidden === 2) return n
    }

    return (
        <main className="container mx-auto p-4">
            <h2 className="text-2xl font-bold text-gray-600">News / Search result</h2>
            <Paginator />
            <h3 className="my-4 text-center font-semibold">
                {showHidden === 0 ? "Unhidden" : showHidden === 1 ? 'Hidden' : 'All'} news
            </h3>
            <InfoLine news={news} hiddenNews={hiddenNews} showHidden={showHidden} setShowHidden={setShowHidden} />
            <ul className="my-4 bg-white shadow rounded-lg divide-y divide-gray-200">
                {news?.map(addHiddenKey).filter(filterHidden).map((n, i) => (
                    <NewsItem news={n} i={i} key={n.objectID} setHiddenNews={setHiddenNews} />
                ))}          
            </ul>
            <Paginator />
        </main>
    );
};

export default Main;
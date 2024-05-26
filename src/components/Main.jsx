import { useState } from "react";

import Pagination from "./Pagination";
import NewsItem from "./NewsItem";
import InfoLine from "./InfoLine";
import Loader from "./Loader";

const Main = ({ news, hiddenNews, setHiddenNews }) => {
    const [showHidden, setShowHidden] = useState(0) // 0 - show unhidden, 1 - show only hidden, 2 - show all
    const addHiddenKey = (n) => ({ ...n, hidden: hiddenNews.includes(+n.objectID) })

    const filterHidden = (n) => {
        if (showHidden === 0 && !n.hidden) return n
        if (showHidden === 1 && n.hidden) return n
        if (showHidden === 2) return n
    }
    //<- paginaion
    const [currentPage, setCurrentPage] = useState(1);
    const totalItems = 97;
    const itemsPerPage = 10;
  
    const handlePageChange = (page) => {
      setCurrentPage(page);
    };
    // paginnaion ->

    return (
        <main className="container mx-auto p-4">
            <h2 className="px-4 text-2xl font-bold text-gray-600">News / Search result</h2>
            { news.length === 0
                ? <Loader msg='Loading...' />
                : <>
                    <Pagination totalItems={totalItems}
                                itemsPerPage={itemsPerPage}
                                currentPage={currentPage}
                                onPageChange={handlePageChange}/>
                    <h3 className="my-4 px-4 text-xl font-semibold text-gray-600">
                        {showHidden === 0 ? "Unhidden" : showHidden === 1 ? 'Hidden' : 'All'} news
                    </h3>
                    <InfoLine news={news} hiddenNews={hiddenNews} showHidden={showHidden} setShowHidden={setShowHidden} />
                    
                    <ul className="my-4 bg-white shadow rounded-lg divide-y divide-gray-200 overflow-hidden">
                        {news?.map(addHiddenKey).filter(filterHidden).map((n, i) => (
                            <NewsItem news={n} i={i} key={n.objectID} setHiddenNews={setHiddenNews} />
                        ))}          
                    </ul>
                </>
            }
        </main>
    );
};

export default Main;
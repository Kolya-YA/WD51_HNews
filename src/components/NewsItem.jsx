const newsItem = ({ news, i }) => {
    const srcURL = news.url && new URL(news.url)
    
    return (
        <li className="px-2 py-4 grid grid-cols-[2rem_1fr] gap-4">
            <div className="grid place-content-center text-lg font-semibold">{i + 1}</div>
            <div className="">
                <div className="flex gap-4 items-baseline">
                <a href={news.url} className="font-semibold text-gray-700 hover:underline">{news.title}</a>
                {srcURL?.hostname && <a href={srcURL.hostname} className="text-sm text-gray-500  hover:text-orange-500 hover:underline">({srcURL.hostname})</a>}
                </div>
                <div className="mt-1 text-sm text-gray-500">
                    {news.points} points by {news.author} XXX hours ago | <button data-id={news.objectID}>hide</button> | {news.num_comments ? `${news.num_comments} comments` : 'discuss'}
                </div>
            </div>
        </li>
    )
}

export default newsItem
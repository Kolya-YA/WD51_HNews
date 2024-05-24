const NewsItem = ({ news, i, setHiddenNews }) => {
    const srcURL = news.url && new URL(news.url)
    const newsAge = () => {
        const age = new Date().getTime() - new Date(news.created_at).getTime()
        if (age < 60 * 60 * 1000) {
            return (`${Math.round(age / (60 * 1000))} min`)
        } else if (age < 24 * 60 * 60 * 1000) {
            return (`${Math.round(age / (60 * 60 * 1000))} hours`)
        } else {
            return (`${Math.round(age / (24 * 60 * 60 * 1000))} days`)
        }
    }

    const handleHideBtn = () => {
        if (news.hidden) {
            setHiddenNews(prev => prev.filter(item => item !== +news.objectID))
        } else {
            setHiddenNews(prev => [...prev, +news.objectID])
        }
    }
    
    return (
        <li className={`px-2 py-4 grid grid-cols-[2rem_1fr] gap-4 ${news.hidden ? 'bg-gray-300' : null}`
}>
            <div className="grid place-content-center text-lg font-semibold">{i + 1}</div>
            <div className="">
                <div className="flex gap-4 justify-between items-baseline">
                <a href={news.url} target="_blank" className="text-balance font-semibold text-gray-700 hover:text-orange-500 hover:underline">{news.title}</a>
                {srcURL?.hostname && <a href={srcURL.origin} target="_blank" className="text-sm text-gray-500  hover:text-orange-500 hover:underline">({srcURL.hostname})</a>}
                </div>
                <div className="mt-1 text-sm text-gray-500 flex gap-4">
                    <span><span className="font-semibold">{news.points}</span> points by <span className="italic">{news.author}</span> <span className="font-semibold">{ newsAge() } ago</span></span>
                    <button onClick={handleHideBtn} data-id={news.objectID} className="hover:text-orange-500 hover:underline">{news.hidden ? 'un' : ''}hide</button>
                    <a onClick={ () => confirm('For VIP clients only.\nReady to subscribe?') } className="hover:text-orange-500 hover:underline">{news.num_comments ? `${news.num_comments} comments` : 'discuss'}</a>
                </div>
            </div>
        </li>
    )
}

export default NewsItem
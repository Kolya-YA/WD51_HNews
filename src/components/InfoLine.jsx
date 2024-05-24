const InfoLine = ({ news, hiddenNews, showHidden, setShowHidden }) => {
    const handleShowHidden = () => {
        switch (showHidden) {
            case 0:
                setShowHidden(1);
                break;
            case 1:
                setShowHidden(2);
                break;
            default:
                setShowHidden(0);
        }
    }

    return (
        <p className="flex justify-between gap-4 my-4 px-4 text-sm text-gray-700">
            <span>News unhidden {news.length - hiddenNews.length} {hiddenNews.length ? `hidden ${hiddenNews.length}, total ${news.length}` : ''}</span>
            <button className="ml-2 text-blue-600" onClick={handleShowHidden}>
                {showHidden === 0 ? 'Show hidden' : showHidden === 1 ? 'Show all' : 'Show unhidden'}
            </button>
        </p>
    )
}

export default InfoLine;
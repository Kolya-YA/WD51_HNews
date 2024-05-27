import { useEffect, useState } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'

function App() {
  const [newsList, setNewsList] = useState({});  
  const [queryStr, setQueryStr] = useState('');
  const [hiddenNews, setHiddenNews] = useState(() => {
    const storedHiddenNews = localStorage.getItem('hiddenNews') || '[]';
    return JSON.parse(storedHiddenNews);
  })

  useEffect(() => {
    let loaderTimeOut
    setNewsList([])
    const fetchData = async () => {
      try {
        const qStr = encodeURIComponent(queryStr)
        const response = await fetch(`https://hn.algolia.com/api/v1/search_by_date?tags=story${qStr ? `&query=${ qStr }` : ``}`);
        // const response = await fetch(`https://hn.algolia.com/api/v1/search_by_date?tags=story&page=0${qStr ? `&query=${ qStr }` : ``}`);
        const data = await response.json();
        loaderTimeOut = setTimeout(() => {
          setNewsList(data)
        }, 1500) // fake delay to show loader
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };
    fetchData();
    return clearTimeout(loaderTimeOut)
}, [queryStr]);


  useEffect(() => {
    localStorage.setItem('hiddenNews', JSON.stringify(hiddenNews))
  }, [hiddenNews])
    
  return (
    <>
      <Header setQueryStr={setQueryStr} />
      <Main news={newsList} hiddenNews={hiddenNews} setHiddenNews={setHiddenNews} />
      <Footer />
    </>
  )
}

export default App
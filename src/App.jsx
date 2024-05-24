import { useEffect, useState } from 'react'
import { hits as news } from './data/hnews.json'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'

function App() {
  const [newsList, setNewsList] = useState(news)

  const [hiddenNews, setHiddenNews] = useState(() => {
    const storedHiddenNews = localStorage.getItem('hiddenNews') || '[]';
    return JSON.parse(storedHiddenNews);
  })

  useEffect(() => {
    localStorage.setItem('hiddenNews', JSON.stringify(hiddenNews))
  }, [hiddenNews])
  
  const handleSearch = (e) => {
    e.preventDefault();
    // const search = e.target.search.value;
    setNewsList(n => n)
   }
  
  return (
    <>
      <Header handleSearch={handleSearch} />
      <Main news={newsList} hiddenNews={hiddenNews} setHiddenNews={setHiddenNews} />
      <Footer />
    </>
  )
}

export default App
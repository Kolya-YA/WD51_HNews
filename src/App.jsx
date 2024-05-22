import { useState } from 'react'
import { hits as news } from './data/hnews.json'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'

function App() {
  const [newsList, setNewsList] = useState(news)
  
  const handleSearch = (e) => {
    e.preventDefault();
    // const search = e.target.search.value;
    setNewsList(n => n)
   }
  
  return (
    <>
      <Header handleSearch={handleSearch} />
      <Main news={newsList} />
      <Footer />
    </>
  )
}

export default App
import { useEffect, useState } from "react";
import { hits as news } from "./data/hnews.json";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const [newsList, setNewsList] = useState([])
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState('react');

  //const [searchNews, setSearchNews] = useState("");
  //=> {
  // const storedHiddenNews = localStorage.getItem("hiddenNews") || "[]";
  // return JSON.parse(storedHiddenNews);
  //});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://hn.algolia.com/api/v1/search?query=${query}`);
        const result = await response.json();

        setTimeout(() => {
          setNewsList(result.hits)
        }, 3000) // Fake delay to show loader
      } catch (error) {
        console.error('Error fetching the data', error);
      }
    };

    fetchData();
  }, [query]);

  useEffect(() => {
    localStorage.setItem('hiddenNews', JSON.stringify(hiddenNews))
  }, [hiddenNews])

  const handleSearch = (e) => {
    //e.preventDefault();
    // const search = e.target.search.value;
    setNewsList((n) => n);
  };

  return (
    <>
     {/* <div>
      <h1>Hacker News Search</h1>
      <input 
        type="text" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        placeholder="Search..." 
      />
      <ul>
        {articles.map(article => (
          <li key={article.objectID}>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              {article.title}
            </a>
          </li>
        ))}
      </ul>
    </div> */}
      <Header handleSearch={handleSearch} />

      <Main
        news={newsList}
        hiddenNews={hiddenNews}
        setHiddenNews={setHiddenNews}
      />

      <Footer />
    </>
  );
}

export default App;

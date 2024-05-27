import { useEffect, useState } from "react";
import { hits as news } from "./data/hnews.json";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const [newsList, setNewsList] = useState([]);
  const [hiddenNews, setHiddenNews] = useState("React");
  //const [searchNews, setSearchNews] = useState("");

  //=> {
  // const storedHiddenNews = localStorage.getItem("hiddenNews") || "[]";
  // return JSON.parse(storedHiddenNews);
  //});

  useEffect(() => {
    const fetchNewsList = async () => {
      try {
        const response = await fetch(
          `https://hn.algolia.com/api/v1/search?query=${hiddenNews}`
        );
        const data = await response.json();
        setNewsList(data.hits);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchNewsList();
  }, [hiddenNews]);

  useEffect(() => {
    setTimeout(() => {
      setNewsList(news);
    }, 4000); // Fake delay to show loader
  }, []);

  const handleSearch = (e) => {
    //e.preventDefault();
    // const search = e.target.search.value;
    setNewsList((n) => n);
  };

  return (
    <>
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

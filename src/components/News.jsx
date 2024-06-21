import { useEffect, useState } from "react";
import Card from "../components/Card";
import Shimmer from "./Shimmer";
import Favorites from "./Favorites";
import {toggleFavorite, totalPages } from "../utils/helper";

const News = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  const fetchNews = async (search = "") => {
    try {
      const url = search
        ? `https://newsapi.org/v2/everything?q=${search}&apiKey=${
            import.meta.env.REACT_APP_API_KEY
          }`
        : `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${
            import.meta.env.REACT_APP_API_KEY
          }`;

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const data = await response.json();
      const filteredArticles = data.articles.filter(
        (article) => article.author !== null
      );
      setArticles(filteredArticles);
      setIsLoading(false);
    } catch (err) {
      setError(err.message);
    }
  };
  useEffect(() => {
    fetchNews();
  }, [category]);

  const handleSearch = (e) => {
    e.preventDefault();
    setIsLoading(true);
    fetchNews(searchQuery);
  };
  const handleToggleFavorite = (article) => {
    toggleFavorite(article, favorites, setFavorites);
  };

  const selectedPageHandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= totalPages &&
      selectedPage !== page
    ) {
      setPage(selectedPage);
    }
  };

  return (
    <>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for news"
        />
        <button type="submit">Search</button>
      </form>
      <div className="card">
        {isLoading ? (
          <>
            {[...Array(8)].map((_, index) => (
              <Shimmer key={index} />
            ))}
          </>
        ) : articles.length > 0 ? (
          articles
            .slice(page * 10 - 10, page * 10)
            .map((article, index) => (
              <Card
                key={index}
                title={article.title}
                description={article.description}
                src={article.urlToImage}
                url={article.url}
                isFavorite={favorites.some((fav) => fav.url === article.url)}
                toggleFavorite={() => handleToggleFavorite(article)}
                showFavoriteButton={true}
              />
            ))
        ) : (
          <p className="no-article-found">No articles found</p>
        )}
      </div>
      {articles.length > 0 && (
        <div className="pagination">
          <span onClick={() => selectedPageHandler(page - 1)}>
            <i className="bx bx-left-arrow-alt"></i>
          </span>
          {[...Array(totalPages)].map((_, i) => {
            return (
              <span key={i} onClick={() => selectedPageHandler(i + 1)}>
                {i + 1}
              </span>
            );
          })}
          <span onClick={() => selectedPageHandler(page + 1)}>
            <i className="bx bx-right-arrow-alt"></i>
          </span>
        </div>
      )}
    </>
  );
};

export default News;

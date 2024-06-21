import { useEffect, useState } from "react";
import Card from "./Card";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);
  const removeFromFavorites = (articleToRemove) => {
    const updatedFavorites = favorites.filter(
      (fav) => fav.url !== articleToRemove.url
    );
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <div className="card" style={{ marginTop: "120px" }}>
      {favorites.length > 0 ? (
        favorites.map((article, index) => (
          <Card
            key={index}
            title={article.title}
            description={article.description}
            src={article.urlToImage}
            url={article.url}
            isFavorite={true}
            toggleFavorite={() => removeFromFavorites(article)}
            showFavoriteButton={true}
          />
        ))
      ) : (
        <p className="no-article-found">No favorite articles saved</p>
      )}
    </div>
  );
};

export default Favorites;

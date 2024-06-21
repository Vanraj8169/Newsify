

export const toggleFavorite = (article, favorites, setFavorites) => {
  let updatedFavorites;
  if (favorites.find((fav) => fav.url === article.url)) {
    updatedFavorites = favorites.filter((fav) => fav.url !== article.url);
  } else {
    updatedFavorites = [...favorites, article];
  }
  setFavorites(updatedFavorites);
  localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
};


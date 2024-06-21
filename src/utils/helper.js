export const fetchNews = async (category, searchQuery) => {
  try {
    const url = searchQuery
      ? `https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=${
          import.meta.env.VITE_API_KEY
        }`
      : `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${
          import.meta.env.VITE_API_KEY
        }`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const data = await response.json();
    const filteredArticles = data.articles.filter(
      (article) => article.author !== null
    );
    return filteredArticles;
  } catch (err) {
    throw new Error(err.message);
  }
};

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

export const totalPages = (articles) => Math.ceil(articles.length / 10);

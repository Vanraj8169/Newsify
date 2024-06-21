const Navbar = ({ setCategory, setShowFavorites }) => {
  const handleCategoryClick = (category) => {
    setShowFavorites(false);
    setCategory(category);
  };
  return (
    <header className="header">
      <a href="#" className="logo">
        Newsify
      </a>
      <input type="checkbox" id="check" />
      <label htmlFor="check" className="icons">
        <i className="bx bx-menu" id="menu-icon"></i>
        <i className="bx bx-x" id="close-icon"></i>
      </label>
      <nav className="navbar">
        <div
          style={{ "--i": 0 }}
          onClick={() => handleCategoryClick("general")}
        >
          All
        </div>
        <div
          style={{ "--i": 1 }}
          onClick={() => handleCategoryClick("technology")}
        >
          Technology
        </div>
        <div
          style={{ "--i": 2 }}
          onClick={() => handleCategoryClick("business")}
        >
          Business
        </div>
        <div style={{ "--i": 3 }} onClick={() => handleCategoryClick("health")}>
          Health
        </div>
        <div style={{ "--i": 4 }} onClick={() => handleCategoryClick("sports")}>
          Sports
        </div>
        <div
          style={{ "--i": 5 }}
          onClick={() => handleCategoryClick("entertainment")}
        >
          Entertainment
        </div>
        <div style={{ "--i": 6 }} onClick={() => setShowFavorites(true)}>
          Favorites
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

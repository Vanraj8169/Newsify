const Navbar = ({setCategory}) => {
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
        <div  style={{ "--i": 0 }} onClick={() => setCategory("technology")}>
          Technology
        </div>
        <div href="#" style={{ "--i": 1 }} onClick={() => setCategory("business")}>
          Business
        </div>
        <div href="#" style={{ "--i": 2 }} onClick={() => setCategory("health")}>
          Health
        </div>
        <div href="#" style={{ "--i": 3 }} onClick={() => setCategory("sports")}>
          Sports
        </div>
        <div href="#" style={{ "--i": 4 }} onClick={() => setCategory("entertainment")}>
          Entertainment 
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

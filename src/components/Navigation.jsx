import "../css/Navigation.css";

const Navigation = () => {
  return (
    <nav
      id="navbar"
      className="pt-3 navbar navbar-expand-md navbar-light fixed-top"
    >
      <div className="container">
        <a className="navbar-brand" href="#home">
          Sheikh <span>Khurram</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ml-auto mr-5">
            <a className="nav-item nav-link active-link" href="#home">
              Home
            </a>
            <a className="nav-item nav-link" href="#about">
              About
            </a>
            <a className="nav-item nav-link" href="#experience">
              Experience
            </a>
            <a className="nav-item nav-link" href="#portfolio">
              Portfolio
            </a>
            <a className="nav-item nav-link" href="#services">
              Services
            </a>
            <a className="nav-item nav-link" href="#blog">
              Blog
            </a>
            <a className="nav-item nav-link" href="#contact">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navigation;

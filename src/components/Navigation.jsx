import "../css/Navigation.css";

const Navigation = () => {
  return (
    <nav className="pt-3 container navbar navbar-expand-md navbar-light fixed-top">
      <a className="navbar-brand" href="#">
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
          <a className="nav-item nav-link" href="#">
            Experience
          </a>
          <a className="nav-item nav-link" href="#">
            Portfolio
          </a>
          <a className="nav-item nav-link" href="#">
            Services
          </a>
          <a className="nav-item nav-link" href="#">
            Blog
          </a>
          <a className="nav-item nav-link" href="#">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};
export default Navigation;

import "../css/Navigation.css";
import { useState, useEffect } from "react";

const Navigation = () => {
  const [navbarIcon, setNavbarIcon] = useState(false);
  const [navbarBackground, setNavbarBackground] = useState(false);

  // Change Navbar Background
  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setNavbarBackground(true);
    } else {
      setNavbarBackground(false);
    }
  };

  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground);
  });
  return (
    <nav
      id="navbar"
      className={`navbar navbar-expand-md navbar-light fixed-top ${
        navbarBackground ? "scrollNavbar" : ""
      }`}
    >
      <div className="container">
        <a className="navbar-brand" href="#home">
          Sheikh <span>Khurram</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAlt"
          onClick={() => setNavbarIcon(!navbarIcon)}
        >
          <i
            style={{ fontSize: "1.5rem" }}
            className={`fa fa-${navbarIcon ? "times" : "bars"}`}
          ></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAlt">
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

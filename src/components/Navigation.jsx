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

  //Add Active Menu Class in NavLinks
  const activeLinks = (targetedClass) => {
    // Add Blackish Color
    const otherElements = document.querySelector(
      ".navbar-nav a.menu-active-link"
    );
    otherElements.classList.remove("menu-active-link");

    // Add Theme color
    const element = document.querySelector(targetedClass);
    element.classList.add("menu-active-link");
  };
  return (
    <nav
      id="navbar"
      className={`navbar navbar-expand-md navbar-light fixed-top 
      ${navbarBackground ? "scrollNavbar" : ""} ${
        navbarIcon ? "blurryBack" : ""
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
            <a
              className="nav-item nav-link homeMenu menu-active-link"
              onClick={() => activeLinks(".homeMenu")}
              href="#home"
            >
              Home
            </a>
            <a
              className="nav-item nav-link aboutMenu"
              onClick={() => activeLinks(".aboutMenu")}
              href="#about"
            >
              About
            </a>
            <a
              className="nav-item nav-link experienceMenu"
              onClick={() => activeLinks(".experienceMenu")}
              href="#experience"
            >
              Experience
            </a>
            <a
              className="nav-item nav-link portfolioMenu"
              onClick={() => activeLinks(".portfolioMenu")}
              href="#portfolio"
            >
              Portfolio
            </a>
            <a
              className="nav-item nav-link servicesMenu"
              onClick={() => activeLinks(".servicesMenu")}
              href="#services"
            >
              Services
            </a>
            <a
              className="nav-item nav-link blogMenu"
              onClick={() => activeLinks(".blogMenu")}
              href="#blog"
            >
              Blog
            </a>
            <a
              className="nav-item nav-link contactMenu"
              onClick={() => activeLinks(".contactMenu")}
              href="#contact"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navigation;

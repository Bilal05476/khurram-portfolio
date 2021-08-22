import "../css/TopJumbotron.css";
import Profile from "../images/profile.png";

const TopJumbotron = () => {
  return (
    <>
      <div id="home" className="jumbotron jumbotron-fluid">
        <div className="row container">
          <div className="col-md-6 left-div">
            <h1 className="display-4">
              HI! I'M <span>KHURRAM</span>
            </h1>
            <h4 className="lead">
              I'AM A <span>SOCIAL MEDIA</span> PROBLEM SOLVER
            </h4>
            <p className="">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
              voluptates suscipit reiciendis ratione soluta incidunt. Maxime
              officiis aperiam modi! Dolores?
            </p>
            <button className="hireBtn">Hire</button>
            <div className="social-links">
              <a
                href="https://facebook.com"
                target="blank"
                className="social-link mr-3"
              >
                <i className="fab fa-facebook-square"></i>
              </a>
              <a
                href="https://twitter.com"
                target="blank"
                className="social-link mr-3"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://youtube.com"
                target="blank"
                className="social-link mr-3"
              >
                <i className="fab fa-youtube"></i>
              </a>
              <a
                href="https://linkedin.com"
                target="blank"
                className="social-link mr-3"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://google.com"
                target="blank"
                className="social-link mr-3"
              >
                <i className="fab fa-google-plus-g"></i>
              </a>
            </div>
          </div>
          <div className="col-md-6">
            <img src={Profile} alt="Profile" />
          </div>
        </div>
      </div>
    </>
  );
};
export default TopJumbotron;

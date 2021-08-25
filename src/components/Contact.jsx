import "../css/Contact.css";
import { useState } from "react";

const Contact = () => {
  const [email, setEmail] = useState("");
  const onSubmitSubs = (e) => {
    e.preventDefault();
    alert(email);
  };
  return (
    <div id="contact" className="contact container-fluid">
      <div className="row">
        <div className="col-md-3 introSection ">
          <a className="navbar-brand" href="#home">
            Sheikh <span>Khurram</span>
          </a>
          <p className="mb-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe quo
            officia assumenda quidem deleniti dignissimos voluptatum! Tenetur
            sed molestiae impedit?
          </p>
        </div>
        <div className="col-md-2 navigationLinks ">
          <a className="navbar-brand heading" href="#home">
            Li<span>nks</span>
          </a>
          <div className="navbar-nav ml-auto mr-5 ">
            <a className="nav-item nav-link active-link py-0 pt-1" href="#home">
              Home
            </a>
            <a className="nav-item nav-link py-0 pt-1" href="#about">
              About
            </a>
            <a className="nav-item nav-link py-0 pt-1" href="#experience">
              Experience
            </a>
            <a className="nav-item nav-link py-0 pt-1" href="#portfolio">
              Portfolio
            </a>
            <a className="nav-item nav-link py-0 pt-1" href="#services">
              Services
            </a>
            <a className="nav-item nav-link py-0 pt-1" href="#blog">
              Blog
            </a>
            <a className="nav-item nav-link py-0 pt-1" href="#contact">
              Contact
            </a>
          </div>
        </div>
        <div className="col-md-3 socialLinks ">
          <a className="navbar-brand heading" href="#home">
            Social <span>Contact</span>
          </a>
          <div className="contact-details mb-2 pt-1">
            <a
              href="tel:+923248213362"
              target="blank"
              className="contact-link mr-1 mb-2"
            >
              <i className="fa fa-phone-square-alt mr-2"></i>
              <small>+92 3248213362</small>
            </a>
            <a
              href="mailto:bilalahmed6551@gmail.com"
              target="blank"
              className="contact-link mr-1"
            >
              <i className="fa fa-envelope mr-2"></i>
              <small>bilalahmed6551@gmail.com</small>
            </a>
          </div>
          <hr className="line-1" />
          <hr className="line-2" />
          <div className="social-links mt-2">
            <a
              href="https://facebook.com"
              target="blank"
              className="social-link mr-1"
            >
              <i className="fab fa-facebook-square"></i>
            </a>
            <a
              href="https://twitter.com"
              target="blank"
              className="social-link mr-1"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://youtube.com"
              target="blank"
              className="social-link mr-1"
            >
              <i className="fab fa-youtube"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="blank"
              className="social-link mr-1"
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
        <div className="col-md-4 subscribe ">
          <a className="navbar-brand heading" href="#home">
            Subs<span>cribe</span>
          </a>
          <div className="subs-details pt-1">
            <form onSubmit={onSubmitSubs}>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                required
                placeholder="Enter your email..."
              />
              <br />
              <button type="submit" className="hireBtn mt-3">
                <i className="fa fa-paper-plane"></i>
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="col-md-12 text-left pt-1 copyrightSection"><small>
          Copyright &copy; 2021, Sheikh Khurram</small></div>
      </div>
    </div>
  );
};

export default Contact;

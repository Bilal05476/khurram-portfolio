import "../css/About.css";
import Profile from "../images/profile.png";

const About = () => {
  return (
    <>
      <div id="about" className="about container">
        <div className="row">
          <div className="col-md-6">
            <div className="about-image">
              <img src={Profile} alt="Profile" />
            </div>
          </div>
          <div className="col-md-6">
            <h5>ABOUT ME</h5>
            <h1 className="display-4">DO SOME AWESOME STUFF WITH ME.</h1>
            <div className="designation-div">
              <span></span>
              <small>Social Media Marketer / Problem Solver</small>
            </div>
            <p className="about-details mt-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              aut id molestias et, rem eligendi, ullam ducimus expedita dolore
              ipsum modi repudiandae placeat. Officiis labore et molestias,
              veritatis saepe veniam!
            </p>
            <p className="about-details">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              aut id molestias et, rem eligendi, ullam ducimus expedita dolore
              ipsum modi repudiandae placeat. Officiis labore et molestias,
              veritatis saepe veniam!
            </p>
            <button className="hireBtn">Hire</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;

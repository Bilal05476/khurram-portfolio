const ServicesCard = ({ icon, title, desc }) => {
  return (
    <div className="card service-card">
      <div className="box">
        <div className="content">
          <div className="icon">
            <i className="fa fa-paper-plane"></i>
          </div>
          <h3>Basic</h3>
          <h4>
            <sup>$</sup>25
          </h4>
          <ul>
            <li>
              <i className="fa fa-check"></i>
              10 GB Space
            </li>
            <li>
              <i className="fa fa-check"></i>1 Domain Names
            </li>
            <li>
              <i className="fa fa-check"></i>1 Email Address
            </li>
            <li>
              <i className="fa fa-times"></i>
              Live Support
            </li>
          </ul>
          <a href="#home">Order Now</a>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;

import "../css/Services.css";
import ServicesCard from "./ServicesCard";
const Services = () => {
  return (
    <div id="services" className="services">
      <div className="container">
        <div className="row">
         
          <div className="services-header col-md-12">
            <small>SERVICES</small>
            <h1 className="display-5">MY SERVICES</h1>
            <div className="hori-line"></div>
          </div>
        </div>
        <div className="card-deck services-card mb-2">
          <ServicesCard
            icon="servicestack"
            title="Services Title"
            desc=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          possimus sequi beatae impedit"
          />
          <ServicesCard
            icon="servicestack"
            title="Services Title"
            desc=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          possimus sequi beatae impedit"
          />
          <ServicesCard
            icon="servicestack"
            title="Services Title"
            desc=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          possimus sequi beatae impedit"
          />
        </div>
        <div className="card-deck services-card mb-2">
          <ServicesCard
            icon="servicestack"
            title="Services Title"
            desc=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          possimus sequi beatae impedit"
          />
          <ServicesCard
            icon="servicestack"
            title="Services Title"
            desc=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          possimus sequi beatae impedit"
          />
          <ServicesCard
            icon="servicestack"
            title="Services Title"
            desc=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          possimus sequi beatae impedit"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;

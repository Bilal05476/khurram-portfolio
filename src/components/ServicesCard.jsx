import React from "react";

const ServicesCard = ({ icon, title, desc }) => {
  return (
    <div className="card service-card">
      <div class="card-body">
        <i className={`fab fa-${icon}`}></i>
        <h5 class="card-title">{title}</h5>
        <p class="card-text">{desc}</p>
      </div>
    </div>
  );
};

export default ServicesCard;

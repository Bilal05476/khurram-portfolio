const ServicesCard = ({ icon, title, desc }) => {
  return (
    <div className="card service-card">
      <div class="card-body">
        <i className={`services-icon ${icon}`}></i>
        <h5 class="card-title">{title}</h5>
        <p class="card-text">{desc}</p>
      </div>
    </div>
  );
};

export default ServicesCard;

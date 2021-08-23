const ServicesCard = ({ icon, title, desc }) => {
  return (
    <div className="card service-card">
      <div className="card-body">
        <i className={`services-icon ${icon}`}></i>
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{desc}</p>
      </div>
    </div>
  );
};

export default ServicesCard;

const ExperienceBox = ({ duration, place, design, workDetail }) => {
  return (
    <div className="expBox">
      <div className="year__company">
        <h5>{duration}</h5>
        <h5>{place}</h5>
      </div>
      <div className="text">
        <h4>{design}</h4>
        <p>{workDetail}</p>
      </div>
    </div>
  );
};

export default ExperienceBox;

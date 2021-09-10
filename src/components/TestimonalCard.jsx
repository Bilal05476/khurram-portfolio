const TestimonalCard = ({ name, designation, comment }) => {
  return (
    <div className="myCarousel">
      <h3>{name}</h3>
      <h4>{designation}</h4>
      <p>{comment}</p>
    </div>
  );
};

export default TestimonalCard;

const Card = ({ title, description }) => {
  return (
    <div className="border p-4 rounded shadow hover:shadow-lg transition">
      <h2 className="font-bold text-lg">{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Card;

import "./Card.css";

const Card = ({children,description,price}) => {
  return (
   <div className=".container-sm dashboard">
    <div className="card-content">
     <div className="card-icon">
     {children}
     </div>
     <div className="stats">
      <h4>{description}</h4>
      <h2>{price}</h2>
     </div>
    </div>
   </div>
  );
};

export default Card;

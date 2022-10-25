import "./Card.css";

const Card = ({icon,data}) => {
  return (
   <div className=".container-sm dashboard">
    <div className="card-content">
     <div className="card-icon">
     <i class="fa-solid fa-screwdriver-wrench"></i>
     </div>
     <div className="stats">
      <h4>number of tools</h4>
      <h2>2500</h2>
     </div>
    </div>



    {/*chop here */}
    <div className="card-content">
     <div className="card-icon">
     <i class="fa-solid fa-screwdriver-wrench"></i>
     </div>
     <div className="stats">
      <h4>number of tools</h4>
      <h2>2500</h2>
     </div>
    </div>
    <div className="card-content">
     <div className="card-icon">
     <i class="fa-solid fa-screwdriver-wrench"></i>
     </div>
     <div className="stats">
      <h4>number of tools</h4>
      <h2>2500</h2>
     </div>
    </div>
    <div className="card-content">
     <div className="card-icon">
     <i class="fa-solid fa-screwdriver-wrench"></i>
     </div>
     <div className="stats">
      <h4>number of tools</h4>
      <h2>2500</h2>
     </div>
    </div>
    {/*upto here */}
   </div>
  );
};

export default Card;

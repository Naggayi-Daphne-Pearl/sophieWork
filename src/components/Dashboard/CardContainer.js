import { useEffect, useState } from "react";
import Navbar from "../Nav/Navbar.js";
import Card from "./Card.js";
import data from "./data";

const icons = [
  { icon: '<i className="fa-solid fa-tooth"></i>' },
  { icon: '<i className="fa-solid fa-tooth"></i>' },
  { icon: '<i className="fa-solid fa-tooth"></i>' },
  { icon: '<i className="fa-solid fa-tooth"></i>' },
];
const CardContainer = () => {
  const [item, setItem] = useState([]);
  useEffect(() => {
    setItem(data);
  }, []);
  return (
    <>
    <Navbar/>
      {item?.map((each) => (
        <Card description={each.description} price={each.price}>
          <p>some text</p>
        </Card>
      ))}
    </>
  );
};

export default CardContainer;

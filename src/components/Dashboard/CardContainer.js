// import { useEffect, useState } from "react";

// Components 
import Navbar from "../Nav/Navbar.js";
import Data from "./Data";
import Stats from './Stats'
import Percentage from './Percentage'
import {Container, Row} from 'react-bootstrap'


const CardContainer = () => {
  // const [item, setItem] = useState([]);
  // useEffect(() => {
  //   setItem(data);
  // }, []);
  return (
    <>
     
      <Container>
        <Row style={rowStyle}><Data/></Row>
        <Row  style={rowStyle}><Stats/></Row>


      </Container>
     
      
    </>
  );
};

const rowStyle ={
  marginBottom:'2rem', 
}

export default CardContainer;

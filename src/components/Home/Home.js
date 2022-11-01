import {Button,Row,Container,Col} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Card from 'react-bootstrap/Card'
import "./Home.css";
const Home = () => {
  return (
    <>
     
      <section className=".container-xxl">
    
    
        <p className="home-info">
          The Wikimedia tool below is missing some important information. can
          you find it?
        </p>
        <p>
          Click <span>I got this</span> to add this information or{" "}
          <span>Next</span> to see another tool
        </p>
        <Card>
          <Card.Header style={headerStyle}>Tool:</Card.Header>
          <Card.Body>
            <Card.Title >Pywikibot</Card.Title>
            <Card.Text>
              api_url
            </Card.Text>
            <Row>
              <Col><Button variant="primary">I Got this!</Button></Col>
              <Col><Button variant="primary">Next Tool</Button></Col>

            </Row>
            
          
          </Card.Body>
        </Card>
      </section>
    </>
  );
};

const headerStyle = {
  backgroundColor: 'var(--primary-200)',
  color: 'var(--primary-700)',
  fontWeight: 'bolder',
  width: '100%',
}

export default Home;

// import "./Card.css";
import { Card, Container, Row, Col } from 'react-bootstrap'

const CardInfo = ({ children, title, records }) => {
  return (
    <Container >
      {children}
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>{records}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>



    </Container>

  );
};

export default CardInfo;

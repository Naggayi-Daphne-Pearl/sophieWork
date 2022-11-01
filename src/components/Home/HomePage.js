import React from 'react'
import { Container, Row, Col, Card, InputGroup, Form, Button } from 'react-bootstrap'

const HomePage = () => {
  return (
    <Container>
      <Row className="justify-content-md-center" style={{
        margin: '3rem'
      }}>
        <Col xs="12" lg="8">
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="search tool"
              aria-label="search tool"
              aria-describedby="basic-addon2"
            />
            <Button
              style={buttonStyle}
              className="button"
              variant="outline-secondary"
              id="button-addon2"
            >
              search
            </Button>
          </InputGroup>
        </Col>
      </Row>
      <Row className="justify-content-md-center"
        style={{
          margin: '3rem'
        }}>
        <Col xs="12" lg="8" >
          <p>The Wikimedia tool below is missing some important information. can you find it?</p>
          <p>Click I got this to add this information or Next to see another tool</p>
        </Col>
      </Row>

      <Row className="justify-content-md-center"
        style={{
          margin: '1.5rem', 
          fontWeight: 'bold',
          paddingLeft:'2rem'
         
        }}>
        <Col xs="12" lg="8">
          <Card>
            <Card.Header style={headerStyle}>
              <h5>Tool:</h5>
             
            </Card.Header>
            <Card.Body>
              <Card.Title >Pywikibot</Card.Title>
              <Card.Text>api.url</Card.Text>
              <Row className="justify-content-md-center"
                style={{
                  marginLeft: '4rem',
                  justifyContent: 'center'
                }}>
                <Col xs lg="6"><Button variant="primary" style={primaryStyle}>I Got this!</Button></Col>
                <Col xs lg="6"><Button variant="primary" style={secStyle}>Next Tool</Button></Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>

      </Row>


    </Container>
  )
}

const buttonStyle = {
  color: 'var(--primary-500)',
  fontWeight: 'bolder',
}

const primaryStyle = {
  color: 'var(--primary-700)',
  fontWeight: 'bolder',
  backgroundColor: 'var(--primary-100)'

}

const secStyle = {
  color: 'var(--primary-100)',
  fontWeight: 'bolder',
  backgroundColor: 'var(--primary-700)'

}

const headerStyle = {
  backgroundColor: 'var(--primary-200)',
  color: 'var(--primary-700)',
  fontWeight: 'bolder',
  width: '100%',
}

export default HomePage
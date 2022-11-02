import React from 'react'
import { Container, Row, Col, InputGroup, Form, Button } from 'react-bootstrap'
import { FaSearch } from 'react-icons/fa'


const HomePage = () => {
  return (
    <Container>

      <Row className="justify-content-md-center"
        style={{
          margin: '2rem 3rem 2rem 3rem'


        }}>
        <Col xs lg="6">
          <p><a href="https://toolhub.wikimedia.org/"><b>ToolHub</b></a> is a community managed catalog of software tools used in the Wikimedia movement </p>
          <p>Discover new tools, promote their use in your wiki community, help improve them by contributing data.</p>
          <Row className="justify-content-md-center"
            style={{
              margin: '3rem 0rem 2rem 1rem'
            }}>
            <Col xs="6" lg="6"><Button variant="primary" style={primaryStyle}>I Got this!</Button></Col>
            <Col xs="6" lg="6"><Button variant="primary" style={secStyle}>Next Tool</Button></Col>
          </Row>

          <Row style={{
            margin: '2rem 0rem 2rem 1rem'
          }}>
            <Col xs="12" lg="11">
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
                  <FaSearch />
                </Button>
              </InputGroup>
            </Col>
          </Row>


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
  backgroundColor: 'var(--primary-100)',
  width: '150px',

}

const secStyle = {
  color: 'var(--primary-100)',
  fontWeight: 'bolder',
  backgroundColor: 'var(--primary-700)',
  width: '150px',

}


export default HomePage
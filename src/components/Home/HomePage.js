import React from 'react'
import { Container, Row, Col,InputGroup, Form, Button } from 'react-bootstrap'
import {FaSearch} from 'react-icons/fa'


const HomePage = () => {
  return (
    <Container>

      <Row className="justify-content-md-center"
        style={{
          margin: '2rem 3rem 2rem 3rem'


        }}>
        <Col xs lg="6">
          <p><b>Wikimedia</b> is a global <a href="https://meta.wikimedia.org/wiki/Special:MyLanguage/Wikimedia_movement">movement</a> whose mission is to bring free educational content to the world.</p>
          <p>Through various projects, chapters, and the support structure of the non-profit Wikimedia Foundation, Wikimedia strives to bring about a world in which every single human being can freely share in the sum of all knowledge.</p>
          <Row className="justify-content-md-center"
            style={{
              margin: '3rem 0rem 2rem 2rem'
            }}>
            <Col xs="6" lg="6"><Button variant="primary" style={primaryStyle}>I Got this!</Button></Col>
            <Col xs="6" lg="6"><Button variant="primary" style={secStyle}>Next Tool</Button></Col>
          </Row>

          <Row style={{
            margin: '2rem 0rem 2rem 2rem'
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
                  <FaSearch/>
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
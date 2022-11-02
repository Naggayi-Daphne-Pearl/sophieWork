import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { FaRegChartBar } from 'react-icons/fa';
import { FcComboChart, FcEditImage, FcQuestions } from 'react-icons/fc'

const data = () => {
  return (
    <Container style={{
      margin: '1.5rem 1rem 0rem 1rem',
    }}>
      <Row>
        <Col xs="6" lg="4">
          <Card style={{
            marginBottom: '1rem',
          }}>
            <Card.Header style={headerStyle}>
              <Row>
                <Col xslg="7">Total Records</Col>
                <Col><FcComboChart style={iconStyle} /></Col>
              </Row>
            </Card.Header >
            <Card.Body>
              <h6 style={textStyle}>10,000 records</h6>
              <p style={captionStyle}>25% more than last month</p>
            </Card.Body>
          </Card>
        </Col>

        <Col xs="6" lg="4">
          <Card>
            <Card.Header style={headerStyle}>
              <Row>
                <Col xs lg="7">Missing Information</Col>
                <Col><FcQuestions style={iconStyle} /></Col>
              </Row>
            </Card.Header>
            <Card.Body>
              <h6 style={textStyle}>6000 records</h6>
              <p style={captionStyle}>15% more than last month</p>
            </Card.Body>
          </Card>
        </Col>

        <Col xs="12" lg="4">
          <Card>
            <Card.Header style={headerStyle}>
              <Row>
                <Col xs lg="7">Tools Edited </Col>
                <Col><FcEditImage style={iconStyle} /></Col>
              </Row>
            </Card.Header>
            <Card.Body>
              <h6 style={textStyle}>4,000 records</h6>
              <p style={captionStyle}>10% more than last month</p>
            </Card.Body>
          </Card>
        </Col>

      </Row>
    </Container>
  )
}

const headerStyle = {
  backgroundColor: 'var(--primary-200)',
  color: 'var(--primary-700)',
  fontWeight: 'bolder',
  width: '100%',
  letterSpacing: 'var(--letterSpacing)',
}
const textStyle = {
  fontSize: '1.5rem',
  marginLeft: '3rem',
  fontWeight: '700',
  lineHeight: '1.3',
  textTransform: 'capitalize',
  letterSpacing: 'var(--letterSpacing)',
  color: 'var(--primary-700)',
}

const captionStyle = {
  fontSize: '1rem',
  margin: '0.5rem 2.3rem',
  fontWeight: '400',
  lineHeight: '1.3',
  textTransform: 'capitalize',
  letterSpacing: 'var(--letterSpacing)',
  color: 'var(--primary-500)',

}

const iconStyle = {
  fontSize: '1.8rem',
  fontWeight: 'bolder',
  marginLeft: '4rem'
}

export default data
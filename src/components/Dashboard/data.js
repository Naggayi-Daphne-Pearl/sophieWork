import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { FaRegChartBar} from 'react-icons/fa';
import {FcComboChart, FcEditImage,FcQuestions} from 'react-icons/fc'

const data = () => {
  return (
    <Container style={{
      marginTop:'1rem', 
      display:{xs:'block', lg:'flex'}
    }}>
      <Row>
        <Col  style={{
          maxWidth:{xs:'50%'}, 
          maxHeight:{xs:'50%'}, 
          
        }}>
          <Card >
           <Card.Header style={headerStyle}>
            <Row>
              <Col  xs lg="7">Total Number Of Tools</Col>
              <Col><FcComboChart style={iconStyle}/></Col>
            </Row>
           </Card.Header >
           <Card.Body>
            <h6 style={textStyle}>10,000 records</h6>
            <p style={captionStyle}>5% more than last month</p>
           </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
           <Card.Header style={headerStyle}>
            <Row>
              <Col xs lg="7">Missing Information</Col>
              <Col><FcQuestions style={iconStyle}/></Col>
            </Row>
           </Card.Header>
           <Card.Body>
            <h6 style={textStyle}>10,000 records</h6>
            <p style={captionStyle}>5% more than last month</p>
           </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
           <Card.Header style={headerStyle}>
            <Row>
              <Col  xs lg="7">Tools Edited </Col>
              <Col><FcEditImage style={iconStyle}/></Col>
            </Row>
           </Card.Header>
           <Card.Body>
            <h6 style={textStyle}>10,000 records</h6>
            <p style={captionStyle}>5% more than last month</p>
           </Card.Body>
          </Card>
        </Col>

      </Row>
    </Container>
  )
}

const headerStyle = {
  backgroundColor:'var(--primary-200)', 
  color:'var(--primary-700)', 
  fontWeight:'bolder', 
  width:'100%', 
}
const textStyle ={
  fontSize:'1.5rem',  
  marginLeft: '3rem',
  fontWeight: '700',
  lineHeight: '1.3',
  textTransform: 'capitalize',
  letterSpacing: 'var(--letterSpacing)',
}

const captionStyle ={
  fontSize:'1rem',  
  margin: '0.5rem 2.3rem',
  fontWeight: '400',
  lineHeight: '1.3',
  textTransform: 'capitalize',
  letterSpacing: 'var(--letterSpacing)',

}

const iconStyle = {
  fontSize:'1.8rem', 
  fontWeight:'bolder', 
  marginLeft:'4rem'
}

export default data
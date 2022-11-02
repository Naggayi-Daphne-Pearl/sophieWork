import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'

const Footer = () => {
    return (
        <Container style={{maxWidth:'100%', margin:{xs:'2rem', lg:'4rem'}}}>
            <Card border="light">
                <Row style={{margin:'5rem',  fontFamily:'italics', fontSize:{xs:'1rem', lg:'1.2rem'}, color:'var(--black: #222)'}}>
                    <Col lg="4"><a href='https://github.com/Alwoch/toolhub-records-management-app'>My Source Is on Github</a></Col>
                    <Col  lg="4"><p>All Rights Reserved</p></Col>
                    <Col  lg="4"><p>Languages Used: <span>REACT JS</span></p></Col>

                </Row>
            </Card>
          

        </Container>

    )
}

export default Footer
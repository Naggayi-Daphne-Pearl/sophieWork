import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'

const Footer = () => {
    return (
        <Container style={{maxWidth:'100%', margin:{xs:'2rem', lg:'4rem'}}}>
            <Card border="light">
                <Row style={{margin:'1rem',  fontFamily:'italics', fontSize:{xs:'1rem', lg:'1.2rem'}, color:'var(--black: #222)'}}>
                    <Col><a href='https://github.com/Alwoch/toolhub-records-management-app'>My Github</a></Col>
                    <Col><p>All Rights Reserved</p></Col>
                    <Col><p>Languages Used: <span>REACT JS</span></p></Col>

                </Row>
            </Card>
           

        </Container>

    )
}

export default Footer
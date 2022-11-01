import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { FcComboChart, FcPieChart, FcQuestions } from 'react-icons/fc'

const Stats = () => {
    return (
        <Container>
            <Row>
                <Col xs lg="4">
                    <Card>
                        <Card.Header>
                            <Row>
                                <Col xs lg="7">Total Number Of Tools</Col>
                                <Col><FcComboChart /></Col>
                            </Row>
                        </Card.Header >
                        <Card.Body>
                            <h6 >10,000 records</h6>
                            <p >5% more than last month</p>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xs lg="8">
                    <Card>
                        <Card.Header>
                            <Row>
                                <Col>percentage of tools with missing *information compared with the total</Col>
                            </Row>
                        </Card.Header >
                        <Card.Body>
                            <Row>
                                <Col><FcPieChart style={iconStyle} /></Col>
                                <Col>
                                <p>Missing Information</p>
                                <p>Information Recorded</p>
                                <p>Information Edited</p>

                                </Col>

                            </Row>


                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </Container>
    )
}

const iconStyle = {
    marginLeft: '2rem',
    fontSize: '8rem',
}

export default Stats
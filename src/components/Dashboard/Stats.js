import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { FcComboChart, FcPieChart, FcQuestions } from 'react-icons/fc'


const Stats = () => {
    return (
        <Container style={{
            margin: '1rem 1rem 1rem 1rem',
        }}>
            <Row>
                {/* <Col xs="12" lg="4" >
                    <Card style={{
                        marginBottom: '1rem'
                    }}>
                        <Card.Header style={headerStyle}>
                            <Row>
                                <Col xs lg="7">Total Number Of Tools</Col>
                            </Row>
                        </Card.Header >
                        <Card.Body>
                            <h6 >10,000 records</h6>
                            <p >5% more than last month</p>
                        </Card.Body>
                    </Card>

                    <Card style={{
                        marginBottom: { xs: '1rem' }
                    }}>
                        <Card.Header style={headerStyle}>
                            <Row>
                                <Col xs lg="7">Total Number Of Tools</Col>
                            </Row>
                        </Card.Header >
                        <Card.Body>
                            <h6 >10,000 records</h6>
                            <p >5% more than last month</p>
                        </Card.Body>
                    </Card>
                </Col> */}

                <Col xs="12" lg="12"
                    sx={{
                        marginTop: { xs: '1rem' }
                    }}>
                    <Card style={{
                        marginTop: { xs: '1.5rem' },
                    }}>
                        <Card.Header style={headerStyle}>
                            <Row>
                                <Col ><h6>Percentage Of Tools With Missing Information Compared With The Total Number In The Records</h6></Col>
                            </Row>
                        </Card.Header >
                        <Card.Body>
                            <Row>
                                <Col><img src='https://www.excelcharts.com/wp-content/uploads/2011/11/pie-chart-too-few-slices.png' alt='#' /></Col>
                                <Col style={{
                                    marginTop: '2rem'
                                }}>
                                    <p style={textStyle}><img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPwAAADICAMAAAD7nnzuAAAAA1BMVEUlmeJ3ewvWAAAASElEQVR4nO3BgQAAAADDoPlT3+AEVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB8A8WoAAHxScUAAAAAAElFTkSuQmCC' alt='#' style={imageStyle} />40% Information Edited </p>
                                    <p style={textStyle}><img src='https://www.safcoproducts.com/assets/products/pdp-main-images/34305_PublicSquare_BG_Burgundy.jpg' alt='#' style={imageStyle} />60% Missing Information</p>


                                </Col>

                            </Row>


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
    fontWeight: '900',
    width: '100%',
    letterSpacing: 'var(--letterSpacing)',
    fontSize: '1.2rem',
    lineHeight: '1.3',
    textTransform: 'capitalize',
}
const imageStyle = {
    width: '0.7rem',
    margin: '0.5rem'
}

const textStyle = {
    fontSize: '1.2rem',
    marginLeft: '1rem',
    fontWeight: '500',
    lineHeight: '1.3',
    textTransform: 'capitalize',
    letterSpacing: 'var(--letterSpacing)',
    color: 'var(--primary-700)',
}

export default Stats
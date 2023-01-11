import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Map = () => {
    return(
        <>
            <section className="map" id="map">
                <Container fluid>
                    <Row>
                        
                        <Col>
                            <Form>
                                <Row>
                                    <Col>
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Kulkul%20Teknologi%20Internasional!5e0!3m2!1sen!2sid!4v1601138221085!5m2!1sen!2sid"
                                            width="900"
                                            height="275"
                                            frameBorder="0"
                                            style={{ border: 0 }}
                                            allowFullScreen=""
                                            aria-hidden="false"
                                            tabIndex="0"
                                            />
                                    </Col>
                                    <Col className="form">
                                        <Row>
                                            <Col>
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                    <Form.Control type="text" placeholder="Full Name" className="inp" />
                                                </Form.Group>
                                            </Col>
                                            <Col>
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                    <Form.Control type="email" placeholder="E-mail" className="inp" />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                                <Form.Control as="textarea" rows={3} placeholder="Your Message" className="inp" />
                                            </Form.Group>
                                        </Row>
                                        <Button type="submit" className="send">SEND IT</Button>
                                    </Col>
                                </Row>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Map
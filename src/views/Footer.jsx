import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
    return(
        <>
            <section className="footer" id="footer">
                <Container>
                    <Row>
                        <Col>
                            <p>Copyright © 2020 Art Factory Company . Design: <a href="">YouTurkey11</a></p>
                        </Col>
                        <Col>
                            <i class='bx bxl-facebook-square'></i>
                            <i class='bx bxl-youtube' ></i>
                            <i class='bx bxl-linkedin-square' ></i>
                            <i class='bx bxl-instagram-alt' ></i>
                            <i class='bx bxl-behance' ></i>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Footer
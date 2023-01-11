import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';

const Frequently = () => {
    return(
        <>
            <section className="freq" id="freq">
                <Container>
                    <Row>
                        <Col className="title">
                            <h2>Frequently Asked Questions</h2>
                            <p>Vivamus venenatis eu mi ac mattis. 
                                Maecenas ut elementum sapien. 
                                Nunc euismod risus ac lobortis congue. 
                                Sed erat quam.
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="details">
                            <h4>Class aptent taciti sociosqu ad litora torquent per conubia</h4>
                            <p>Curabitur placerat diam in risus lobortis, laoreet porttitor est elementum. 
                                Nulla ultricies risus quis risus scelerisque, a aliquam tellus maximus. 
                                Cras pretium nulla ac convallis iaculis. 
                                Aenean bibendum erat vitae odio sodales, in facilisis tellus volutpat.
                            </p>
                            <p>Sed lobortis pellentesque magna ac congue. 
                                Suspendisse quis molestie magna, id eleifend ex. Ut mollis ultricies diam nec dictum. 
                                Morbi commodo hendrerit mi vel vulputate. Proin non tincidunt dui. 
                                Lorem ipsum dolor sit amet.
                            </p>
                            <p>Email: <a href="mailto:">email@company.com</a></p>
                            <Button type="submit" className="submit">CONTACT US</Button>
                        </Col>
                        <Col>
                            <Accordion defaultActiveKey="0" flush>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>First Common Question</Accordion.Header>
                                    <Accordion.Body>
                                        <p>Duis vulputate porttitor urna sit amet pretium. Phasellus sed pulvinar eros, condimentum consequat ex. Suspendisse potenti.</p>
                                        <p>Pellentesque maximus lorem sed elit imperdiet mattis. Duis posuere mauris ut eros rutrum sodales. Aliquam erat volutpat.</p>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Second Question Answer</Accordion.Header>
                                    <Accordion.Body>
                                        <p>Sed odio elit, cursus sed consequat at, rutrum eget augue. Cras ac eros iaculis, tempor quam sit amet, scelerisque mi.
                                            Quisque eu risus eget nunc porttitor vestibulum at a ante.</p>
                                        <p>Praesent ut placerat turpis, vel pellentesque dolor. Sed rutrum eleifend tortor, eu luctus orci sagittis in. In blandit fringilla mollis.</p>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>Third Answer for you</Accordion.Header>
                                    <Accordion.Body>
                                        <p>Proin feugiat ante ut vulputate rutrum. Nam quis erat turpis. Nullam maximus pharetra lorem, eu condimentum est iaculis ut. Pellentesque mattis ultrices dignissim.</p>
                                        <p>Etiam et enim finibus, feugiat massa efficitur, finibus sapien. Sed cursus lacus quis arcu scelerisque, eget ornare risus maximus. Aenean non lectus id odio rhoncus pharetra.</p>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>Fourth Question Asked</Accordion.Header>
                                    <Accordion.Body>
                                        <p>Phasellus eu purus ornare, eleifend orci nec, egestas nulla. Sed sed aliquet sapien. Proin placerat, ipsum eu posuere blandit, tellus quam consectetur nisi, id sollicitudin diam ex at nisi.</p>
                                        <p>Aenean fermentum eget turpis egestas semper. Sed finibus mollis venenatis. Praesent at sem in massa iaculis pharetra.</p>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4">
                                    <Accordion.Header>Fifth Ever Question</Accordion.Header>
                                    <Accordion.Body>
                                        <p>Quisque aliquet ipsum ut magna rhoncus, euismod lacinia elit rhoncus. Sed sapien elit, mollis ut ultricies quis, fermentum nec ante.</p>
                                        <p>Sed nec ex nec tortor fermentum sollicitudin id ut ligula. Ut sagittis rutrum lectus, non sagittis ante euismod eu.</p>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="5">
                                    <Accordion.Header>Sixth Sense Question</Accordion.Header>
                                    <Accordion.Body>
                                        <p>Suspendisse potenti. Ut dapibus leo ut massa vulputate semper. Pellentesque maximus lorem sed elit imperdiet mattis. Duis posuere mauris ut eros rutrum sodales. Aliquam erat volutpat.</p>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Frequently;
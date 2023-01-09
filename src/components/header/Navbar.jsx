import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavbarHeader = () => {
  return (
    <>
        <Navbar collapseOnSelect expand="lg">
            <Container>
                <Navbar.Brand href="#">ART FACTORY</Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto links">
                        <Nav.Link href="#" className='active'>HOME</Nav.Link>
                        <Nav.Link href="#about">ABOUT</Nav.Link>
                        <Nav.Link href="#services">SERVICES</Nav.Link>
                        <Nav.Link href="#frequently">FREQUENTLY QUESTIONS</Nav.Link>
                        <NavDropdown title="DROP DOWN" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="">ABOUT US</NavDropdown.Item>
                            <NavDropdown.Item href="">FEATURES</NavDropdown.Item>
                            <NavDropdown.Item href="">FAQ'S</NavDropdown.Item>
                            <NavDropdown.Item href="">BLOGS</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#contact">CONTACT US</Nav.Link>
                    </Nav>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    </>
  )
}

export default NavbarHeader
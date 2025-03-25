import React from 'react';
import { Navbar, Nav, Container, Form, Button, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavbarComponent = () => {
    return (
        <Navbar bg="white" variant="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        src="/bms_main.png"
                        height="50"
                        className="d-inline-block align-top"
                        alt="BookMyShow logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <div className="flex-grow-1 d-flex justify-content-end">
                        <Form className="flex-grow-1 me-3">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="w-100"
                                aria-label="Search"
                            />
                        </Form>
                    </div>
                    <Nav className="me-auto align-right">
                        <NavDropdown title="City" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Bengaluru</NavDropdown.Item>
                            <NavDropdown.Item href="#action3">Delhi</NavDropdown.Item>
                            <NavDropdown.Item href="#action3">Mumbai</NavDropdown.Item>
                            <NavDropdown.Item href="#action3">Ahmedabad</NavDropdown.Item>
                            <NavDropdown.Item href="#action3">Chennai</NavDropdown.Item>
                        </NavDropdown>
                        <Button variant="outline-success">Sign in</Button>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavbarComponent;
import React from 'react';
import { Navbar, Nav, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const SecondaryNav = () => {
    return (
        <Navbar bg="light" variant="light" expand="lg" className="py-0">
            <Container className="px-5">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto py-1">
                        <Nav.Link href="#action1" className="py-1">Movies</Nav.Link>
                        <Nav.Link href="#action1" className="py-1">Stream</Nav.Link>
                        <Nav.Link href="#action1" className="py-1">Events</Nav.Link>
                        <Nav.Link href="#action1" className="py-1">Plays</Nav.Link>
                        <Nav.Link href="#action1" className="py-1">Sports</Nav.Link>
                        <Nav.Link href="#action1" className="py-1">Activities</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#action1" className="py-1">ListYourShow</Nav.Link>
                        <Nav.Link href="#action1" className="py-1">Corporates</Nav.Link>
                        <Nav.Link href="#action1" className="py-1">Offers</Nav.Link>
                        <Nav.Link href="#action1" className="py-1">Gift Cards</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default SecondaryNav;
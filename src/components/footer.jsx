import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
    const footerStyle = {
        backgroundColor: '#333333',
        color: '#ffffff',
        padding: '40px 0',
        marginTop: '30px'
    };

    const linkStyle = {
        color: '#ffffff',
        textDecoration: 'none',
        fontSize: '14px'
    };

    const headingStyle = {
        fontSize: '16px',
        fontWeight: 'bold',
        marginBottom: '15px'
    };

    return (
        <footer style={footerStyle}>
            <Container>
                <Row>
                    <Col md={3}>
                        <h5 style={headingStyle}>MOVIES BY GENRE</h5>
                        <ul className="list-unstyled">
                            <li><a href="#" style={linkStyle}>Action Movies</a></li>
                            <li><a href="#" style={linkStyle}>Drama Movies</a></li>
                            <li><a href="#" style={linkStyle}>Comedy Movies</a></li>
                            <li><a href="#" style={linkStyle}>Thriller Movies</a></li>
                        </ul>
                    </Col>
                    <Col md={3}>
                        <h5 style={headingStyle}>MOVIES BY LANGUAGE</h5>
                        <ul className="list-unstyled">
                            <li><a href="#" style={linkStyle}>Hindi Movies</a></li>
                            <li><a href="#" style={linkStyle}>English Movies</a></li>
                            <li><a href="#" style={linkStyle}>Telugu Movies</a></li>
                            <li><a href="#" style={linkStyle}>Tamil Movies</a></li>
                        </ul>
                    </Col>
                    <Col md={3}>
                        <h5 style={headingStyle}>HELP</h5>
                        <ul className="list-unstyled">
                            <li><a href="#" style={linkStyle}>About Us</a></li>
                            <li><a href="#" style={linkStyle}>Contact Us</a></li>
                            <li><a href="#" style={linkStyle}>Terms & Conditions</a></li>
                            <li><a href="#" style={linkStyle}>Privacy Policy</a></li>
                        </ul>
                    </Col>
                    <Col md={3}>
                        <h5 style={headingStyle}>BOOK MY SHOW APP</h5>
                        <ul className="list-unstyled">
                            <li><a href="#" style={linkStyle}>iOS</a></li>
                            <li><a href="#" style={linkStyle}>Android</a></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
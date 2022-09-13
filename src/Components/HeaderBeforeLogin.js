import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LoginButton from './LoginButton';
import '../Styles/Header.css';

class HeaderBeforeLogin extends React.Component {
    render() {
      return (
        <Navbar id="navigation" sticky="top" collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand id="logo" href="#hero-container">BOOKEM</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto justify-content-end" id="items" style={{ width: "100%" }}>
            <Nav.Link id="navitems" href="#hero-container">Home</Nav.Link>
            <Nav.Link id="navitems" href="#AboutUs">About Us</Nav.Link>
            <Nav.Link id="navitems" href="#Services">Services</Nav.Link>
            <Nav.Link id="navitems" href="#Testimonials">Testimonials</Nav.Link>
            <div className='headerbtn'>
            <LoginButton />
            </div>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        )
    }
  }
  
  export default HeaderBeforeLogin;
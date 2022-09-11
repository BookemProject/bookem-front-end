import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import LoginButton from './LoginButton';
import '../Styles/Header.css';

class HeaderBeforeLogin extends React.Component {
    render() {
      return (
        <Navbar sticky="top">
        <Container>
          <Navbar.Brand href="#home"><Image id="header-logo" src={require("../images/BOOKEM.webp")}/></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#Home">Home</Nav.Link>
            <Nav.Link href="#AboutUs">About Us</Nav.Link>
            <Nav.Link href="#Services">Services</Nav.Link>
            <Nav.Link href="#Testimonials">Testimonials</Nav.Link>
            <LoginButton />

          </Nav>
        </Container>
      </Navbar>
        )
    }
  }
  
  export default HeaderBeforeLogin;
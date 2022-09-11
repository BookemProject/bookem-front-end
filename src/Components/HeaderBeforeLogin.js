import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LoginButton from './LoginButton';
import '../Styles/Header.css';

class HeaderBeforeLogin extends React.Component {
    render() {
      return (
        <Navbar id="navigation" sticky="top">
        <Container>
          <Navbar.Brand id="logo" href="#home">BOOKEM</Navbar.Brand>
          <Nav className="ml-auto" id="items" >
            <Nav.Link id="navitems" href="#Home">Home</Nav.Link>
            <Nav.Link id="navitems" href="#AboutUs">About Us</Nav.Link>
            <Nav.Link id="navitems" href="#Services">Services</Nav.Link>
            <Nav.Link id="navitems" href="#Testimonials">Testimonials</Nav.Link>
            <div className='headerbtn'>
            <LoginButton />
            </div>
          </Nav>
        </Container>
      </Navbar>
        )
    }
  }
  
  export default HeaderBeforeLogin;
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import LogoutButton from './LogoutButton';
import '../Styles/Header.css';

class HeaderAfterLogin extends React.Component {
    render() {
      return (
        <Navbar id="navigation" sticky="top">
        <Container>
          <Navbar.Brand id="logo"><Link style={{ textDecoration: 'none', color: 'black' }} to="/">BOOKEM</Link></Navbar.Brand>
          <Nav className="ml-auto" id="items">
            <Nav.Link id="navitems"><Link  style={{ textDecoration: 'none', color: 'black' }} to="/">Home</Link></Nav.Link>
            <Nav.Link id="navitems"><Link  style={{ textDecoration: 'none', color: 'black' }} to="/aboutUs">About Us</Link></Nav.Link>
            <Nav.Link id="navitems"><Link  style={{ textDecoration: 'none', color: 'black' }} to="/ourTeam">Our Team</Link></Nav.Link>
            <Nav.Link id="navitems"><Link  style={{ textDecoration: 'none', color: 'black' }} to="/profile">Profile</Link></Nav.Link>
            <Nav.Link id="navitems"><Link  style={{ textDecoration: 'none', color: 'black' }} to="/myCollections">My Collections</Link></Nav.Link>
            <div className='headerbtn'>
            <LogoutButton />
            </div>
          </Nav>
        </Container>
      </Navbar>
        )
    }
  }
  
  export default HeaderAfterLogin;
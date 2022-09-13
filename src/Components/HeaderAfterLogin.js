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
        <Navbar id="navigation" sticky="top" collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand ><Link id="logo" style={{ textDecoration: 'none'}} to="/">BOOKEM</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto justify-content-end" id="items" style={{ width: "100%" }}>
            <Nav.Link ><Link id="navitems" style={{ textDecoration: 'none', }} to="/">Home</Link></Nav.Link>
            <Nav.Link ><Link id="navitems" style={{ textDecoration: 'none', }} to="/aboutUs">About Us</Link></Nav.Link>
            <Nav.Link ><Link id="navitems" style={{ textDecoration: 'none', }} to="/ourTeam">Our Team</Link></Nav.Link>
            <Nav.Link ><Link id="navitems" style={{ textDecoration: 'none', }} to="/profile">Profile</Link></Nav.Link>
            <Nav.Link className="special" ><Link id="navitems" style={{ textDecoration: 'none', }} to="/myCollections">My Collections</Link></Nav.Link>
            <div className='headerbtn'>
            <LogoutButton />
            </div>
          </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>
        )
    }
  }
  
  export default HeaderAfterLogin;
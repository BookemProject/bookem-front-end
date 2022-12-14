import React from 'react';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import LogoutButton from './LogoutButton';
import "../Styles/Footer.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

class FooterAfterLogin extends React.Component {
  render() {
    return (
      <div className="top" style={{marginTop:"50px"}}>
        <Container>
    <Row className="row:after">
    <Col  className = "column">
          <Navbar.Brand id="logo"><Link id="tabs" style={{ textDecoration: 'none',}} to="/">BOOKEM</Link></Navbar.Brand>
          </Col>
        <Col  className = "nav">     
    
     
            <Nav.Link style={{textAlign:"left"}} ><Link id="tabs"  style={{ textDecoration: 'none', }} to="/">Home</Link></Nav.Link>
            <Nav.Link style={{textAlign:"left"}} ><Link id="tabs" style={{ textDecoration: 'none', }}  to="/aboutUs">About Us</Link></Nav.Link>
            <Nav.Link style={{textAlign:"left"}} ><Link id="tabs" style={{ textDecoration: 'none', }} to="/ourTeam">Our Team</Link></Nav.Link>
            <Nav.Link style={{textAlign:"left"}} ><Link id="tabs" style={{ textDecoration: 'none', }}  to="/profile">Profile</Link></Nav.Link>
            <Nav.Link style={{textAlign:"left"}} ><Link id="tabs" style={{ textDecoration: 'none', }}  to="/myCollections">My Collections</Link></Nav.Link>
    </Col>
        <Col  className = "column">      
        <p className='linesize'> All right reserved © Bookem | 2022</p>
        <div id="icons">
        <img className='spacebetween' src={require("../images/facebook.png")} alt="" />
            <img className='spacebetween' src={require("../images/instagram.png")} alt="" />
            <img className='spacebetween' src={require("../images/pinterest.png")} alt="" />
      </div>
      </Col>

        <Col  className = "column"> <LogoutButton /></Col>
      </Row>
    </Container>
    </div>
    )
  }
}

export default FooterAfterLogin;

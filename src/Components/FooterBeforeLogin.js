import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
 import Col from 'react-bootstrap/Col';
// import ListGroup from 'react-bootstrap/ListGroup';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LoginButton from './LoginButton';
import "../Styles/Footer.css";
class FooterBeforeLogin extends React.Component {
  render() {
    return (
      <div className="top">
        <Container  id="footer">
        <Row className="row:after">
        <Col  className = "column">
          <Navbar.Brand id="logo">BOOKEM</Navbar.Brand>
          </Col>
          
         
          
          <Col className="nav">
            <Nav.Link id="tabs" style={{ textDecoration: 'none',  textAlign:"left" }} href="#hero-container">Home</Nav.Link>
            <Nav.Link id="tabs" style={{ textDecoration: 'none',  textAlign:"left" }} href="#AboutUs">About Us</Nav.Link>
            <Nav.Link id="tabs" style={{ textDecoration: 'none',  textAlign:"left" }} href="#Services">Services</Nav.Link>
            <Nav.Link id="tabs" style={{ textDecoration: 'none',  textAlign:"left" }} href="#testmonial">Testimonials</Nav.Link>
            </Col>
         
            <Col  className = "column">     
            <p className='linesize'> All right reserved © Bookem | 2022</p>
          
            <div id="icons">
            <img className='spacebetween' src={require("../images/facebook.png")} alt="" />
            <img className='spacebetween' src={require("../images/instagram.png")} alt="" />
            <img  className='spacebetween' src={require("../images/pinterest.png")} alt="" />
            </div>
            </Col>
            <Col  className = "column"> 
            <div className='headerbtn '>
            <LoginButton />
            </div>
            </Col>
          </Row>
        </Container>
        </div>

  
   
    )
  }
}

export default FooterBeforeLogin;

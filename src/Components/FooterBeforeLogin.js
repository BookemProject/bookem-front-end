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
            <Nav.Link style={{ textDecoration: 'none', color: 'black' }} href="#Home">Home</Nav.Link>
            <Nav.Link style={{ textDecoration: 'none', color: 'black' }} href="#AboutUs">About Us</Nav.Link>
            <Nav.Link style={{ textDecoration: 'none', color: 'black' }} href="#Services">Services</Nav.Link>
            <Nav.Link style={{ textDecoration: 'none', color: 'black' }} href="#Testimonials">Testimonials</Nav.Link>
            </Col>
         
            <Col  className = "column">     
            <p> All right reserved © Web Name | 2022</p>
          
            <div id="icons">
            <img src={require("../images/fb-icon.png")}alt="" />
            <img src={require("../images/insta-icon.png")} alt="" />
            <img src={require("../images/pint-icon.png")} alt="" />
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

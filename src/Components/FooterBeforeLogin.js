import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import ListGroup from 'react-bootstrap/ListGroup';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LoginButton from './LoginButton';
import "../Styles/Footer.css";
class FooterBeforeLogin extends React.Component {
  render() {
    return (
      <Navbar >
        <Container className="row:after" id="footer">
          <Navbar.Brand id="logo" href="#home">BOOKEM</Navbar.Brand>
          
          <Nav className="me-auto">
          
          <div className="column">
            <Nav.Link href="#Home">Home</Nav.Link>
            <Nav.Link href="#AboutUs">About Us</Nav.Link>
            <Nav.Link href="#Services">Services</Nav.Link>
            <Nav.Link href="#Testimonials">Testimonials</Nav.Link>
            </div>
            <div className="column">
            <div>
            <p> All right reserved © Web Name | 2022</p>
            </div>
            <div id="icons">
            <img src={require("../images/fb-icon.png")}alt="" />
            <img src={require("../images/insta-icon.png")} alt="" />
            <img src={require("../images/pint-icon.png")} alt="" />
            </div>
            </div>
            <div className='headerbtn column'>
            <LoginButton />
            </div>
          </Nav>
        </Container>
      </Navbar>

    //     <Container>
    // <Row className="row:after">
    //     <Col className = "column"> 
    //      <img src={require("../images/BOOKEM.webp")} alt="" />
    //       </Col>
      
    //     <Col  className = "column"> 
        
    //     <ListGroup>
    //     <ListGroup.Item>Home</ListGroup.Item>
    //   <ListGroup.Item>About Us</ListGroup.Item>
    //   <ListGroup.Item>Our Team</ListGroup.Item>
    //   <ListGroup.Item>Services</ListGroup.Item>
    //   <ListGroup.Item>Testimonials</ListGroup.Item>
    // </ListGroup>
    // </Col>
    //     <Col  className = "column">
    //     <p> All right reserved © Web Name | 2022</p>
    //     <div id="icons">
    //         <img src={require("../images/fb-icon.png")}alt="" />
    //         <img src={require("../images/insta-icon.png")} alt="" />
    //         <img src={require("../images/pint-icon.png")} alt="" />
    //   </div>
    //   </Col>
       
    //     <Col  className = "column"><LoginButton /></Col>
    //   </Row>
   
    // </Container>
   
    )
  }
}

export default FooterBeforeLogin;

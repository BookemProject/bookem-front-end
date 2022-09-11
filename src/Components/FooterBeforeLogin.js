import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import LoginButton from './LoginButton';
import "../Styles/Footer.css";
class FooterBeforeLogin extends React.Component {
  render() {
    return (
        <Container>
    <Row class="row:after">
        <Col class = "column"> 
         <img src={require("../images/BOOKEM.webp")} alt="" />
          </Col>
      
        <Col  class = "column"> 
        <ListGroup>
        <ListGroup.Item><Link href="#Home" >Home</Link></ListGroup.Item>
      <ListGroup.Item><Link href="#AboutUs" >About Us </Link></ListGroup.Item>
      <ListGroup.Item><Link href="#OurTeam" >Our Team</Link></ListGroup.Item>
      <ListGroup.Item><Link href="#Services" >Services</Link></ListGroup.Item>
      <ListGroup.Item><Link href="#Testimonials" >Testimonials</Link></ListGroup.Item>
    </ListGroup>
    </Col>
        <Col  class = "column">
        <p> All right reserved © Web Name | 2022</p>
        <div id="icons">
            <img src={require("../images/fb-icon.png")}alt="" />
            <img src={require("../images/insta-icon.png")} alt="" />
            <img src={require("../images/pint-icon.png")} alt="" />
      </div>
        
        </Col >

        <Col  class = "column"><LoginButton /></Col>
      </Row>
    </Container>
   
    )
  }
}

export default FooterBeforeLogin;

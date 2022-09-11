import React from 'react';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import LogoutButton from './LogoutButton';
import "../Styles/Footer.css";
import 'bootstrap/dist/css/bootstrap.min.css';

class FooterAfterLogin extends React.Component {
  render() {
    return (
        <Container>
    <Row>
        <Col>
        <img src={require("../images/BOOKEM.webp")} alt="" />
        </Col>
        <Col>     
    <ListGroup>
      <ListGroup.Item><Link to="" >Home</Link></ListGroup.Item>
      <ListGroup.Item><Link to="/AboutUs" >About Us </Link></ListGroup.Item>
      <ListGroup.Item><Link to="/OurTeam" >Our Team</Link></ListGroup.Item>
      <ListGroup.Item><Link to="" >Profile</Link></ListGroup.Item>
      <ListGroup.Item><Link to="" >My Collections</Link></ListGroup.Item>
    </ListGroup>
    </Col>
        <Col>      
        <p> All right reserved © Web Name | 2022</p>
        <div id="icons">
            <img src="images/fb-icon.png" alt="" />
            <img src="images/insta-icon.png" alt="" />
            <img src="images/pint-icon.png" alt="" />
      </div>
      </Col>

        <Col> <LogoutButton /></Col>
      </Row>
    </Container>
   
    )
  }
}

export default FooterAfterLogin;
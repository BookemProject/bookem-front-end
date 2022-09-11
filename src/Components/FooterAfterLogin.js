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
    <Row class="row:after">
        <Col  class = "column">
        <img src={require("../images/BOOKEM.webp")} alt="" />
        </Col>
        <Col  class = "column">     
    <ListGroup>
      <ListGroup.Item><Link to="/HomeAfterLogin" >Home</Link></ListGroup.Item>
      <ListGroup.Item><Link to="/AboutUs" >About Us </Link></ListGroup.Item>
      <ListGroup.Item><Link to="/OurTeam" >Our Team</Link></ListGroup.Item>
      <ListGroup.Item><Link to="/Profile" >Profile</Link></ListGroup.Item>
      <ListGroup.Item><Link to="/MyCollections" >My Collections</Link></ListGroup.Item>
    </ListGroup>
    </Col>
        <Col  class = "column">      
        <p> All right reserved © Web Name | 2022</p>
        <div id="icons">
        <img src={require("../images/fb-icon.png")}alt="" />
            <img src={require("../images/insta-icon.png")} alt="" />
            <img src={require("../images/pint-icon.png")} alt="" />
      </div>
      </Col>

        <Col  class = "column"> <LogoutButton /></Col>
      </Row>
    </Container>
   
    )
  }
}

export default FooterAfterLogin;
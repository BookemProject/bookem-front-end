import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import "../Styles/AboutUs.css";

class SacendSection extends React.Component {
    render() {
      return (
        <Container className="border">
        <Row className="row:after">
           <Col sm={4} className="column">
            
             <Card.Img variant="top" className="sectionimg" src={require("../images/Rent.png")} />
             </Col>
           <Col sm={8} className="left">
           <Row><h2>Farm Rental</h2></Row>
           <Row><p> The site allows, by displaying all the pictures of the farm, their prices, and locations, to facilitate the customer's choice of the appropriate place for him on the appropriate date for him, in addition to the presence of a list of favorites that saves for the customer what he liked in case he wants to see it again</p></Row>
           
           </Col>
         </Row>
         <Row> <span class="line" ></span></Row>
         </Container>
        )
    }
  }
  
  export default SacendSection;
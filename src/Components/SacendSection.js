import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class SacendSection extends React.Component {
    render() {
      return (
        <Container>
        <Row>
          <Col sm={4}>sm=4</Col>
          <Col sm={8}>
          <Row><h2>Farm Rental</h2></Row>
          <Row><p> The site allows, by displaying all the pictures of the farm, their prices, and locations, to facilitate the customer's choice of the appropriate place for him on the appropriate date for him, in addition to the presence of a list of favorites that saves for the customer what he liked in case he wants to see it again</p></Row>
          
          </Col>
        </Row>
        </Container>
        )
    }
  }
  
  export default SacendSection;
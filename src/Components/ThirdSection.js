import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import "../Styles/AboutUs.css";


class ThirdSection extends React.Component {
    render() {
      return (
        <Container >
     
        <Row className="row:after">
         
           <Col sm={8} className="left" >
          <Row><h2>Add Farms</h2></Row>
          <Row><p> The site provides distinguished marketing services as it helps in publishing the name of your farm through a form to be filled out by the lessor and adding all the necessary and important information to the customer</p></Row>

          </Col>
          <Col sm={4} className="column" >
          <Card.Img variant="top" className="sectionimg" src={require("../images/marketing.png")} />
            </Col>
        </Row>
        </Container>
        )
    }
  }
  
  export default ThirdSection;
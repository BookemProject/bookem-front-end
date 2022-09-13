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
        <div id="ABOUTUS1">
        <div className="SECTION">
        <Container >
        <Row className="row:after">
           <Col sm={4} className="column">
            
             <Card.Img variant="top" className="sectionimg" src={require("../images/Rent.png")} />
             </Col>
           <Col sm={8} className="left">
           <Row><h3 className="subTitle">Farm Rental</h3></Row>
           <Row><p className="paragraph1"> The site allows, by displaying all the pictures of the farm, their prices, and locations, to facilitate the customer's choice of the appropriate place for him on the appropriate date for him, in addition to the presence of a list of favorites that saves for the customer what he liked in case he wants to see it again</p></Row>
           
           </Col>
         </Row>
         </Container>
         <Container >
     
        <Row className="row:after">
         
           <Col sm={8} className="left" >
          <Row><h3 className="subTitleR">Add Farms</h3></Row>
          <Row><p className="paragraphR"> The site provides distinguished marketing services as it helps in publishing the name of your farm through a form to be filled out by the lessor and adding all the necessary and important information to the customer</p></Row>

          </Col>
          <Col sm={4} className="column" >
          <Card.Img variant="top" className="sectionimg" src={require("../images/marketing.png")} />
            </Col>
        </Row>
        </Container>
         </div>
         </div>

        )
    }
  }
  
  export default SacendSection;
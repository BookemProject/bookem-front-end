import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import "../Styles/Services.css";

class Services extends React.Component {
    render() {
      return (
        <div id="Services" style={{ height: "100vh" }}>
        <h1 id="hh1">What Do We Offer!</h1>
        <Container id="bodyCard">
              <Row xs={1} sm={2} md={3} lg={4} >
              <Col>
                <div id="wrapper">
                  <Card style={{ width: "18rem" }} id="card">
                    <Card.Img variant="top" src={require("../images/serviceDescover.jpg")} id="cardImg"  />
                    <Card.Body id="info" style={{ margin: "-10px 0px" }}>
                      <Card.Title id="cardTitle">Discover all our farms</Card.Title>
                      <Card.Text id="cardText">Finding Jordan's beautiful farms is easy and possible. Join us to Explore them, Bookem helps you organize your vacation with ease!</Card.Text>
                    </Card.Body>
                  </Card>
                </div>
                </Col>
                <Col>
                <div id="wrapper">
                  <Card style={{ width: "18rem" }} id="card">
                    <Card.Img variant="top" src={require("../images/farm4.jpg")} id="cardImg"  />
                    <Card.Body id="info" style={{ margin: "-10px 0px" }}>
                      <Card.Title id="cardTitle">Add your farm</Card.Title>
                      <Card.Text id="cardText">Bokem helps you with marketing your farm, "enjoy more bookings and more money"</Card.Text>
                    </Card.Body>
                  </Card>
                </div>
                </Col>
                <Col>
                <div id="wrapper">
                  <Card style={{ width: "18rem" }} id="card">
                    <Card.Img variant="top" src={require("../images/serviceOrganize.jpg")} id="cardImg"  />
                    <Card.Body id="info" style={{ margin: "-10px 0px" }}>
                      <Card.Title id="cardTitle">Organize your trip</Card.Title>
                      <Card.Text id="cardText">Bokem helps you find out the details of the farm you like, its location and the weather on the day of your reservation.
                       </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
                </Col>
                <Col>
                <div id="wrapper">
                  <Card style={{ width: "18rem" }} id="card">
                    <Card.Img variant="top" src={require("../images/serviceGarantee.jpg")} id="cardImg"  />
                    <Card.Body id="info" style={{ margin: "-10px 0px" }}>
                      <Card.Title id="cardTitle">Reliable Guarantees</Card.Title>
                      <Card.Text id="cardText">
                      Travel with peace of mind: our guarantees protect your exchanges and your farm</Card.Text>
                    </Card.Body>
                  </Card>
                </div>
                </Col>
              </Row>
            </Container>  
           </div>

        )
    }
  }
  
  export default Services;
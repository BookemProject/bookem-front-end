import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import "../Styles/Services.css";

class Services extends React.Component {
    render() {
      return (
        <div >
        <h1 id="hh1">Check out these beautiful farms!</h1>
        <Container id="bodyCard">
              <Row xs={1} sm={2} md={3} lg={4} >
              <Col>
                <div id="wrapper">
                  <Card style={{ width: "18rem" }} id="card">
                    <Card.Img variant="top" src={require("../images/farm1.jpeg")} id="cardImg"  />
                    <Card.Body id="info" style={{ margin: "-10px 0px" }}>
                      <Card.Title id="cardTitle">Amman</Card.Title>
                      <Card.Text id="cardText">Wadi Alnaheel, beautiful farms, Explore it.</Card.Text>
                    </Card.Body>
                  </Card>
                </div>
                </Col>
                <Col>
                <div id="wrapper">
                  <Card style={{ width: "18rem" }} id="card">
                    <Card.Img variant="top" src={require("../images/farm2.jpg")} id="cardImg"  />
                    <Card.Body id="info" style={{ margin: "-10px 0px" }}>
                      <Card.Title id="cardTitle">Amman</Card.Title>
                      <Card.Text id="cardText">jarat Alwadi, Dabooq, beautiful farms, Explore it.</Card.Text>
                    </Card.Body>
                  </Card>
                </div>
                </Col>
                <Col>
                <div id="wrapper">
                  <Card style={{ width: "18rem" }} id="card">
                    <Card.Img variant="top" src={require("../images/farm3.jpg")} id="cardImg"  />
                    <Card.Body id="info" style={{ margin: "-10px 0px" }}>
                      <Card.Title id="cardTitle">Irbid</Card.Title>
                      <Card.Text id="cardText">Sun and Moon, beautiful farms, Explore it.
                       </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
                </Col>
                <Col>
                <div id="wrapper">
                  <Card style={{ width: "18rem" }} id="card">
                    <Card.Img variant="top" src={require("../images/farm4.jpg")} id="cardImg"  />
                    <Card.Body id="info" style={{ margin: "-10px 0px" }}>
                      <Card.Title id="cardTitle">Al-Salt</Card.Title>
                      <Card.Text id="cardText">
                        Wadi Alnaheel, beautiful farms, Explore it.</Card.Text>
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
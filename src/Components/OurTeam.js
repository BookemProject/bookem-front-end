import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import "../Styles/OurTeam.css";

class OurTeam extends React.Component {
    render(){
        return(
            
      <div id="body">
      <div id="home-picture">our Team</div>
      <div id = "section">

      <Container id="container">
        <Row xs={1} sm={2} md={3} lg={3} >
          <Col>
          <div id="wrapper">
            <Card style={{ width: "18rem" }} id="card">
              <div id="content">
                <Card.Img
                  variant="top"
                  id="imageBx"
                  src={require('../images/noor.jpeg')}
                />
                <Card.Body id="contentBx">
                  <Card.Title id="name">Noor Alkhateeb</Card.Title>
                  <Card.Text id="job">Full Stack Web developer</Card.Text>
                  
                </Card.Body>
              </div>
            </Card>
            </div>
            </Col>
            <Col>
            <Card style={{ width: "18rem" }} id="card">
              <div id="content">
                <Card.Img
                  variant="top"
                  id="imageBx"
                  src={require('../images/yazan.png')}
                />
                <Card.Body id="contentBx">
                  <Card.Title>Yazan Alfarra</Card.Title>
                  <Card.Text>Full Stack Web developer</Card.Text>
     
                </Card.Body>
              </div>
            </Card>
            </Col>
            <Col>
            <Card style={{ width: "18rem" }} id="card">
              <div id="content">
                <Card.Img
                  variant="top"
                  id="imageBx"
                  src={require('../images/bashar.jpg')}
                />
                <Card.Body id="contentBx">
                  <Card.Title>Bashar Nobeh</Card.Title>
                  <Card.Text>Full Stack Web developer</Card.Text>
                </Card.Body>
              </div>
            </Card>
            </Col>
            <Col>
            <Card style={{ width: "18rem" }} id="card">
              <div id="content">
                <Card.Img
                  variant="top"
                  id="imageBx"
                  src={require('../images/ihab.jpg')}
                />
                <Card.Body id="contentBx">
                  <Card.Title>Ihab Abbas</Card.Title>
                  <Card.Text>Full Stack Web developer</Card.Text>
                </Card.Body>
              </div>
            </Card>
            </Col>
            <Col>
            <Card style={{ width: "18rem" }} id="card">
              <div id="content">
                <Card.Img
                  variant="top"
                  id="imageBx"
                  src={require('../images/ibraheem.jpg')}
                />
                <Card.Body id="contentBx">
                  <Card.Title>Ibrahim Almanaseer</Card.Title>
                  <Card.Text>Full Stack Web developer</Card.Text>
                </Card.Body>
              </div>
            </Card>
            </Col>
            <Col>
            <Card style={{ width: "18rem" }} id="card">
              <div id="content">
                <Card.Img
                  variant="top"
                  id="imageBx"
                  src=""
                />
                <Card.Body id="contentBx">
                  <Card.Title>Morshed qatoseh</Card.Title>
                  <Card.Text>Full Stack Web developer</Card.Text>
                </Card.Body>
              </div>
            </Card>
            </Col>
          
          
        </Row>
      </Container>
      </div>
    </div>
        )
    }

}

export default OurTeam;
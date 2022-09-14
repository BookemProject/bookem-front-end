import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Figure from 'react-bootstrap/Figure';
import "../Styles/OurTeam.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedinIn, faGithub} from '@fortawesome/free-brands-svg-icons'

class OurTeam extends React.Component {
  render() {
    return (
      <div id="body">
      
        <Container id="containerc">
          <Figure>
            <div id="pic">
              <Figure.Image
                id="imageBxc"
                src={require("../images/111.png")}
              />
        <h1 style={{color:"#004aac"}} id="ht">Our team</h1>
              
              {/* <p id="pt">Discover our team</p> */}
            </div>
            <Figure.Caption id="descr"    style={{color:"#092953"}}>
              It is our creed. At you, we are convinced that another way to
              choose your travels: an inclusive way, where everyone understands
              their influence and respects their choices. What makes us strong
              is the desire to develop ourselves and our website, our daily
              motivation, and the close relationship we maintain with our
              clients: our members.
            </Figure.Caption>
          </Figure>
        </Container>
        <div id="section">
          <Container id="container">
            <Row xs={1} sm={1} md={2} lg={3}>
              <Col>
                <Card style={{ width: "18rem", marginLeft:"50px" }} id="card">
                  <div id="content">
                    <Card.Img
                      variant="top"
                      id="imageBx"
                      src={require("../images/noor.jpeg")}
                    />
                    <Card.Body id="contentBx">
                      <Card.Title id="name"  style={{color:"#004aac"}}>Noor Alkhateeb</Card.Title>
                      <Card.Text id="job"    style={{color:"#092953"}}>Full Stack Web developer</Card.Text>
                    </Card.Body>
                    <div id="social-media-icons">
                      <a href="https://www.facebook.com/noor.alkhateb">
                        <FontAwesomeIcon icon={faFacebook}/>
                      </a>
                      <a href="https://www.linkedin.com/in/noor-al-khateeb-1a1665143/">
                        <FontAwesomeIcon icon={faLinkedinIn}/>
                      </a>
                      <a href="https://github.com/Noor696">
                        <FontAwesomeIcon icon={faGithub}/>
                      </a>
                    </div>
                  </div>
                </Card>
              </Col>
              <Col>
                <Card style={{ width: "18rem", marginLeft:"50px"  }} id="card">
                  <div id="content">
                    <Card.Img
                      variant="top"
                      id="imageBx"
                      src={require("../images/yazan.png")}
                    />
                    <Card.Body id="contentBx">
                      <Card.Title id="name" style={{color:"#004aac"}}>Yazan Alfarra</Card.Title>
                      <Card.Text id="job"    style={{color:"#092953"}}>Full Stack Web developer</Card.Text>
                    </Card.Body>
                    <div id="social-media-icons">
                      <a href="https://facebook.com">
                        <FontAwesomeIcon icon={faFacebook}/>
                      </a>
                      <a href="https://www.linkedin.com/in/yazan-alfarra/">
                        <FontAwesomeIcon icon={faLinkedinIn}/>
                      </a>
                      <a href="https://github.com/yazanismail1">
                        <FontAwesomeIcon icon={faGithub}/>
                      </a>
                    </div>
                  </div>
                </Card>
              </Col>
              <Col>
                <Card style={{ width: "18rem", marginLeft:"50px"  }} id="card">
                  <div id="content">
                    <Card.Img
                      variant="top"
                      id="imageBx"
                      src={require("../images/bashar.jpg")}
                    />
                    <Card.Body id="contentBx">
                      <Card.Title id="name" style={{color:"#004aac"}}>Bashar Nobeh</Card.Title>
                      <Card.Text id="job"    style={{color:"#092953"}}>Full Stack Web developer</Card.Text>
                    </Card.Body>
                    <div id="social-media-icons">
                      <a href="https://facebook.com">
                        <FontAwesomeIcon icon={faFacebook}/>
                      </a>
                      <a href="https://linkedin.com">
                        <FontAwesomeIcon icon={faLinkedinIn}/>
                      </a>
                      <a href="https://github.com">
                        <FontAwesomeIcon icon={faGithub}/>
                      </a>
                    </div>
                  </div>
                </Card>
              </Col>
              <Col>
                <Card style={{ width: "18rem", marginLeft:"50px"  }} id="card">
                  <div id="content">
                    <Card.Img
                      variant="top"
                      id="imageBx"
                      src={require("../images/ihab.jpg")}
                    />
                    <Card.Body id="contentBx">
                      <Card.Title id="name" style={{color:"#004aac"}}>Ihab Abbas</Card.Title>
                      <Card.Text id="job"    style={{color:"#092953"}}>Full Stack Web developer</Card.Text>
                    </Card.Body>
                    <div id="social-media-icons">
                      <a href="https://facebook.com">
                        <FontAwesomeIcon icon={faFacebook}/>
                      </a>
                      <a href="https://www.linkedin.com/in/ihab-abbas-935a63184/">
                        <FontAwesomeIcon icon={faLinkedinIn}/>
                      </a>
                      <a href="https://github.com/ihababbas">
                        <FontAwesomeIcon icon={faGithub}/>
                      </a>
                    </div>
                  </div>
                </Card>
              </Col>
              <Col>
                <Card style={{ width: "18rem", marginLeft:"50px"  }} id="card">
                  <div id="content">
                    <Card.Img
                      variant="top"
                      id="imageBx"
                      src={require("../images/ibraheem.jpg")}
                    />
                    <Card.Body id="contentBx">
                      <Card.Title id="name" style={{color:"#004aac"}}>Ibrahim Almanaseer</Card.Title>
                      <Card.Text id="job1" style={{textAlign:"center", color:"#092953"}}>Full Stack Web developer</Card.Text>
                    </Card.Body>
                    <div id="social-media-icons">
                      <a href="https://facebook.com">
                        <FontAwesomeIcon icon={faFacebook}/>
                      </a>
                      <a href="https://www.linkedin.com/in/ibrahim-almanaseer-791624b1">
                        <FontAwesomeIcon icon={faLinkedinIn}/>
                      </a>
                      <a href="https://github.com/Ibrahimnalmanaseer">
                        <FontAwesomeIcon icon={faGithub}/>
                      </a>
                    </div>
                  </div>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default OurTeam;

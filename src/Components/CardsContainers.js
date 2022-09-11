import React from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../Styles/Cards.css";
import FarmInformation from "./FarmInformation";

class CardsContainers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
    };
  }

  componentDidMount = () => {
    axios
      .get(`http://localhost:3001/`)
      .then((result) => {
        this.setState({
          cards: result.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };


  render() {
    return (
      <div>
        <br></br>
        {this.state.cards.length ? (
            <Container id="bodyCard">
              <Row xs={1} sm={2} md={3} lg={4} className="g-4">
          
            {this.state.cards.map((item) => {
              return (
                <Col>
                <div id="wrapper">
                  <Card style={{ width: "18rem",  }} id="card" key={item}>
                    <Card.Img variant="top" src={item.imgURL} id="cardImg"  />
                    <Card.Body id="info" style={{ margin: "-10px 0px",  }}>
                      <Card.Title id="cardTitle">{item.farmName}</Card.Title>
                      <Card.Text id="cardText">{item.location}</Card.Text>
                      {/* <Card.Text id="cardText">{item.description}</Card.Text> */}
                      <Button variant="outline-secondary" id="btn1" onClick={() => this.farm(item)}> More Detail </Button>
                      <Button variant="outline-danger" id="btn" onClick={""}  > ♥️ </Button>
                      {/* <FarmInformation 
                      itemData = {this.item}
                      /> */}
                    </Card.Body>
                  </Card>
                </div>
                </Col>
              );
            })}
            </Row>
            </Container>
          
        ) : (
          <div>
            <h3>No Farms Found 🏚️ </h3>
            <h3>Try again </h3>
          </div>
        )}
      </div>
    );
  }
}


export default CardsContainers;

import React from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./src/Styles/cards.css";

class Cards extends React.Component {
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
        {this.state.cards.length ? (
            <Container id="bodyCard">
          
            {this.state.cards.map((item) => {
              return (
                
                <div id="wrapper">
                  <Card style={{ width: "18rem" }} id="card">
                    <Card.Img variant="top" src={item.imgURL} id="cardImg" />
                    <Card.Body id="info">
                      <Card.Title id="cardTitle">{item.farmName}</Card.Title>
                      <Card.Text id="cardText">{item.location}</Card.Text>
                      <Card.Text id="cardText">{item.description}</Card.Text>
                      <Button variant="outline-danger" id="btn" onClick={this.addnewfav(item._id)}  > ♥️ </Button>
                      <Button variant="outline-info" id="btn"> More Detail </Button>
                    </Card.Body>
                  </Card>
                </div>
                
              );
            })}
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

export default Cards;

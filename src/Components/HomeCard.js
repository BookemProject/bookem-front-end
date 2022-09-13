import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Card from 'react-bootstrap/Card';
import '../Styles/Figure.css'




class HomeCard extends React.Component {
  render() {
    return (
      <div id="secCardSec">
        <Card
          id="secCard"
          style={{
            width: "100%",
            height: "100vh",
            border: "none",
            borderBottom: "1px solid gray",
            borderRadius: "0",
          }}
        >
          <Card.Img
            id="secCardImg"
            style={{
              width: "45%",
              height: "auto",
              marginLeft: "90px",
              borderRadius: "20px",
            }}
            variant="top"
            src={require("../images/familypic.png")}
          />
          <Card.Body>
            <div id="secCardTitle">
              <h1 style={{ textAlign: "left", paddingTop: "50px" }}>
                Who Are We!
              </h1>
            </div>
            <hr />
            <Card.Text id="secCardText">
              <p style={{ textAlign: "justify", paddingRight: "75px" }}>
              Family and friends are the most important thing we have in life, using Bokem helps you plan a great time with your extended family and friends. Don't miss your chance and join us.
              </p>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
export default HomeCard;
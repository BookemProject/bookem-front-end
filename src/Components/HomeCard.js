import React from "react";
import "../Styles/HomeCard.css";
import Card from "react-bootstrap/Card";

class HomeCard extends React.Component {
  render() {
    return (
      <>
        <div id="cards">
          <h1 id="hh1">Check out these beautiful farms!</h1>
          <div id="cards_container">
            <div id="cards_wrapper">
            <li id='cards_item'>
              <ul id="cards_items">
                <Card style={{ width: "18rem" }} id='cards_item_pic-wrap'>
                  <Card.Img variant="top" src={require("../images/farm1.jpeg")} id='cards_item_img'/>
                  <Card.Body id='cards_item_info'>
                    <Card.Title>Amman</Card.Title>
                    <Card.Text>
                      Wadi Alnaheel, beautiful farms, Explore it.
                    </Card.Text>
                  </Card.Body>
                </Card>
              
                <Card style={{ width: "18rem" }} id="cards_item_pic-wrap">
                  <Card.Img variant="top" src={require("../images/farm2.jpg")} id='cards_item_img'/>
                  <Card.Body id='cards_item_info'>
                    <Card.Title id='cards_text'>Amman</Card.Title>
                    <Card.Text id='cards_text'>
                      jarat Alwadi, Dabooq, beautiful farms, Explore it.
                    </Card.Text>
                  </Card.Body>
                </Card>
             
                <Card style={{ width: "18rem" }} id="cards_item_pic-wrap">
                  <Card.Img variant="top" src={require("../images/farm3.jpg")} id='cards_item_img'/>
                  <Card.Body id='cards_item_info'>
                    <Card.Title id='cards_text'>Irbid</Card.Title>
                    <Card.Text id='cards_text'>
                      Sun Flower, beautiful farms, Explore it.
                    </Card.Text>
                  </Card.Body>
                </Card>
              
                <Card style={{ width: "18rem" }} id="cards_item_pic-wrap">
                  <Card.Img variant="top" src={require("../images/farm4.jpg")} id='cards_item_img'/>
                  <Card.Body id='cards_item_info'>
                    <Card.Title id='cards_text'>Al-Salt</Card.Title>
                    <Card.Text id='cards_text'>
                      Sun and Moon, beautiful farms, Explore it.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </ul>
              </li>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default HomeCard;

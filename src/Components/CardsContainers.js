import React from 'react';
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../Styles/Cards.css";
import Filter from './Filter';
import { withAuth0 } from '@auth0/auth0-react';
import swal from 'sweetalert';
import '../Styles/Filter.css';
import { Link } from "react-router-dom";
// import FarmInformation from "./FarmInformation";

class CardsContainers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      location: "",
      color:'white',
      
      textcolor:"white"
    };
    this.ChangeColor = this.ChangeColor.bind(this);
  }

  ChangeColor(){
    if(this.state.Buttontext === '♥️'){
      this.setState({
        color:'red',
        Buttontext:"Unlike",
        textcolor:"black",
      })
    }else {
      this.setState({
        color:'white',
        Buttontext:"♥️",
        textcolor:"white",
      })
    }
    
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
  }

  handleSelect = (eventKey) => {
    if(eventKey === "All"){
      this.componentDidMount();
    } else {
      axios
      .get(`http://localhost:3001/filterFarm?location=${eventKey}`)
      .then((result) => {
        this.setState({
          cards: result.data,
          location: eventKey,
        });
        console.log(this.state.cards)
      })
      .catch((err) => {
        console.log(err);
      });
    }
  }

  updatelikes = (item) => {
    let obj = {
      farmName: item.farmName,
      imgURL: item.imgURL,
      location: item.location,
      price: item.price,
      description: item.description,
      wifi: item.wifi,
      pool: item.pool,
      parking: item.parking,
      bedrooms: item.bedrooms,
      owner: item.owner,
      available: null,
      favoriteEmails:[],
      likes:item.likes,
      }
      axios
      .put(`http://localhost:3001/updateLikes/${item._id}`,obj)
      .then(
        swal({
          title: "succeed ! ",
          text: `${item.farmName} has been added to your favorites`,
          icon: "success",
          button: "OK!",
        })
      )
  }
  
  render() {
    const { user } = this.props.auth0
    return (
      <div>
      <Filter handleSelect={this.handleSelect}/>
        {this.state.cards.length ? (
            <Container id="bodyCard">
              <Row xs={1} sm={2} md={3} lg={4} >
            {this.state.cards.map((item) => {
              return (
                <Col>
                <div id="wrapper">
                  <Card style={{ width: "18rem" }} id="card" key={item._id}>
                    <Card.Img variant="top" src={item.imgURL} id="cardImg"  />
                    <Card.Body id="info" style={{ margin: "-10px 0px" }}>
                      <Card.Title id="cardTitle">{item.farmName}</Card.Title>
                      <Card.Text id="cardText">{item.location}</Card.Text>
                      
                      <Button variant="outline-secondary" id="ButtonDesign" onClick={() => {this.props.passItem(item)}}><Link id="btninner" style={{ textDecoration: 'none', color:"white"}} to="/farminfo">More Details</Link></Button>
                      <Button variant="outline-danger" id="btn" onClick={() => {
                        if(item.likes.includes(user.email)){
                          swal({
                                title: " Farm Already Added ",
                                text: `${item.farmName} is already added to your favorites`,
                                icon: "error",
                                button: "OK!",
                            })
                        } else {
                        item.likes.push(user.email);
                        this.updatelikes(item)}
                        }}>
                        ♥️</Button>
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
            <h3 id="h3NoFarmsFound">No Farms Found At The Desired Location 🏚️</h3>
          </div>
        )}
      </div>
    );
  }
}

export default withAuth0(CardsContainers);

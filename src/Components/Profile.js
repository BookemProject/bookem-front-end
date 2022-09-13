import React from 'react';
import { Card, Col, Container,Row} from 'react-bootstrap';
import { withAuth0 } from '@auth0/auth0-react';
import '../Styles/Profile.css';
import axios from "axios";
import swal from 'sweetalert';
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "../Styles/Cards.css";


class Profile extends React.Component {
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
    const { user } = this.props.auth0;
    axios
      .get(`https://bookem-server.herokuapp.com/getfav?email=${user.email}`)
      .then((result) => {
        this.setState({
          cards: result.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  removeFromFav = (item) => {
    const { user } = this.props.auth0;
    const index = item.likes.indexOf(user.email);
    if (index > -1) { 
      item.likes.splice(index, 1); 
    }
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
      .put(`https://bookem-server.herokuapp.com/removefav/${item._id}`,obj)
      .then(
        swal({
          title: "succeed ! ",
          text: `${item.farmName} has been removed from your favorites`,
          icon: "success",
          button: "OK!",
        }),
        this.componentDidMount(),
        this.componentDidMount()
      )
  }

  render() {
    const { user } = this.props.auth0;
    return (
      <>
      <>
    <div className="gradient-custom-2">
      <Container className="py-5 h-100">
        <Row className="justify-content-center align-items-center h-100">
          <Col lg="9" xl="7">
            <Card>
              <div id="card-header" className="rounded-top text-white d-flex flex-row" style={{ height: '200px' }}>
                <div className="ms-4 mt-5 d-flex flex-column" style={{ width: '150px' }}>
                  <Card.Img id="userImage" src={user.picture}
                    alt="Generic placeholder image" className="mt-4 mb-2 img-thumbnail" fluid style={{ width: '150px', zIndex: '1' }} />
                </div>
                <div className="ms-3" style={{ marginTop: '130px' }}>
                  <Card.Title id="userDetails" tag="h5">{user.nickname}</Card.Title>
                  <Card.Text id="userDetails">{user.email}</Card.Text>
                </div>
              </div>
              <div className="p-4 text-black" style={{ backgroundColor: '#f8f9fa' }}>
                <div className="d-flex justify-content-end text-center py-1">
                  <div>
                    <Card.Text className="mb-1 h5"></Card.Text>
                    <Card.Text className="small text-muted mb-0"></Card.Text>
                  </div>
                  <div className="px-3">
                    <Card.Text className="mb-1 h5"></Card.Text>
                    <Card.Text className="small text-muted mb-0"></Card.Text>
                  </div>
                  <div >
                    <Card.Text className="mb-1 h5"></Card.Text>
                    <Card.Text className="small text-muted mb-0"></Card.Text>
                  </div>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
    <h3 style={{color:"#004aac"}}>My Favorites</h3>
    </>
    <div>
    
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
                      <Button variant="outline-danger" id="btn" onClick={() => {this.removeFromFav(item)}}>
                        Remove</Button>
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
            <h3 style={{color:"#004aac"}}>No Farms Found As Favorites 😥</h3>
          </div>
        )}
      </div>
    </>
  );
}
};

export default withAuth0(Profile);

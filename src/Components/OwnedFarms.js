import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import Card from 'react-bootstrap/Card';
import '../Styles/OwnedFarms.css';
import Button from 'react-bootstrap/Button';





class OwnedFarms extends React.Component{
constructor(props){
  super(props);
  this.state = {
    OwnedFarms:this.props.userFarms,
    show:false,

  }
    

  
}

// Mount Component 









render(){
  return (
    <div>
    {this.props.userFarms.length ? (
        <Container id="bodyCard">
      
        {this.props.userFarms.map((item) => {
          return (
            
            <div id="wrapper">
              <Card style={{ width: "18rem" }} id="card">
                
                <Card.Img variant="top" src={item.imgURL} id="cardImg" />
                <Card.Body id="info">
                  <Card.Title id="cardTitle">{item.farmName}</Card.Title>
                  
                  <Card.Text id="cardText">{item.location}</Card.Text>
                  <hr/>
                  <Card.Text id="cardText">{item.description}</Card.Text>
                  
                  
                  <Button variant="outline-info" id="btn" onClick={this.test}> Edit</Button>
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







  )
}




}




export default OwnedFarms;

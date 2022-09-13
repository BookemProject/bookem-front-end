import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import Card from 'react-bootstrap/Card';
import '../Styles/OwnedFarms.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
import swal from 'sweetalert';
import { IoMdCreate } from "react-icons/io";






class OwnedFarms extends React.Component{
constructor(props){
  super(props);
  this.state = {
    OwnedFarms:this.props.userFarms,
    showModel:false,
    showModelComponent:false,
    Wifi:true,
    Pool:true,
    Parking:false,
    
  }
    

  
}




handleChangeWifi = (e) => {
  if(this.state.Wifi === true){
     this.setState({
         Wifi:false 
     })
  }else{
     this.setState({
         Wifi:true 
     })
  }   
   }
   handleChangePool =(e)=> {
     if(this.state.Pool === true){
         this.setState({
             Pool:false 
         })
      }else{
         this.setState({
             Pool:true 
         })
      }
   }
   handleChangeParking =(e)=> {
    
     if(this.state.Parking === true){    
         this.setState({
             Parking:false 
         })
      }else{
         this.setState({
             Parking:true 
         })
      }   
   }

// Mount Component 

handleModal = (farm)=>{
  this.setState({
    show:true,
    showModelComponent:true,
    selectedFarm:farm

    
  })
  console.log(this.state.show)
}


 handleClose = () =>{
  this.setState({
    show:false,
    showModelComponent:false,
    selectedFarm :{},
  })
}


updateFarm = (e) =>{
  e.preventDefault();
  const { user } = this.props.auth0;
  // const  user  = "basharnobeh2001@gmail.com" // user Email



  let Wifi = false;
  let Pool = false;
  let Parking = false;
  // if(e.target.Wifi.value === 'on'){
  //   Wifi = true;
  // }
  // if(e.target.Pool.value === 'on'){
  //   Pool = true;
  // }
  // if(e.target.Parking.value === 'on'){
  //   Parking= true;
  // }  

  let obj = {
   
  farmName: e.target.farmName.value,
  imgURL: e.target.imgURL.value,
  location: e.target.City.value,
  price: e.target.price.value,
  description: e.target.description.value,
  wifi: Wifi,
  pool: Pool,
  parking: Parking,
  bedrooms: e.target.bedrooms.value,
  owner: user.email,
  available: null,
  favoriteEmails:[],
  likes:[],
  
  }
  
  console.log(this.state.selectedFarm._id);
  let id = this.state.selectedFarm._id;
  console.log(id)
  axios
  .put(`https://bookem-server.herokuapp.com/updateFarm/${id}`,obj)
  .then(result => {
  this.setState({
    farms : result.data
  
    
  })


  
  this.handleClose();
  this.props.mount();
  swal({
    title: "Updated ! ",
    buttonColor: '#212529',
    icon: "success",
    button: "Continue",
  });
  
  
  
  }).catch(err=>{
    console.log(err);
  })




}


deleteFarm = (id)=>{

  
  this.props.deleteFarm(id)
  
  
  

  this.handleClose();
  



}







render(){
  return (
    <div>
    <h3 style={{color:"#004aac"}}>My Belongings</h3>
    <br></br>
    {this.props.userFarms.length ? (
        <Container id="bodyCard">
          <Row xs={1} sm={2} md={3} lg={4} className="g-4">
      
        {this.props.userFarms.map((item) => {
          return (
            <Col>
            <div id="wrapper">
              <Card style={{ width: "18rem",  }} id="card" key={item}>
                <Card.Img variant="top" src={item.imgURL} id="cardImg"  />
                <Card.Body id="info" style={{ margin: "-10px 0px",  }}>
                  <Card.Title id="cardTitle">{item.farmName}</Card.Title>
                  <Card.Text id="cardText"> {item.price} JD's a day</Card.Text>
                  <Card.Text id="cardText">{item.location}</Card.Text>
                  {/* <Card.Text id="cardText">{item.description}</Card.Text> */}
                  <Button variant="outline-secondary" id="ButtonDesign" className="EditButton" onClick={() => this.handleModal(item)}>  <IoMdCreate/>  Edit</Button>

             
                  
               
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
        <h3 style={{color:"#004aac"}}>No Farms Found 🏚️</h3>
      </div>
    )}

{this.state.show &&  
                  
                  
                  
                  
                  
                  <Modal show={this.state.show} onHide={this.handleClose}>
        
        <Modal.Body id ="ModalBody" style = {{width:"fit-content" }}>



        <Form id ="CardForm2"  onSubmit={this.updateFarm}>
      <fieldset id = "GridItems2">
        <Form.Group className="mb-3">
          <Form.Label id = "textInFrom2"htmlFor="TextInput">Farm Name</Form.Label>
          <Form.Control id="FormBox" placeholder="Name" name = "farmName" defaultValue={this.state.selectedFarm.farmName} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label id = "textInFrom2" htmlFor="TextInput">Image URL</Form.Label>
          <Form.Control id="FormBox" placeholder="Insert Image url" name = "imgURL" defaultValue={this.state.selectedFarm.imgURL}/>
        </Form.Group>
       
        <Form.Group className="mb-3">
          <Form.Label id = "textInFrom2" htmlFor="TextInput">Price</Form.Label>
          <Form.Control id="FormBox" placeholder="In JD'S" name = "price" defaultValue={this.state.selectedFarm.price}/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label id = "textInFrom2" htmlFor="TextInput">Description</Form.Label>
          <Form.Control id="FormBox" placeholder="Tell us more " name = "description"  defaultValue={this.state.selectedFarm.description}/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label id = "textInFrom2" htmlFor="TextInput">Bedrooms</Form.Label>
          <Form.Control id="FormBox" placeholder="Number" name = "bedrooms"  defaultValue={this.state.selectedFarm.bedrooms}/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label id = "textInFrom2" htmlFor="Select">Select Menu</Form.Label>
          <Form.Select id="FormBox" name = "City" defaultValue={this.state.selectedFarm.location}>
            <option value = "Amman" id="options">Amman</option>
            <option value = "Zarqa" id="options">Zarqa</option>
            <option value = "Irbid" id="options">Irbid</option>
            <option value = "Jerrash" id="options">Jerrash</option>
            <option value = "Tafilah" id="options">Tafila</option>
            <option value = "Karak" id="options">Karak</option>
            <option value = "Ajloun" id="options">Ajloun</option>
            <option value = "Aqaba" id="options">Aqaba</option>
            <option value = "Ma'an" id="options">Ma'an</option>
            <option value = "Madaba" id="options">Madaba</option>
            <option value = "Mafraq" id="options">Mafraq</option>
            <option value = "Balqa" id="options">Balqa</option>
          </Form.Select>
        </Form.Group >
        
        
      </fieldset>
     
      <Button variant="outline-secondary" id="ButtonDesign"  type="submit" >Apply Your new Updates</Button>
    </Form>
   
      <Button variant="outline-secondary" id="ButtonDesignDelete"   onClick = { ()=> this.deleteFarm(this.state.selectedFarm._id)  }>Delete This Farm</Button>




        </Modal.Body>
        
      </Modal>
  }
  </div>

  







  )
}




}




export default withAuth0(OwnedFarms);

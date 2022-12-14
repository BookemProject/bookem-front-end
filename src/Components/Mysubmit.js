import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import '../Styles/Mysubmit.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import OwnedFarms from './OwnedFarms';
import { withAuth0 } from '@auth0/auth0-react';
import swal from 'sweetalert';




class Mysubmit extends React.Component{
constructor(props){
  super(props);
  this.state = {
Wifi : false,
Pool : false,
Parking : false,
farms:[],
currentFarm : "",
UploadedPicture:"https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"



  }
}
componentDidMount = async () =>{
  try {
    const { user } = this.props.auth0;         
     const data =  await axios.get(`https://bookem-server.herokuapp.com/OwnedFarms?email=${user.email}`)     

          
           this.setState({
            farms:data.data
           })            
          
  }catch {
console.log("error")

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



AddNewFarm = (e) =>{
    e.preventDefault();
    const { user } = this.props.auth0
    const obj = {
        farmName: e.target.farmName.value,
        imgURL: e.target.imgURL.value,
        location: e.target.City.value,
        price: e.target.price.value,
        description: e.target.description.value,
        wifi: this.state.Wifi,
        pool: this.state.Pool,
        parking: this.state.Parking,
        bedrooms: e.target.bedrooms.value,
        owner: user.email,
        available: true,
        favoriteEmails: [],
        likes:[],
    }

    
    
    axios
    .post(`https://bookem-server.herokuapp.com/addFarm`, obj)
    .then(result =>{
      this.setState({
        farms:result.data
      })
      
      swal({
        title: "succeed ! ",
        text: "A New Farm Has Been Added To Your Collection",
        icon: "success",
        button: "Continue",
      });
     
     
    })
    .catch(err=>{
      console.log(err);
    })

    

  }

  deleteFarm  = (id)=>{

    // const email ="basharnobeh2001@gmail.com"
    const  user  = this.props.auth0
    
    axios
    .delete(`https://bookem-server.herokuapp.com/removeFarm/${id}?owner=${user.email}`) //http://localhost:3001/deleteBook?id=${id}
    .then(result =>{
      
      this.setState({
        farms : result.data,
       
      })
      this.componentDidMount();
      swal({
        title: "succeed ! ",
        text: "The Farm Was Deleted successfully",
        icon: "success",
        button: "Continue",
      });
    })
    .catch(err=>{
      console.log(err);
    })
    
    
    
    
    }

// not ready on change image src
    pictureHandler = (e) =>{
if(/\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(e.target.value)){
  this.setState({
    UploadedPicture:e.target.value,
  })
}else {
  this.setState({
    UploadedPicture:"https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
  })
}
    
    
     



    }
    

  










render(){
  return (
    <div>
    <div id = "mainDivsubmit" className="container">
<Card id ="myCardsubmit" style={{ width: 'auto' , height:"auto" }}>
      <Card.Img className = "img-fluid"id="CardImgsubmit" style={{ width: '450px' , height:"455px", }} variant="top" src={this.state.UploadedPicture} />
      </Card>
     <div id="formDiv">
     
    <Form id ="CardForm" onSubmit={this.AddNewFarm}>
      <fieldset id = "GridItems">
        <Form.Group className="mb-3">
          <Form.Label id = "textInFrom"htmlFor="TextInput">Farm Name</Form.Label>
          <Form.Control id="farmName" placeholder="Name" name = "farmName"/>
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label id = "textInFrom" htmlFor="TextInput" >Image URL</Form.Label>
          <Form.Control id="imgURL" placeholder="Insert Image url" name = "imgURL" onChange={this.pictureHandler}  />
        </Form.Group>
       
        <Form.Group className="mb-3">
          <Form.Label id = "textInFrom" htmlFor="TextInput">Price</Form.Label>
          <Form.Control id="price" placeholder="In JD'S" name = "price" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label id = "textInFrom" htmlFor="TextInput">Description</Form.Label>
          <Form.Control id="description" placeholder="Tell us more " name = "description"  />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label id = "textInFrom" htmlFor="TextInput">Bedrooms</Form.Label>
          <Form.Control id="bedrooms" placeholder="Number" name = "bedrooms"  />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label id = "textInFrom" htmlFor="Select">Select Menu</Form.Label>
          <Form.Select id="Select" name = "City">
            <option value = "Amman" id="options">Amman</option>
            <option value = "Zarqa" id="options">Zarqa</option>
            <option value = "Irbid" id="options">Irbid</option>
            <option value = "Jerash" id="options">Jerash</option>
            <option value = "Tafela" id="options">Tafela</option>
            <option value = "Karak" id="options">Karak</option>
            <option value = "Ajloun" id="options">Ajloun</option>
            <option value = "Aqaba" id="options">Aqaba</option>
            <option value = "Ma'an" id="options">Ma'an</option>
            <option value = "Madaba" id="options">Madaba</option>
            <option value = "Mafraq" id="options">Mafraq</option>
            <option value = "Balqa" id="options">Balqa</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" name = "checklist">
          <Form.Check
            type="checkbox"
            id="Wifi"
            label="Wifi"
            name = "Wifi"
            onClick={this.handleChangeWifi}
          />
           <Form.Check
            type="checkbox"
            id="Pool"
            label="Pool"
            name = "Pool"
            onClick={this.handleChangePool}
          />
           <Form.Check
            type="checkbox"
            id="Parking"
            label="Parking"
            name = "Parking"
            onClick={this.handleChangeParking}
          />
       
         
        </Form.Group>
        
      </fieldset>
     
      <Button variant="outline-secondary" id = "myButton" type="submit">Submit  </Button>
    </Form>


     </div>


    
    
    </div>

    <OwnedFarms userFarms = {this.state.farms} deleteFarm = {this.deleteFarm} updateFarm = {this.updateFarm} mount = {this.componentDidMount}/>

    </div>



  )
}




}




export default withAuth0(Mysubmit);

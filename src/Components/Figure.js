import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Card from 'react-bootstrap/Card';
import './Figure.css'




class Figure extends React.Component{
constructor(props){
  super(props);
  this.setState({

  })
}


render(){
  return (

<div id="mainDiv">
<Card id ="myCard" style={{ width: 'auto' , height:"auto" }}>
      <Card.Img id="CardImg" style={{ width: '400px' , height:"auto", }} variant="top" src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" />
      <Card.Body>
        <Card.Title id = "CardTitle"> <strong>About Bookem</strong> </Card.Title>
        <hr/>
      <Card.Text id = "CardText">
          text test text test text test text test text test text test text test text test text test text test text test 
          text test text test text test text test text test text test text test text test text test text test text test 
          text test text test text test text test text test text test text test text test text test text test text test 
          text test text test text test text test text test text test text test text test text test text test text test 
        </Card.Text>
        
       
      </Card.Body>
    </Card>


    
    
</div>





  )
}




}




export default Figure;

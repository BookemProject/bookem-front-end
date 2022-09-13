import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Card from 'react-bootstrap/Card';
import '../Styles/Figure.css'




class Figure extends React.Component{
render(){
  return (

<div id="AboutUs">
<Card id ="myCard" style={{ width: "100%" , height:"100vh", border:"none", borderBottom: "1px solid gray", borderRadius: "0"  }}>
      <Card.Img id="CardImg" style={{ width: '40%' , height:"auto", marginLeft:"90px", borderRadius:"20px" }} variant="top" src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" />
      <Card.Body>
        <div id = "CardTitle" ><h1 style={{textAlign:"left", paddingLeft: "40px"}}>Who Are We!</h1></div>
        <hr/>
      <Card.Text id = "CardText">
      <p style={{textAlign:"justify",paddingRight:"75px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed tellus ac dui ultrices rutrum. Nunc eget ligula vel tortor eleifend egestas. Aenean suscipit elit risus. Ut eget nunc quam. Sed eu nunc et dui condimentum dignissim nec quis metus. Donec nec lobortis eros. Sed pellentesque eu justo a pharetra. Pellentesque quis rutrum urna. Nulla lobortis ante ut urna hendrerit viverra. In porta, diam ut sagittis fringilla, ipsum purus rutrum arcu, vitae aliquam diam enim vel velit.</p>
        </Card.Text>
        
       
      </Card.Body>
    </Card>


    
    
</div>





  )
}




}




export default Figure;

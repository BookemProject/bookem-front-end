import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
class FirstSection extends React.Component {
    render() {
      return (
        <Card>
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Card.Text>
          <p>Bookem is a website that gives the user ease of use to search for farms anywhere in jordan, and create a booking service in the website To facilitate communication with Home/Farm owners.</p>
         <h4> Aims and objectives</h4>
         <ul>
       <li>	Improving the quality of trips and travel by allowing people to find a place to travel as comfortable as home and at a lower cost than staying in hotels. </li>
       
       <li>	The first website in Jordan for farm reservations </li></ul>
     <h4>Target Customer</h4>
     <ul>
    <li>
      Everyone interested in traveling and trips</li>
	    <li> Home/Farm owners. </li> </ul>

         
          </Card.Text>
        </Card.Body>
      </Card>
        )
    }
  }
  
  export default FirstSection;
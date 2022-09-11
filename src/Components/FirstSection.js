import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
class FirstSection extends React.Component {
    render() {
      return (
        <Card>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Text>
          <p>It is a site that allows all customers and owners of pre-rented farms to see all the pastures' details, features, and reservations. It also secures credibility between the tenant and the lessor and is always keen to ensure all the paperwork and official transactions needed by both parties, in addition to the existence of cooperation with approved companies to clean houses and others to maintain all facilities The farm used by the client.</p>

         <h2>What distinguishes us is the credibility of our dealings.</h2> 
          </Card.Text>
        </Card.Body>
      </Card>
        )
    }
  }
  
  export default FirstSection;
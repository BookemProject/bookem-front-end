import React from 'react';
import Nav from 'react-bootstrap/Nav';
import '../Styles/Filter.css';

class Filter extends React.Component {
  
    render() {
      return (
        <Nav justify variant="tabs" id="filter-tabs">
        <Nav.Item>
          <Nav.Link  style={{ textDecoration: 'none', color: 'black' }} eventKey="link-1">Ajloun</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link style={{ textDecoration: 'none', color: 'black' }} eventKey="link-2">Amman</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link style={{ textDecoration: 'none', color: 'black' }} eventKey="link-3">Aqaba</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link style={{ textDecoration: 'none', color: 'black' }} eventKey="link-4">Balqa</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link style={{ textDecoration: 'none', color: 'black' }} eventKey="link-5">Irbid</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link style={{ textDecoration: 'none', color: 'black' }} eventKey="link-6">Jerash</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link style={{ textDecoration: 'none', color: 'black' }} eventKey="link-7">Karak</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link style={{ textDecoration: 'none', color: 'black' }} eventKey="link-8">Ma'an</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link style={{ textDecoration: 'none', color: 'black' }} eventKey="link-9">Madaba</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link style={{ textDecoration: 'none', color: 'black' }} eventKey="link-10">Mafraq</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link style={{ textDecoration: 'none', color: 'black' }} eventKey="link-11">Tafilah</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link style={{ textDecoration: 'none', color: 'black' }} eventKey="link-12">Zarqa</Nav.Link>
        </Nav.Item>
      </Nav>
        )
    }
  }
  
  export default Filter;
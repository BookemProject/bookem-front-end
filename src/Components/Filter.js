import React from 'react';
import Nav from 'react-bootstrap/Nav';
// import '../Styles/Header.css';

class Filter extends React.Component {
    render() {
      return (
        <Nav justify variant="tabs">
        <Nav.Item>
          <Nav.Link  style={{ textDecoration: 'none', color: 'black' }} eventKey="link-1">Ajloun</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link style={{ textDecoration: 'none', color: 'black' }} eventKey="link-2">Al Balqa</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link style={{ textDecoration: 'none', color: 'black' }} eventKey="link-3">Amman</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link style={{ textDecoration: 'none', color: 'black' }} eventKey="link-4">Aqaba</Nav.Link>
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
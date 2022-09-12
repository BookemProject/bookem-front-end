import React from 'react';
import Nav from 'react-bootstrap/Nav';
import '../Styles/Filter.css';

class Filter extends React.Component {

    render() {
      return (
        <Nav justify variant="tabs" style={{ display: "flex", flexDirection:"row"}} id="filter-tabs" onSelect={(eventKey) => this.props.handleSelect(eventKey)} defaultActiveKey="All">
        <Nav.Item >
          <Nav.Link  style={{ textDecoration: 'none', color: 'black' }} eventKey="All">All</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link  style={{ textDecoration: 'none', color: 'black' }} eventKey="Ajloun">Ajloun</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link style={{ textDecoration: 'none', color: 'black' }} eventKey="Amman">Amman</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link style={{ textDecoration: 'none', color: 'black' }} eventKey="Aqaba">Aqaba</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link style={{ textDecoration: 'none', color: 'black' }} eventKey="Balqa">Balqa</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link style={{ textDecoration: 'none', color: 'black' }} eventKey="Irbid">Irbid</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link style={{ textDecoration: 'none', color: 'black' }} eventKey="Jerash">Jerash</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link style={{ textDecoration: 'none', color: 'black' }} eventKey="Karak">Karak</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link style={{ textDecoration: 'none', color: 'black' }} eventKey="Ma'an">Ma'an</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link style={{ textDecoration: 'none', color: 'black' }} eventKey="Madaba">Madaba</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link style={{ textDecoration: 'none', color: 'black' }} eventKey="Mafraq">Mafraq</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link style={{ textDecoration: 'none', color: 'black' }} eventKey="Tafilah">Tafilah</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link style={{ textDecoration: 'none', color: 'black' }} eventKey="Zarqa">Zarqa</Nav.Link>
        </Nav.Item>
      </Nav>
        )
    }
  }
  
  export default Filter;
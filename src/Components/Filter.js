import React from 'react';
import Nav from 'react-bootstrap/Nav';
import '../Styles/Filter.css';

class Filter extends React.Component {

    render() {
      return (
        <Nav justify variant="tabs" style={{ display: "flex", flexDirection:"row"}} id="filter-tabs" onSelect={(eventKey) => this.props.handleSelect(eventKey)} defaultActiveKey="All">
        <Nav.Item >
          <Nav.Link  style={{ textDecoration: 'none', color: '#092953' }} eventKey="All">All</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link  style={{ textDecoration: 'none', color: '#092953' }} eventKey="Ajloun">Ajloun</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link style={{ textDecoration: 'none', color: '#092953' }} eventKey="Amman">Amman</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link style={{ textDecoration: 'none', color: '#092953' }} eventKey="Aqaba">Aqaba</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link style={{ textDecoration: 'none', color: '#092953' }} eventKey="Balqa">Balqa</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link style={{ textDecoration: 'none', color: '#092953' }} eventKey="Irbid">Irbid</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link style={{ textDecoration: 'none', color: '#092953' }} eventKey="Jerash">Jerash</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link style={{ textDecoration: 'none', color: '#092953' }} eventKey="Karak">Karak</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link style={{ textDecoration: 'none', color: '#092953' }} eventKey="Ma'an">Ma'an</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link style={{ textDecoration: 'none', color: '#092953' }} eventKey="Madaba">Madaba</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link style={{ textDecoration: 'none', color: '#092953' }} eventKey="Mafraq">Mafraq</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link style={{ textDecoration: 'none', color: '#092953' }} eventKey="Tafilah">Tafilah</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link style={{ textDecoration: 'none', color: '#092953' }} eventKey="Zarqa">Zarqa</Nav.Link>
        </Nav.Item>
      </Nav>
        )
    }
  }
  
  export default Filter;
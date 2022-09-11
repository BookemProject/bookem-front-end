import React from 'react';
import Filter from './Filter';
import CardsContainers from './CardsContainers';

class HomeAfterLogin extends React.Component {
    render() {
      return (
           <div>
           <Filter />
           <CardsContainers />
           </div>
        )
    }
  }
  
  export default HomeAfterLogin;
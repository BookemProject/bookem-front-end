import React from 'react';
import CardsContainers from './CardsContainers';

class HomeAfterLogin extends React.Component {

    render() {
      return (
           <div>
           <CardsContainers passItem={this.props.passItem}/>
           </div>
        )
    }
  }
  
  export default HomeAfterLogin;
import React from 'react';
import Figure from 'react-bootstrap/Figure';
import '../Styles/HeroSection.css';


class HeroSection extends React.Component {
    render() {
      return (
           <div id="hero-container">
            <Figure.Image
                id="hero-img"
                src={require("../images/homeIMG.jpg")}
              />
              <h1 id="hero-h1">BOOKEM AWAITS</h1>
              <p id="hero-p">What are you waiting for?</p>
            
         
           </div>
        )
    }
  }
  
  export default HeroSection;
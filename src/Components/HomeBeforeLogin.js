import React from 'react';
import Figure  from './Figure';
import HeroSection from './HeroSection';
import Services from './Services';

class HomeBeforeLogin extends React.Component {
    render() {
      return (
           <div>
           <HeroSection />
           <Figure />
           <Services/>
           </div>
        )
    }
  }
  
  export default HomeBeforeLogin;
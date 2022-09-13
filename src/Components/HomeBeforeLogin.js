import React from 'react';
import Figure  from './Figure';
import HeroSection from './HeroSection';
// import HomeCard from './HomeCard';
import Services from './Services';

class HomeBeforeLogin extends React.Component {
    render() {
      return (
           <div>
           <HeroSection />
           <Figure />
           <Services/>
           {/* <HomeCard/> */}
           </div>
        )
    }
  }
  
  export default HomeBeforeLogin;
import React from 'react';
import Figure  from './Figure';
import HeroSection from './HeroSection';
import HomeCard from './HomeCard';

class HomeBeforeLogin extends React.Component {
    render() {
      return (
           <div>
           Home Before Login
           <HeroSection />
           <HomeCard/>
           <Figure />
           </div>
        )
    }
  }
  
  export default HomeBeforeLogin;
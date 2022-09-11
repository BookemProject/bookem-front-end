import React from 'react';
import FirstSection from "./FirstSection";
import SacendSection from "./SacendSection";
import ThirdSection from "./ThirdSection";
import FooterAfterLogin from "./FooterAfterLogin";
import 'bootstrap/dist/css/bootstrap.min.css';
class AboutUs extends React.Component {
    render() {
      return (
           <div>
           <FirstSection />
           <SacendSection />
           <ThirdSection />
           </div>
        )
    }
  }
  
  export default AboutUs;
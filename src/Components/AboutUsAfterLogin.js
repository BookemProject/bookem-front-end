import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FirstSection from './FirstSection';
import SacendSection from './SacendSection';
import "../Styles/AboutUs.css";

class AboutUsAfterLogin extends React.Component {
    render() {
      return (
           <>
            <FirstSection />
            <SacendSection />
           </>
        )
    }
  }
  
  export default AboutUsAfterLogin;
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import "../Styles/SacendSection.css";


class SacendSection extends React.Component {
    render() {
      return (
        <>
        <div id="part1">
        <h1 style={{color:"#004aac", paddingBottom:"25px"}}>Our Services</h1>
          <video width="100%" height="500" controls style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
      <source src={require('../videos/Bookem.mp4')} type="video/mp4"/>
     </video>
        </div>
        <div id="part2">
        <h1 style={{color:"#004aac"}}>Bookem By The Numbers</h1>
        <div className="part1">
          <div className='inner'>
          <h1  style={{color:"#004aac"}}>2022</h1>
          <p className="p1"   style={{color:"#092953"}}>Year Founded</p>
          </div>
          <div className='inner'>
          <h1  style={{color:"#004aac"}}>350+</h1>
          <p className="p1"  style={{color:"#092953"}}>Available Farms</p>
          </div>
          <div className='inner'>
          <h1  style={{color:"#004aac"}}>1000+</h1>
          <p className="p1"  style={{color:"#092953"}}>Active Users</p>
          </div>
          <div className='inner'>
          <h1  style={{color:"#004aac"}}>75 JD</h1>
          <p className="p1"  style={{color:"#092953"}}>Book a Farm Starting With</p>
          </div>
          <div className='inner'>
          <h1  style={{color:"#004aac"}}>300+</h1>
          <p className="p1"  style={{color:"#092953"}}>Average Booking Rate Per Month</p>
          </div>
          <div className='inner'>
          <h1  style={{color:"#004aac"}}>12</h1>
          <p className="p1"  style={{color:"#092953"}}>Cities Served</p>
          </div>
        </div>
        <p className="p1"  style={{color:"#092953"}}>
        We're dedicated to our people, guided by our values and powered by our culture. This is the driving force
        behind our success. It's what has taken us from a 5-person startup to a global team of hundreds helping
        people make billions of dollars in sales and others relaxing after a full week.
        </p>
         </div>
         </>
        )
    }
  }
  
  export default SacendSection;
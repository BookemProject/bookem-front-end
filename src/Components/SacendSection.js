import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import "../Styles/SacendSection.css";


class SacendSection extends React.Component {
    render() {
      return (
        <>
        <div id="part1">
        <h1>Our Services</h1>
        <video width="100%" height="500" controls >
      <source src={require('../videos/video-1.mp4')} type="video/mp4"/>
     </video>
        </div>
        <div id="part2">
        <h1>Bookem By The Numbers</h1>
        <div className="part1">
          <div className='inner'>
          <h3>2022</h3>
          <p>Year Founded</p>
          </div>
          <div className='inner'>
          <h3>350+</h3>
          <p>Available Farms</p>
          </div>
          <div className='inner'>
          <h3>1000+</h3>
          <p>Active Users</p>
          </div>
          <div className='inner'>
          <h3>75 JD</h3>
          <p>Book a Farm Starting With</p>
          </div>
          <div className='inner'>
          <h3>300+</h3>
          <p>Average Booking Rate Per Month</p>
          </div>
          <div className='inner'>
          <h3>12</h3>
          <p>Cities Served</p>
          </div>
        </div>
        <p>
        We're dedicated to our people, guided by our values and powered by our culture. This is the driving force
        behind our success. It's what has taken us from a <br></br> 5-person startup to a global team of hundreds helping
        people make billions of dollars in sales and others relaxing after a full week.
        </p>
         </div>
         </>
        )
    }
  }
  
  export default SacendSection;
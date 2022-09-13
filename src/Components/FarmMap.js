import React from "react";
import '../Styles/FarmMap.css';
import {FaWifi,FaBed,FaParking,FaSwimmingPool} from "react-icons/fa";
import { BsWifiOff } from "react-icons/bs";

const LOCATION_KEY='pk.e6f569abb6089f922ac76a14ac4bc5e4';

// render farm map 
class FarmMap extends React.Component{




render(){

return (

<div id="team">
  <div className="container">
    <div id="row">
      <div className="col-md-6">
        <div className="col-md-10 col-md-offset-1">
          <div className="section-title">
            <h2 className="h2">What this place offers</h2>
          </div>
          <p> <FaBed  style={{ fontSize: '50px',fontFamily:'Montserrat',marginRight:15}}/> {this.props.cards.bedrooms} Bedrooms</p>
          {this.props.cards.wifi?<p> <FaWifi style={{ fontSize: '50px',fontFamily:'Montserrat',marginRight:25}}/><span style={{marginLeft:1}}> Wifi</span></p>:<p> <BsWifiOff style={{ fontSize: '50px',fontFamily:'Montserrat',marginRight:25}}/><span style={{marginLeft:1}}> No Wifi</span></p>}
          {this.props.cards.parking?<p> <FaParking style={{ fontSize: '50px',fontFamily:'Montserrat',marginRight:20}}/> Parking</p>:<p> <FaParking style={{ fontSize: '50px',fontFamily:'Montserrat',marginRight:20}}/> No Parking</p>}
          {this.props.cards.pool?<p> <FaSwimmingPool style={{ fontSize: '50px',fontFamily:'Montserrat',marginRight:25}}/> POOL</p>:<p> <FaSwimmingPool style={{ fontSize: '50px',fontFamily:'Montserrat',marginRight:25}}/> NO POOL</p>}
          
        </div>
      </div>
      <div className="col-md-6">
      <div className="section-title">
            <h2 className="h2">Location</h2>
          </div>
        <div className="team-img"><img src={`https://maps.locationiq.com/v3/staticmap?key=${LOCATION_KEY}&center=${this.props.latitude},${this.props.longitude}`}alt='City Map' className='mapimage'  style={{height:300,width:400}}/></div>
      </div>
    </div>
  </div>
</div>


) }}





export default FarmMap;
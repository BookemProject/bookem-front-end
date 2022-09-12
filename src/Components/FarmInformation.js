import React from "react";
import axios from "axios";
import FarmMap from "./FarmMap";
import Payment from "./Payment";
import FarmWeather from "./FarmWeather";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Farminformation.css';


class FarmInformation extends React.Component{

    constructor(props){

        super(props)

        this.state={
       
        city:'amman',
        longitude:'',
        latitude:'',
        startdate:'',
        enddate:'',
        weathercondition:'',
        weatherTempeature:'',
        price:'10',
        show:false,
        cards:this.props.cards,


        };
    
    }
/*
farmName: item.farmName,
imgURL: item.imgURL,
location: item.location,
price: item.price,
description: item.description,
wifi: item.wifi,
pool: item.pool,
parking: item.parking,
bedrooms: item.bedrooms,
owner: item.owner,
available: null,
favoriteEmails:[],
likes:item.likes,
*/

// To get the farm name ==== this.state.cards.farmName --- string
// To get the img URL ==== this.state.cards.imgURL --- string
// To get the Location Name (city name) ==== this.state.cards.location --- string
// To get the price ==== this.state.cards.price --- Number
// To get the description ==== this.state.cards.description --- string
// To get the wifi ==== this.state.cards.wifi --- Boolean
// To get the pool ==== this.state.cards.pool --- Boolean
// To get the parking ==== this.state.cards.parking --- Boolean
// To get the bedrooms ==== this.state.cards.bedrooms --- Number
// To get the owner ==== this.state.cards.owner --- string




// get lan and lon from location API  
componentDidMount=()=>{
        
    axios.get(`http://localhost:3001/map?city=${this.state.city}`).then(res=>{
        
        
        this.setState({
            longitude:res.data.lon,
            latitude:res.data.lat
        })
        
    })
    

}

// update check-in date state  
handleStartDate=async(e)=>{
    const startdate=e.target.value;
    this.setState({
        startdate:startdate
       
    })
    axios.get(`http://localhost:3001/weather?city=${this.state.city}&date=${e.target.value}`)
    .then(result=>{
    
       const weatherCondtion=result.data.condition.text;
       const weatherTempeature=result.data.maxtemp_c+' C';
       console.log(weatherCondtion)
       this.setState({
       weathercondition:weatherCondtion,
       weatherTempeature:weatherTempeature,
       })
          
       
    })
    .catch(err=> {
      console.log(err)
    })

   
    
}
// update checkout date state  
handleEndDate=(e)=>{
  
  
   let  daysAmount= e.target.value.slice(e.target.value.length -2) - this.state.startdate.slice(this.state.startdate.length -2) ;
   let totalCost=this.state.price*daysAmount
   this.setState({

    price:totalCost

   })
}
    
// close payment modal
handleClose=()=>{
    this.setState({
  
      show:false
    })
  }
 
// open payment modal
handleOpen=(e)=>{

    e.preventDefault();
    this.setState({
  
      show:true
    })
  }

render(){

return (
<>
  {/* <h2> Farmname: {this.props.farm.farmName}</h2>
  <img src={this.props.farm.imgURL} >  </img>
  <ul>
  <li>location: {this.props.farm.location}</li>
  <li>price: {this.props.farm.price}</li>
  <li>Wifi: {his.props.farm.wifi}</li>
  <li>Pool:{this.props.farm.pool}</li>
  <li>parking:{this.props.farm.parking}</li>
  <li>bedrooms:{this.props.farm.bedrooms}</li>
  <li>owner:{this.props.farm.owner}</li>
  <li>available: {this.props.farm.owner}</li>
   </ul>    
  <p>{this.props.farm.description} </p> */}
 {/* <h1></h1>
 <img className='farm' alt='farm' src="https://upload.wikimedia.org/wikipedia/commons/d/df/Town_and_Country_fh000023.jpg" />
 <p></p> */}

<section className= 'farmoverview'>  
 <div id="about">
  <div className="container-fluid">
    <div className="row">
      <div className="col-xs-12 col-md-6 about-img"></div>
      <div className="col-xs-12 col-md-3 col-md-offset-1">
        <div className="about-text">
          <div className="section-title">
            <h2 className="h2">Green Garden</h2>
          </div>
          <p>luxury facility that is intended primarily for vacationers and is usually located near special attractions, such as beaches and seashores, scenic or historic areas, ski parks, or spas.</p>
          <br></br>
        </div>
      </div>
    </div>
  </div>
</div>
</section>

<div className='farminfo'>

    <div className="map">
     <FarmMap  latitude={this.state.latitude} longitude={this.state.longitude}  />
    </div>  
</div>


<div id="booking" className="section">
		<div className="section-center">
			<div className="container">
				<div className="row">
					<div className="col-md-7 col-md-push-5">
						<div className="booking-cta">

              <FarmWeather city={this.state.city} weathercondition={this.state.weathercondition} weatherTempeature={this.state.weatherTempeature} startdate={this.state.startdate} />
							
						</div>
					</div>
					<div className="col-md-4 col-md-pull-7">
						<div className="booking-form">
							<form>
								<div className="form-group">
									<span className="form-label">BOOK NOW</span>
									
								</div>
								<div className="row">
									<div className="col-sm-6">
										<div className="form-group">
											<span className="form-label">Check In</span>
											<input className="form-control" type="date" required="" onChange={this.handleStartDate} />
										</div>
									</div>
									<div className="col-sm-6">
										<div className="form-group">
											<span className="form-label">Check out</span>
											<input className="form-control" type="date" required="" onChange={this.handleEndDate}/>
										</div>
									</div>
								</div>
								
								<div className="form-btn">
									<button className="submit-btn" onClick={this.handleOpen} >Check</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>


<Payment show={this.state.show} price={this.state.price} handleClose={this.handleClose} />
</>
)}}



export default FarmInformation;
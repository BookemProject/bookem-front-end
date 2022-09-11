import React from "react";
import axios from "axios";
import FarmMap from "./FarmMap";
import Weather from "./FarmWeather";
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from "react-bootstrap/Form";
const URL_LOCATIONIQ='https://eu1.locationiq.com/v1/search';
const LOCATION_KEY='pk.e6f569abb6089f922ac76a14ac4bc5e4';


class FarmInformation extends React.Component{

    constructor(props){

        super(props)

        this.state={
        // get citynmae from farmcard
        city:'Amman',
        longitude:'',
        latitude:'',
        weather:'',
        startdate:'',
        enddate:''
        


        };
    
    }

    // get lan and lon from location API  
componentDidMount=()=>{
        
    axios.get(`${URL_LOCATIONIQ}?key=${LOCATION_KEY}&q=${this.state.city}&format=json`).then(res=>{
        const locationData=res.data[0];
       
        this.setState({
            longitude:locationData.lon,
            latitude:locationData.lat
        })
        
    })
    

}

handleStartDate=async(e)=>{

    await this.setState({
        startdate:e.target.value
       
    })
    
}

handleEndDate=(e)=>{

    this.setState({
        enddate:e.target.value
       
    })
}
    

 

render(){

return (
<>

<section class= 'farmoverview'>

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
     
</section>


<section class='farmlocation'>
<FarmMap  latitude={this.state.latitude} longitude={this.state.longitude}/>
</section>
<section class='checkinandcheckout'>

<Form onChange={this.handleStartDate}>
    <Form.Label>From:</Form.Label>
    <Form.Control style={{width:200  }} type="date"  name='startdate'></Form.Control>
    </Form>  
    

<Form onChange={this.handleEndDate}>
    <Form.Label>To:</Form.Label>
    <Form.Control style={{width:200  }} type="date"  name='enddate'></Form.Control>
    </Form>  

</section>


<section class='farmweather'>
<Weather cityname={this.state.city} startdate={this.state.startdate} enddate={this.state.enddate}/>
</section>


</>
)}}



export default FarmInformation;
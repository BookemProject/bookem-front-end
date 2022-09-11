import axios from "axios";
import React from "react";
const WEATHER_KEY='f17b33956c554c1b985234920223008'
const URL_WEATHER='https://api.weatherapi.com/v1/forecast.json';
// https://api.weatherapi.com/v1/forecast.json?key=f17b33956c554c1b985234920223008&q=amman&days=1&dt=2022-09-20


class FarmWeather extends React.Component{

  constructor(props){

    super(props)

    this.state={

      weathercondition:'e',
      weatherTempeature:'1'
    }
    
  }

  
  handleWeather=()=>{

    console.log(this.props.startdate)
    axios.get(`${URL_WEATHER}?key=${WEATHER_KEY}&q=${this.props.cityname}&days=1&dt=${this.props.startdate}`)
    .then(result=>{

       const weatherCondiion=result.data.forecast.forecastday[0].day.condition.text;
       const weatherTempeature=result.data.forecast.forecastday[0].day.maxtemp_c+' C'
       this.setState({
        weathercondition:weatherCondiion,
        weatherTempeature:weatherTempeature

       
       })
          
       
    })
    .catch(err=> {
      console.log(err)
    })
}


render(){

return (
<>
{/* Display map image */}

    
    <h1> weather :{this.state.weatherTempeature}</h1>  
    <h1> {this.state.weathercondition}</h1> 
</>



) }}





export default FarmWeather;
import React from "react";
import '../Styles/FarmWeather.css';

// render the Weather widget
class FarmWeather extends React.Component{

render(){

return (

  <div className="container-fluid px-1 px-md-4 py-5 mx-auto">
  <div className="row d-flex justify-content-center px-3">
      <div className="cardweather">
          <h2 className="ml-auto mr-4 mt-3 mb-0">{this.props.city}</h2>
          <p className="ml-auto mr-4 mb-0 med-font">{this.props.weathercondition}</p>
          <h1 className="ml-auto mr-4 large-font">{this.props.weatherTempeature}&#176;</h1>
          <p className="ml-4 mb-4">{this.props.startdate}</p>
      </div>
  </div>
</div>
) 

}}





export default FarmWeather;
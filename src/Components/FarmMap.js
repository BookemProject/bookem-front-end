import React from "react";
import axios from "axios";
const URL_LOCATIONIQ='https://eu1.locationiq.com/v1/search';
const LOCATION_KEY='pk.e6f569abb6089f922ac76a14ac4bc5e4';


class Map extends React.Component{






render(){

return (
<>
{/* Display map image */}

<section class='weather'>
</section> 

<section class ='map'>
<img src={`https://maps.locationiq.com/v3/staticmap?key=${LOCATION_KEY}&center=${this.props.latitude},${this.props.longitude}`}alt='City Map'class= 'mapimage'/>
</section>

</>



) }}





export default Map;
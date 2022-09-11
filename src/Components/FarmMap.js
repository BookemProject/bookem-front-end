import React from "react";
const LOCATION_KEY='pk.e6f569abb6089f922ac76a14ac4bc5e4';


class FarmMap extends React.Component{


render(){

return (
<>
{/* Display map image */}

<section className='weather'>
</section> 

<section className ='map'>
<img src={`https://maps.locationiq.com/v3/staticmap?key=${LOCATION_KEY}&center=${this.props.latitude},${this.props.longitude}`}alt='City Map'class= 'mapimage'/>
</section>

</>



) }}





export default FarmMap;
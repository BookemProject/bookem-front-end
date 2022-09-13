import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";

import "../Styles/AboutUs.css";

class FirstSection extends React.Component {
  render() {
    return (
      <div>
        <div id="PART1">
          <h1 className="heading" style={{color:"#004aac"}}> Who We Are and What We Do </h1>
          <p className="heading p1"   style={{color:"#092953"}}>
            Bookem's mission is to connect both end point together by allowing
            state owners rent their sweet farms and hard working people rent to
            relax at the end of a full week. We focus on being the best commerce
            platform so our customers can focus on what matters most: growing
            their businesses and on the other hand our beloved people relaxed.{" "}
          </p>

          <Card.Img
            className="aboutusimage"
            variant="top"
            src={require("../images/window.png")}
          />
        </div>











        <div className=" partt">
          <h1 className="heading" style={{color:"#004aac"}}>Our Company Values</h1>
          <p className="p1"   style={{color:"#092953"}}>
            These are the core principles upon which Bookem was built, guiding
            what we do and how we do it. Each employee learns them, loves them
            and lives them. Our People benefit from them every time they use our
            Services or get help from our Support team.
          </p>





          <div id="secondPart">



          <div className="column1">
            <h3 className="pargraph"  style={{color:"#004aac"}}>Customers First</h3>
            <p className="pargraph">
              Our company exists to help people earn more or relax during the
              weekends. We make every decision and measure every outcome based
              on how well it serves our people
            </p>
          </div>



          <div className="column1">
            <h3 className="pargraph"  style={{color:"#004aac"}}>Team on a Mission</h3>
            <p className="pargraph"  style={{color:"#092953"}}>
              Bookem is made up of amazing individuals, but it's only through
              teamwork that we achieve greatness. We're committed to helping our
              customers by working together with equal parts humility and
              ambition to assure perfect experience transactions.
            </p>
            </div>



          </div>







        </div>








      </div>
    );
  }
}

export default FirstSection;

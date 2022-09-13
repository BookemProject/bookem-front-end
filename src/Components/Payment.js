import React from "react";
import '../Styles/Payment.css';
import Modal from 'react-bootstrap/Modal';

// render the payment modal
class Payment extends React.Component{

render(){

return (

    <Modal className="payment" show={this.props.show} onHide={this.props.handleClose}>
    <section className="payment-form dark">
      <div className="container">
        <div className="block-heading">
          <h2>Payment</h2>
         
        </div>
        <form className="paymentform">
          <div className="products">
            <h3 className="titlepayment">Checkout</h3>
            <div className="totalpayment">${this.props.price}</div>
          </div>
          <div className="card-details">
            <h3 className="titlepayment">Credit Card Details</h3>
            <div className="row">
              <div className="form-group col-sm-7">
                <label htmlFor="card-holder">Card Holder</label>
                <input id="card-holder" type="text" className="form-control" placeholder="Card Holder" aria-label="Card Holder" aria-describedby="basic-addon1"/>
              </div>
              <div className="form-group col-sm-5">
                <label htmlFor="">Expiration Date</label>
                <div className="input-group expiration-date">
                  <input type="text" className="form-control mm" placeholder="MM" aria-label="MM" aria-describedby="basic-addon1"/>
                  <span className="date-separator">/</span>
                  <input type="text" className="form-control" placeholder="YY" aria-label="YY" aria-describedby="basic-addon1"/>
                </div>
              </div>
              <div className="form-group col-sm-8">
                <label htmlFor="card-number">Card Number</label>
                <input id="card-number" type="text" className="form-control" placeholder="Card Number" aria-label="Card Holder" aria-describedby="basic-addon1"/>
              </div>
              <div className="form-group col-sm-4">
                <label htmlFor="cvc">CVC</label>
                <input id="cvc" type="text" className="form-control" placeholder="CVC" aria-label="Card Holder" aria-describedby="basic-addon1"/>
              </div>
              <div className="form-group col-sm-12">
                <button type="button"  id="ButtonDesign" className="checkbutton" style={{height:45}}  onClick={this.props.handleClose}>Proceed</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
    </Modal>
) 

}}





export default Payment;
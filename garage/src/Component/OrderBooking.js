import React from 'react';

const OrderBooking=()=>{
	                   return(
	                   	      <div className="container-fluid text-left">
	                   	           <header class="text-start">ORDER BOOKING</header>

	                   	           <div className="container-fluid">
	                   	                <div className="row">
	                   	                    <div className="col-md-3">
	                   	                         <label>Booking Date</label>
	                   	                         <input type="date" className="form-control"/>
	                   	                    </div>
	                   	                    <div className="col-md-3">
	                   	                         <label>Booking No</label>
	                   	                         <input type="text" className="form-control"/>
	                   	                    </div>
	                   	                    <div className="col-md-3">
	                   	                         <label>Customer Name</label>
	                   	                         <input type="text" className="form-control"/>
	                   	                    </div>
	                   	                    <div className="col-md-3">
	                   	                         <label>Address</label>
	                   	                         <input type="text" className="form-control"/>
	                   	                    </div>
	                   	                </div>

	                   	                <div className="row">
	                   	                    <div className="col-md-3">
	                   	                         <label>Email</label>
	                   	                         <input type="text" className="form-control"/>
	                   	                    </div>
	                   	                    <div className="col-md-3">
	                   	                         <label>State</label>
	                   	                         <input type="text" className="form-control"/>
	                   	                    </div>
	                   	                    <div className="col-md-3">
	                   	                         <label>City</label>
	                   	                         <input type="text" className="form-control"/>
	                   	                    </div>
	                   	                    <div className="col-md-3">
	                   	                         <label>Zip Code</label>
	                   	                         <input type="text" className="form-control"/>
	                   	                    </div>
	                   	                </div>

	                   	                <div className="row">
	                   	                    <div className="col-md-3">
	                   	                         <label>Mobile No</label>
	                   	                         <input type="text" className="form-control"/>
	                   	                    </div>
	                   	                    <div className="col-md-3">
	                   	                         <label>Pan No</label>
	                   	                         <input type="text" className="form-control"/>
	                   	                    </div>
	                   	                    <div className="col-md-3">
	                   	                         <label>Adhar No</label>
	                   	                         <input type="text" className="form-control"/>
	                   	                    </div>
	                   	                    <div className="col-md-3">
	                   	                         <label>Sales Consultant</label>
	                   	                         <input type="text" className="form-control"/>
	                   	                    </div>
	                   	                </div>

	                   	                <div className="row">
	                   	                    <div className="col-md-3">
	                   	                         <label>Fuel type</label>
	                   	                         <select className="form-control">
	                   	                                 <option>Select Fuel Type</option>
	                   	                                 <option>Petrol</option>
	                   	                                 <option>Diesel</option>
	                   	                         </select>

	                   	                    </div>
	                   	                    <div className="col-md-3">
	                   	                         <label>Model Name</label>
	                   	                         <input type="text" className="form-control"/>
	                   	                    </div>
	                   	                    <div className="col-md-3">
	                   	                         <label>Variant</label>
	                   	                         <input type="text" className="form-control"/>
	                   	                    </div>
	                   	                    <div className="col-md-3">
	                   	                         <label>Color</label>
	                   	                         <input type="text" className="form-control"/>
	                   	                    </div>
	                   	                </div>

	                   	                <div className="row">
	                   	                    <div className="col-md-3">
	                   	                         <label>Mfy Year</label>
	                   	                         <input type="text" className="form-control"/>
	                   	                    </div>
	                   	                    <div className="col-md-3">
	                   	                         <label>Delivery Date</label>
	                   	                         <input type="date" className="form-control"/>
	                   	                    </div>
	                   	                    <div className="col-md-3">
	                   	                         <label>Source Of Booking</label>
	                   	                         <select className="form-control">
	                   	                                 <option>Select Booking Source</option>
	                   	                                 <option>Online</option>
	                   	                                 <option>Walk-Off</option>
	                   	                         </select>
	                   	                         
	                   	                    </div>
	                   	                    <div className="col-md-3">
	                   	                         <label>Booking Amount</label>
	                   	                         <input type="text" className="form-control"/>
	                   	                    </div>
	                   	                </div>



	                   	                <div className="row">
	                   	                    <div className="col-md-3">
	                   	                         <label>Payment Type</label>
	                   	                         <select className="form-control">
	                   	                                 <option>Select Status</option>
	                   	                                 <option>Cash</option>
	                   	                                 <option>Cheque</option>
	                   	                                 <option>Online</option>
	                   	                         </select> 
	      
	             	                    </div>
	                   	                    <div className="col-md-3">
	                   	                         <label>Booking Status</label>
	                   	                         <select className="form-control">
	                   	                                 <option>Select Status</option>
	                   	                                 <option>Pending</option>
	                   	                                 <option>Approve</option>
	                   	                         </select>        
	                   	                    </div>                 
	                   	                </div>

	                   	                <div className="row mt-2">                  
	                   	                    <div className="offset-6 col-md-6 text-end">
	                   	                         <input type="button" className="btn btn-success add" value="Save"/>
	                   	                         <input type="button" className="btn btn-danger add mx-2" value="Exit"/>
	                   	                    </div>             
	                   	                </div>
	                   	           </div>
	                   	      </div>
	                   	      )
}
export default OrderBooking;
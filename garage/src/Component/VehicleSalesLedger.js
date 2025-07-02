import React from 'react';
import {useNavigate} from 'react-router-dom';

const VehicleSalesLedger=()=>{
	                             var Redirect=useNavigate();
	                             function Add_Click()
	                             {
                                      Redirect('/VehicleSaleInvoice');
	                             }
	                          return(
	                          	      <div className="container-fluid">
                                            <header class="text-start">VEHICLE SALES LEDGER</header>

                                            <div className="row mechdetail mb-3">
			                                       <div className="col-lg-8 col-md-12 col-sm-12 col-12 mb-2">
			                                           <input type="text" className="form-control" Placeholder="Type here to search"/>
			                                       </div>
			                                       <div className="col-lg-2 col-md-3 col-sm-3 col-6 mx-col-2">
			                                           <input type="button"  className="btn btn-secondary w-100 fw-bold" value="Search"/>
			                                       </div>
			                                        <div className="col-lg-2 col-md-3 col-sm-3 col-6 ml-col-2 ">
			                                           <input type="button" onClick={Add_Click} className="btn btn-primary w-100 fw-bold" value="Add New"/>
			                                       </div>
                                   			</div>
                                       </div>    
	                          	     )
}

export default VehicleSalesLedger;

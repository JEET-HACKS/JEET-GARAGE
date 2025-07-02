import React from 'react';
import {useNavigate} from 'react-router-dom';


const Appointment=()=>{
	const myStyle={
		marginLeft:'10px'
	}
	var Redirect=useNavigate();

	function Exit_click()
	{
		alert('exit');
		Redirect('');
	}
	               return(<div>
                              <h1>Appointment Master</h1>
                           <div className="container-fluid box">
                              <div className="row">
                                    <div className="col-md-3">
                                          <label>Entry Date</label>
                                          <input type="Date" className="form-control" />
                                    </div>

                                    <div className="col-md-3">
                                          <label>Customer Name</label>
                                          <input type="text" className="form-control" />
                                    </div>

                                     <div className="col-md-3">
                                          <label>Mobile No.</label>
                                          <input type="text" className="form-control" />
                                    </div>

                                    <div className="col-md-3">
                                          <label>Mechanic Name</label>
                                          <input type="text" className="form-control" />
                                    </div>

                                  
                              </div>

                              <div className="row">
                                    <div className="col-md-3">
                                          <label>Service Type</label>
                                          <input type="text" className="form-control" />
                                    </div>
                                    <div className="col-md-3">
                                          <label>Vehicle No.</label>
                                          <input type="text" className="form-control" />
                                    </div>

                                    <div className="col-md-3">
                                          <label>Color</label>
                                          <input type="text" className="form-control" />
                                    </div>

                                    <div className="col-md-3">
                                          <label>Address</label>
                                          <input type="text" className="form-control" />
                                    </div>

                              </div>

                               <div className="row">
                                    <div className="col-md-3">
                                          <label>Status</label>
                                          <select className="form-control">
                                                  <option>Select Status</option>
                                                  <option>Pending</option>
                                                  <option>Scheduled</option>
                                                        
                                          </select>                                          
                                    </div>
                                 

                                   

                              </div>

                              <div className="row d-flex justify-content-end mt-3">
                                  <div className="col-md-3">
                                         <input type="button" value="Save" className="btn btn-success add"/>
                                         <input type="button" style={myStyle} value="Exit" onClick={Exit_click} className="btn btn-danger add"/>
                                  </div>
                                  
                              </div>
                            </div>  
	               	</div>)
}
export default Appointment;
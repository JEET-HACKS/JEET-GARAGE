import React,{useEffect} from 'react';
import axios from 'axios';

const VehicleShowRoomDetails=()=>{
	                  var [Clearvehicle,setClearvehicle]=React.useState([]);
	                  useEffect(()=>{
                                     GetShowRoomDetails();
	                  },[])

	                  function GetShowRoomDetails(){
                        axios.get('http://localhost:5000/VehicleShowRoomDetails')
                        .then((response)=>{
                        	        alert(response.data);
                        	        setClearvehicle(response.data);

                        })
                        .catch((err)=>{
                        	 alert(err);
                        })
	                  }

	                 return(
	                 	    <div className="container-fluid">
	                	        
	                	         <header class="text-start">VEHICLE SHOWROOM DETAILS</header>

	                	        <div className="row mechdetail mb-3">
                                       <div className="col-lg-8 col-md-12 col-sm-12 col-12 mb-2">
                                           <input type="text" className="form-control" Placeholder="Type here to search"/>
                                       </div>
                                       <div className="col-lg-2 col-md-3 col-sm-3 col-6 mx-col-2">
                                            <input type="button"  className="btn btn-secondary w-100 fw-bold" value="Search"/>
                                       </div>
                                       <div className="col-lg-2 col-md-3 col-sm-3 col-6 ml-col-2 ">
                                             <input type="button"  className="btn btn-primary w-100 fw-bold" value="Add New"/>
                                       </div>
                                </div>

                                              <div className="table-responsive">
								                   <table class="table  table-bordered table-striped">
								                      <thead>
								                           <tr>
								                              <th>Vehicle Brand Name</th>
								                              <th>Model Name</th>
								                              <th>Variant</th>
								                              <th>Action</th>
								                           </tr>
								                     </thead>
								                     <tbody>
								                      {
				                	                	Clearvehicle.length>0
				                	                	?
				                	                	Clearvehicle.map((option)=>(
			                                               <tr>
			                                                   <td>{option.VehicleBrandName}</td>
			                                                   <td>{option.ModelName}</td>
			                                                   <td>{option.Variant}</td>
			                                                   <td>
			                                                       <input type="button" className="btn btn-danger fw-bold" value="Delete"  />   
			                                                       <input type="button" className="btn btn-success mx-2 fw-bold"  value="Edit"/>   
			                                                   </td>
			                                               </tr>
				                	                	
				                	                	))
				                	                	:
				                	                	<h1>No records Found</h1>
	                	                               }
								                     </tbody>
								                   </table>
								               </div>      
                                          </div>
	                 	    )
}
export default VehicleShowRoomDetails;
import React, { useEffect } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const ClearVehicle=()=>{
	            var [Clearvehicle,setClearvehicle]=React.useState([]);
                var Redirect=useNavigate();
	            useEffect(()=>{
                               ClearVehicleGrid();
	            },[])

	            function ClearVehicleGrid(){
	            	
	            	axios.get('https://garage-backend-8rs3.onrender.com/getClearVehicleDetails')
	            	.then((response)=>{
                                       setClearvehicle(response.data);                 
	            	})
	            	.catch((err)=>{
                                       alert(err);
	            	})

	            }

	            function Delete_click(id)
	            {
                      axios.delete(`https://garage-backend-8rs3.onrender.com/ClearVehicleDetails/${id}`)
                        .then((response)=>{
                                          
                                           ClearVehicleGrid();
                        })
                        .catch((err)=>{
                                       alert(err);
                        })
	            }

	            function Invoice_click(id)
	            {
	            	localStorage.setItem("status", "add");
                    Redirect('/InvoiceBill/'+id);
                    
                    
	            	
	            }

	                return(<div className="container-fluid">
	                	        
	                	         <header class="text-start">CLEAR VEHICLE FROM GARAGE</header>

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
								                             <th>Clear Date</th>
								                              <th>Customer Name</th>
								                              <th>Vehicle No</th>
								                              <th>Mechanic Name</th>
								                              <th>Action</th>
								                           </tr>
								                     </thead>
								                     <tbody>
								                      {
				                	                	Clearvehicle.length>0
				                	                	?
				                	                	Clearvehicle.map((option)=>(
			                                               <tr>
			                                                   <td>{option.Entry_date}</td>
			                                                   <td>{option.CustomerName}</td>
			                                                   <td>{option.VehicleNo}</td>
			                                                   <td>{option.mechdata.M_Name}</td>
			                                                   <td>
			                                                       <input type="button" className="btn btn-danger fw-bold" value="Delete" onClick={()=>Delete_click(option._id)} />   
			                                                       <input type="button" className="btn btn-success mx-2 fw-bold" onClick={()=>Invoice_click(option._id)} value="Invoice"/>   
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
export default ClearVehicle;
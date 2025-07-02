import React,{useEffect} from 'react';
import { FaCar } from "react-icons/fa";
import { MdHealthAndSafety } from "react-icons/md";
import { FaCogs } from "react-icons/fa";
import { FaTachometerAlt } from "react-icons/fa";
import { WiThermometer } from "react-icons/wi";
import { MdCameraRear } from "react-icons/md";
import { MdLocalParking } from "react-icons/md";
import {useNavigate,useParams} from 'react-router-dom';
import axios from 'axios';
import { WiDaySunny } from 'react-icons/wi';
import { FaRegEye } from 'react-icons/fa';
import { FaUsers } from 'react-icons/fa';

const VehicleFeatures=()=>{
	                            var [GetFeatures,SetFeatures]=React.useState([]);
                               var Redirect=useNavigate();
                               var {id}=useParams();
                               useEffect(()=>{
                                              LoadFeatures();
                               },[])

                               function  LoadFeatures(){
                               	          
                                            axios.get(`http://localhost:5000/GetFeatures/${id}`)
                                            .then((response)=>{
                                                               SetFeatures(response.data);
                                            })
                                            .catch((err)=>{

                                            })
                               }


	                            function Test_Drive_Click()
	                            {
	                            	   
	                            	   Redirect('/TestDrive_View');
	                            }
                           return(
                       <div className="container-fluid">
                           <header class="text-start">VEHICLE FEATURES</header>

                           <div className="row mx-1">
		                           {
		                           	GetFeatures.length>0
		                           	?
		                           	GetFeatures.map((option)=>
		                                          <img src={`/${option.VehicleImport}`} height="400px" className="px-0"></img>            
		                           	)
		                           	:
		                           	<h4>no record found</h4>
		                           }
                           </div>

                           <div className="row mt-3">
	                  	          {
	                  	          	GetFeatures.length>0
	                  	          	?
	                  	          	GetFeatures.map((option)=>
	                  	          	    <>
	                  	          	      <div className="container-fluid">
	                  	          	      <header class="text-start">Sales Price:  {option.SalesPrice}</header>
	                  	          	      </div>
	                  	          	     
	                  	          	       <div className="col-lg-4 col-md-6 mb-3">
	                  	                       <div class="card text-left">
																    <div class="card-body">
																      <h4 class="card-title">  <MdHealthAndSafety className="text-light fs-1 border border-dark rounded-pill  p-2" style={{'background':'linear-gradient(135deg, #2563eb, #38bdf8)'}} />  </h4>
																      <p class="text-justify fw-bold fs-4">{option.AirBags}</p>
																      <p class="text-justify">Airbags are safety devices designed to inflate instantly during a collision, providing a cushion to reduce impact on passengers.</p>
																   </div>
										                 </div>              
	                  	                   </div>

	                  	                   <div className="col-lg-4 col-md-6 mb-3">
								                  	         <div class="card text-left"> 
																		    <div class="card-body">
																		      <h4 class="card-title">  <FaCogs className="text-light fs-1 border border-dark rounded-pill p-2" style={{'background':'linear-gradient(135deg, #2563eb, #38bdf8)'}}/>  </h4>
																		      <p class="text-justify fw-bold fs-4 ">{option.TransmissionType}</p>
																		      <p class="text-justify">Automatic transmission allows a vehicle to shift gears automatically without driver input, making driving easier and smoother.</p>
																		   </div>
																	  </div> 
														 </div>

														 <div className="col-lg-4 col-md-6 mb-3">
								                  	         <div class="card text-left"> 
																		    <div class="card-body">
																		      <h4 class="card-title">  <WiDaySunny className="text-light fs-1 border border-dark rounded-pill p-2" style={{'background':'linear-gradient(135deg, #2563eb, #38bdf8)'}}/>  </h4>
																		      <p class="text-justify fw-bold fs-4 ">{option.SunRoof}</p>
																		      <p class="text-justify">Automatic transmission allows a vehicle to shift gears automatically without driver input, making driving easier and smoother.</p>
																		   </div>
																	  </div> 
														 </div>

														  <div className="col-lg-4 col-md-6 mb-3">
								                  	         <div class="card text-left"> 
																		    <div class="card-body">
																		      <h4 class="card-title">  <FaRegEye className="text-light fs-1 border border-dark rounded-pill p-2" style={{'background':'linear-gradient(135deg, #2563eb, #38bdf8)'}}/>  </h4>
																		      <p class="text-justify fw-bold fs-4 ">{option.SafetyFeatures}</p>
																		      <p class="text-justify">Automatic transmission allows a vehicle to shift gears automatically without driver input, making driving easier and smoother.</p>
																		   </div>
																	  </div> 
														 </div>

														  <div className="col-lg-4 col-md-6 mb-3">
								                  	         <div class="card text-left"> 
																		    <div class="card-body">
																		      <h4 class="card-title">  <FaUsers className="text-light fs-1 border border-dark rounded-pill p-2" style={{'background':'linear-gradient(135deg, #2563eb, #38bdf8)'}}/>  </h4>
																		      <p class="text-justify fw-bold fs-4 ">{option.SeatingCapacity}</p>
																		      <p class="text-justify">Automatic transmission allows a vehicle to shift gears automatically without driver input, making driving easier and smoother.</p>
																		   </div>
																	  </div> 
														 </div>

														  <div className="col-lg-4 col-md-6 mb-3">
								                  	         <div class="card text-left"> 
																		    <div class="card-body">
																		      <h4 class="card-title">  <FaCogs className="text-light fs-1 border border-dark rounded-pill p-2" style={{'background':'linear-gradient(135deg, #2563eb, #38bdf8)'}}/>  </h4>
																		      <p class="text-justify fw-bold fs-4 ">{option.EngineCapacity}</p>
																		      <p class="text-justify">Automatic transmission allows a vehicle to shift gears automatically without driver input, making driving easier and smoother.</p>
																		   </div>
																	  </div> 
														 </div>

														 <div className="col-lg-4 col-md-6 mb-3">
								                  	         <div class="card text-left"> 
																		    <div class="card-body">
																		      <h4 class="card-title">  <FaCogs className="text-light fs-1 border border-dark rounded-pill p-2" style={{'background':'linear-gradient(135deg, #2563eb, #38bdf8)'}}/>  </h4>
																		      <p class="text-justify fw-bold fs-4 ">{option.VehicleColor}</p>
																		      <p class="text-justify">Automatic transmission allows a vehicle to shift gears automatically without driver input, making driving easier and smoother.</p>
																		   </div>
																	  </div> 
														 </div>

														
	                  	                </>


	                  	          	)
	                  	          	:
	                  	          	<h4>No records found</h4>
	                  	          }     
	                  	              
	                  	   

	                  	     

	                  	      {/* <div className="col-lg-4 col-md-6 mb-3">
	                  	          <div class="card text-left">
											    
											    <div class="card-body">
											      <h4 class="card-title">  <FaTachometerAlt className="text-light fs-1 border border-dark rounded-pill p-2" style={{'background':'linear-gradient(135deg, #2563eb, #38bdf8)'}}/>  </h4>
											      <p class="text-justify fw-bold fs-4 ">Cruise Control</p>
											      <p class="text-justify">Intelligent cruise control that adapts to traffic conditions automatically c conditions automatically c conditions automatically</p>
											    
											     
											   </div>
										   </div> 
	                  	                     
	                  	        </div>
	                  	   
	                  	    
	                  	               
	                  	              
	                  	      <div className="col-lg-4 col-md-6 mb-3">
		                  	         <div class="card text-left">    
												    <div class="card-body">
												      <h4 class="card-title">  <MdLocalParking className="text-light fs-1 border border-dark rounded-pill p-2" style={{'background':'linear-gradient(135deg, #2563eb, #38bdf8)'}}/>  </h4>
												      <p class="text-justify fw-bold fs-4 ">Auto Parking</p>
												      <p class="text-justify">Auto Parking is a driver-assist feature that automatically steers the vehicle into a parking spot with minimal input.</p>   
												   </div>
											  </div>               
	                  	      </div>
	                  	        <div className="col-lg-4 col-md-6 mb-3">
	                  	                   <div class="card text-left">
											    
															    <div class="card-body">
																      <h4 class="card-title">  <MdCameraRear className="text-light fs-1 border border-dark rounded-pill p-2" style={{'background':'linear-gradient(135deg, #2563eb, #38bdf8)'}}/>  </h4>
																      <p class="text-justify fw-bold fs-4 ">Rear Camera /Sensors</p>
																      <p class="text-justify">Rear cameras and parking sensors help drivers detect obstacles behind the vehicle while reversing.They enhance safety by providing visual and audio alerts.</p>
															   </div>
										            </div> 
	                  	                     
	                  	        </div>

	                  	              <div className="col-lg-4 col-md-6">
	                  	                   <div class="card text-left">
											    
															    <div class="card-body">
																      <h4 class="card-title">  <WiThermometer className="text-light fs-1 border border-dark rounded-pill p-2" style={{'background':'linear-gradient(135deg, #2563eb, #38bdf8)'}}/>  </h4>
																      <p class="text-justify fw-bold fs-4 ">Auto Climate Control</p>
																      <p class="text-justify">Intelligent cruise control that adapts to traffic conditions automatically traffic conditions automatically traffic conditions automatically</p>															     
															   </div>
										             </div>        
	                  	               </div>*/}
	                  	        </div>
        
	                  	          

	                  	          <div className="row border border-dark py-5 rounded mt-3 mx-1 bg-light mb-3">
	                  	              <h3>Interested In This Vehicle?</h3>
	                  	              <div className="col-md-12">
	                  	                    <p>Contact Our Sales Team to Schedule a Test Drive and learn more about financial options.</p>
	                  	              </div>

	                  	              <div className="col-md-6 d-flex justify-content-md-end justify-content-sm-center justify-content-center">
	                  	                    <button class="btn px-4 text-light fw-bold mb-2" style={{'background':'linear-gradient(to right,#411bbf, #411bbf)','width':'200px'}} onClick={Test_Drive_Click} >Schedule Test Drive</button>
	                  	              </div>

	                  	               <div className="col-md-6 d-flex justify-content-md-start justify-content-sm-center justify-content-center">
	                  	                    <button class="btn btn-default px-4 border-dark text-primary fw-bold mb-2" style={{'width':'200px'}}>Book Now</button>
	                  	              </div>


	                  	          </div>
                               </div>
                           	  )


}

export default VehicleFeatures;

import React,{useEffect} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';


const CarShowRoom=()=>{
	                      var Redirect=useNavigate();
                          var [Showvehicle,SetVehicle]=React.useState([]);
	                      useEffect(()=>{
                                           Loadvehicles();
	                      },[])

	                      function Loadvehicles()
	                      {
                                 axios.get('http://localhost:5000/GetVehicles')
                                 .then((response)=>{
                                                    SetVehicle(response.data);
                                 })
                                 .catch((err)=>{

                                 })
	                      }

	                      function ShowFeatures(id)
	                      {
                                 
                                 Redirect(`/VehicleFeatures/${id}`);
	                      }

	                  return(<div className="container-fluid">
	                  	
	                  	 <header class="text-start">CAR SHOWROOM</header>

	                  	          <div className="row">
	                  	               {
	                  	                 Showvehicle.length>0
	                  	                 ?
	                  	                   Showvehicle.map((option)=>(
                                                  <div className="col-lg-4 col-md-6 mb-2">
	                  	                               <div class="card text-left" style={{width:"400px"}}>
	                                                       <img className="card-img-top" src={option.VehicleImport} alt="Car Image" />
										                   <div class="card-body">
										                       <h4 class="card-title">{option.ModelName}</h4>
										                       <p class="text-justify">Rolls-Royce is the epitome of luxury and craftsmanship, offering a serene and opulent driving experience with unmatched elegance.</p>
										                       <button  class="btn btn-primary fw-bold w-100" onClick={()=>ShowFeatures(option._id)}>See Features</button>
										                   </div>
                                                        </div>
	                  	                          </div>
	                  	                   ))
	                  	                 :
	                  	                 <h4>ok</h4>
	                  	               }

	                  	              

	                  	          </div>
	                  	        
	                  	     </div>)
}
export default CarShowRoom;
import React from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';


const AddNewVehicleShowRoom=()=>{
	                             var Redirect=useNavigate();
	                             var textBoxesIds=["VehicleBrandName",
	                             	               "ModelName",
	                             	               "Variant",
	                             	               "MfyYear",
	                             	               "VehicleType",
	                             	               "FuelType",
	                             	               "TransmissionType",
	                             	               "EngineCapacity",
	                             	               "Mileage",
	                             	               "SeatingCapacity",
	                             	               "ExShowRoomPrice",
	                             	               "OnRoadPrice",
	                             	               "SalesPrice",
	                             	               "VehicleColor",
	                             	               "VinNo",
	                             	               "Insurance",
	                             	               "AirBags",
	                             	               "SunRoof",
	                             	               "SafetyFeatures",
	                             	               "VehicleImport",
	                             	               "VehicleStatus"];
                                                     // Initialize state dynamically
	                             var [Form,setFormData]=React.useState(
	                             	                    Object.fromEntries(textBoxesIds.map(id => [id, ""]))
                                                     
	                             	                 );

	                             const handleChange=(e)=>{

	                             	             
                                                    var {name,value}=e.target;

                                                    var salerate= parseFloat(document.getElementsByName('ExShowRoomPrice')[0].value)*parseFloat(0.2);
                                                    var Salesprice=parseFloat(document.getElementsByName('ExShowRoomPrice')[0].value)+parseFloat(salerate);

                                                    document.getElementsByName('SalesPrice')[0].value=Salesprice || 0;

                                                    setFormData(prev => ({
																	  ...prev,
																	  [name]: 
																	    name === 'VehicleImport'
																	      ? document.getElementsByName('VehicleImport')[0].value.split('\\').pop()
																	    : name === 'SalesPrice'
																	      ? Salesprice || 0  // You can customize how you want to handle salesAmt
																	    : value
																	}));

                                                    //console.log(Form);
                                                    
	                             }
	                             function Save_click(){
	                             	 console.log(Form);
	                             	axios.post('https://garage-backend-8rs3.onrender.com/AddNewVehicleShowRoom',Form)
	                             	.then((response)=>{
	                             		
	                             		               if(response.data == "ok")
	                             		               {
                                                            alert('Vehicle Added Successfully');
                                                            Redirect('/CarShowRoom');
	                             		               }
	                             		               else{
	                             		               	   alert(response.data);
	                             		               }
	                             	})
	                             	.catch((err)=>{
                                            alert(err);
	                             	})


	                             }
	                             const handleKeyPress = (e) => {
	                             
													  const { name, key } = e;
													   var currentValue = e.target.value;
													  if (e.target.name === "AcMobileNo" || e.target.name === "AccountNo" ) {
													    // Allow only digits
													    if (!/^\d$/.test(key) || currentValue.length >= 10) {
													      e.preventDefault();
													    }
													    
													  }
													  if ( e.target.name === "AdharNo") {
													    // Allow only digits
													    
													    if (!/^\d$/.test(key) || currentValue.length >= 12) {
													      e.preventDefault();
													    }
													  }
													  if ( e.target.name === "ExShowRoomPrice" ||   e.target.name === "OnRoadPrice" ||   e.target.name === "SalesPrice" ||   e.target.name === "Insurance" ||   e.target.name === "MfyYear"  ) {
													    // Allow only digits
													    
													    if (!/^\d$/.test(key)) {
													      e.preventDefault();
													    }
													  }

													  if (e.target.name == "ModelName" || e.target.name == "Variant" || e.target.name == "VehicleColor"   ) {
													  	
													    // Allow only letters and space
													    if (!/^[a-zA-Z ]$/.test(key)) {
													      e.preventDefault();
													    }
													  }

													  // Add other fields as needed
													};

	                         return(
	                         	    <div className="container-fluid text-left">
	                         	          <header class="text-start">NEW VEHICLE IN SHOWROOM</header>

	                         	          <div className="container-fluid">
	                         	               <div className="row">
	                         	                    <div className="col-xl-3 col-lg-6 col-md-12">
	                         	                         <label>Vehicle Brand Name</label>
	                         	                         <input type="text" name="VehicleBrandName" className="form-control" onChange={handleChange} />
	                         	                    </div>


	                         	                    <div className="col-xl-3 col-lg-6 col-md-12">
	                         	                         <label>Model Name</label>
	                         	                         <input type="text" name="ModelName" className="form-control" onKeyPress={handleKeyPress}  onChange={handleChange}/>
	                         	                    </div>


	                         	                    <div className="col-xl-3 col-lg-6 col-md-12">
	                         	                         <label>Variant</label>
	                         	                         <input type="text" name="Variant" className="form-control" onKeyPress={handleKeyPress}  onChange={handleChange}/>
	                         	                    </div>


	                         	                    <div className="col-xl-3 col-lg-6 col-md-12">
	                         	                         <label>Mfy Year</label>
	                         	                         <input type="text" name="MfyYear" className="form-control"  onKeyPress={handleKeyPress} onChange={handleChange}/>
	                         	                    </div>
	                         	               </div>

	                         	               <div className="row">
	                         	                    <div className="col-xl-3 col-lg-6 col-md-12">
	                         	                         <label>Vehicle Type</label>
	                         	                        
	                         	                         <select name="VehicleType" className="form-control"  onChange={handleChange}>
	                         	                                 <option>Select Type</option>
	                         	                                 <option>Sedan</option>
	                         	                                 <option>SUV</option>
	                         	                                 <option>Truck</option>
	                         	                         </select>
	                         	                    </div>


	                         	                    <div className="col-xl-3 col-lg-6 col-md-12">
	                         	                         <label>Fuel Type</label>
	                         	                         
	                         	                         <select name="FuelType"  onChange={handleChange} className="form-control">
	                         	                                 <option>Select Fuel Type</option>
	                         	                                 <option>Diesel</option>
	                         	                                 <option>Petrol</option>
	                         	                                 <option>Electric</option>
	                         	                                 <option>Hybrid</option>
	                         	                         </select>
	                         	                    </div>


	                         	                    <div className="col-xl-3 col-lg-6 col-md-12">
	                         	                         <label>Transmission Type</label>
	                         	                          <select name="TransmissionType"  onChange={handleChange} className="form-control">
	                         	                                 <option>Select Transmission Type</option>
	                         	                                 <option>Automatic</option>
	                         	                                 <option>Manual</option>
	                         	                                
	                         	                         </select>
	                         	                    </div>


	                         	                    <div className="col-xl-3 col-lg-6 col-md-12">
	                         	                         <label>Engine Capacity</label>
	                         	                         <input name="EngineCapacity" type="text"  onChange={handleChange} className="form-control"/>
	                         	                    </div>
	                         	               </div>

	                         	               <div className="row">
	                         	                    <div className="col-xl-3 col-lg-6 col-md-12">
	                         	                         <label>Mileage</label>
	                         	                         <input name="Mileage" type="text"  onChange={handleChange} className="form-control"/>
	                         	                    </div>


	                         	                    <div className="col-xl-3 col-lg-6 col-md-12">
	                         	                         <label>Seating Capacity</label>
	                         	                         
	                         	                         <select name="SeatingCapacity"  onChange={handleChange} className="form-control">
	                         	                                 <option>Select Seating Capacity</option>
	                         	                                 <option>5 persons</option>
	                         	                                 <option>6 persons</option>
	                         	                                 <option>4 persons</option>
	                         	                                 <option>10 persons</option>
	                         	                         </select>
	                         	                    </div>


	                         	                    <div className="col-xl-3 col-lg-6 col-md-12">
	                         	                         <label>Ex-ShowRoom Price</label>
	                         	                          <input type="text" name="ExShowRoomPrice"  onChange={handleChange} onKeyPress={handleKeyPress}  className="form-control"/>
	                         	                    </div>


	                         	                    <div className="col-xl-3 col-lg-6 col-md-12">
	                         	                         <label>On-Road Price</label>
	                         	                         <input type="text" name="OnRoadPrice"  onChange={handleChange} onKeyPress={handleKeyPress} className="form-control"/>
	                         	                    </div>
	                         	               </div>

	                         	               <div className="row">
	                         	                    <div className="col-xl-3 col-lg-6 col-md-12">
	                         	                         <label>Sales Price</label>
	                         	                         <input type="text" name="SalesPrice"  onChange={handleChange} onKeyPress={handleKeyPress} className="form-control"/>
	                         	                    </div>
	                         	                    <div className="col-xl-3 col-lg-6 col-md-12">
	                         	                         <label>Vehicle Color</label>
	                         	                         <input type="text" name="VehicleColor"  onChange={handleChange} onKeyPress={handleKeyPress} className="form-control"/>
	                         	                    </div>


	                         	                    <div className="col-xl-3 col-lg-6 col-md-12">
	                         	                         <label>Vin No</label>
	                         	                         <input type="text" name="VinNo"  onChange={handleChange} className="form-control"/>
	                         	                    </div>


	                         	                    <div className="col-xl-3 col-lg-6 col-md-12">
	                         	                         <label>Insurance</label>
	                         	                          <input type="text" name="Insurance"  onChange={handleChange} onKeyPress={handleKeyPress} className="form-control"/>
	                         	                    </div>


	                         	                    
	                         	               </div>

	                         	               <div className="row">
	                         	                    <div className="col-xl-3 col-lg-6 col-md-12">
	                         	                         <label>Air Bags</label>
	                         	                         
	                         	                         <select name="AirBags"  onChange={handleChange} className="form-control">
	                         	                                 <option>Select Airbags</option>
	                         	                                 <option>Front Airbags</option>
	                         	                                 <option>Side Airbags</option>
	                         	                                 <option>Curtain Airbags</option>
	                         	                                 <option>Knee Airbags</option>
	                         	                                 <option>Rear Airbags</option>
	                         	                                 <option>No Airbags</option>        
	                         	                         </select>
	                         	           
	                         	                    </div>
	                         	                    
	                         	                    <div className="col-xl-3 col-lg-6 col-md-12">
	                         	                         <label>SunRoof</label>
	                         	                         <select name="SunRoof"  onChange={handleChange} className="form-control">
	                         	                                 <option>Select Sunroof</option>
	                         	                                 <option>Pop-up Sunroof</option>
	                         	                                 <option>Sliding Sunroof</option>
	                         	                                 <option>Panoramic Sunroof</option>
	                         	                                 <option>Moonroof</option>
	                         	                                 <option>None of these</option>
	                         	                                         
	                         	                         </select>
	                         	                    </div>


	                         	                    <div className="col-xl-3 col-lg-6 col-md-12">
	                         	                         <label>Safety Features</label>
	                         	                         <select name="SafetyFeatures"  onChange={handleChange} className="form-control">
	                         	                                 <option>Select Features</option>
	                         	                                 <option>Anti lock breaking system</option>
	                         	                                 <option>Backup Camera</option>
	                         	                                 <option>Night Vision</option>
	                         	                                 <option>GPS Tracking System</option>
	                         	                                 <option>No Features</option>
	                         	                                         
	                         	                         </select>
	                         	                    </div>

	                         	                    <div className="col-xl-3 col-lg-6 col-md-12">
	                         	                         <label>Vehicle Import</label>
	                         	                         <input type="file" name="VehicleImport"  onChange={handleChange} className="form-control"/>
	                         	                    </div>

	                         	                    <div className="col-xl-3 col-lg-6 col-md-12">
	                         	                         <label>Vehicle Status</label>
	                         	                         <select className="form-control" name="VehicleStatus" onChange={handleChange}>
                                                                 <option>Select Status</option>
                                                                 <option>UNSOLD</option>
	                         	                         </select>
	                         	                    </div>
	                         	               </div>

	                         	               <div className="row text-end mt-2">
	                         	                     <div className="offset-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 d-flex justify-content-end ">
	                         	                           <input type="button" value="Save" className="btn btn-success add" onClick={Save_click}/>
	                         	                           <input type="button" value="Exit" className="btn btn-danger add mx-1"/>
	                         	                     </div>
	                         	               </div>
	                         	          </div> 
	                         	    </div>
	                         	    )
}
export default AddNewVehicleShowRoom;

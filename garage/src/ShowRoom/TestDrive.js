import React,{useEffect} from 'react';
import axios from 'axios';
import {useNavigate,useParams} from 'react-router-dom';


const Test_Drive=()=>{
	                    var Redirect=useNavigate();
                        var textBoxesIds=["Entry_date","Visitors_Name",
	                       	                 "Driving_Licence","MobileNo",
	                       	                 "VehicleName","Model",
	                       	                 "Variant","Color","StaffName",
	                       	                 "VehicleNo","fromTime","ToTime",
	                       	                 "FuelType","Reviews"];
	                    var {id}=useParams();
	                    useEffect(()=>{
	                    	           if(id != "add")
                                       EditTestDriveDetails();
	                    },[]);

	                    function EditTestDriveDetails()
	                    {
                                 axios.get(`https://garage-backend-8rs3.onrender.com/EditTestDriveDetails/${id}`)
                                 .then((resp)=>{
                                                 var val=resp.data[0];
                                                 textBoxesIds.forEach(id=>{
                                                                        var InputElement=document.getElementsByName(id)[0];
                                                                        InputElement.value=val[id];
                                                 })
                                 })
                                 .catch((err)=>{

                                 })
	                    }
                        
	                    var [ChildData,SetChildData]=React.useState(Object.fromEntries(textBoxesIds.map(id=>[id,""])));
	                       	                
	                    function selectionChange(e) {
	                    	                 var{name,value}=e.target;

	                    	                 SetChildData(prev=>({ ...prev,[name]:value }));
	                    }

	                    function Save_click()
	                    {
	                    	console.log(ChildData);

	                    	if(id != "add")
	                    	{
                                 var update={};
                                 textBoxesIds.map(id=>{
                                 	                   var InputElement=document.getElementsByName(id)[0];
                                 	                   update[id]=InputElement.value;
                                 })
                                 console.log(update);
                                 axios.post(`https://garage-backend-8rs3.onrender.com/SaveTestDrive/${id}`,update)
                                 .then((resp)=>{
                                                alert('Update Successfully');
                                                Redirect('/TestDrive_View');
                                 })
                                 .catch((err)=>{

                                 })

	                    	}
	                    	else{
	                    		axios.post('https://garage-backend-8rs3.onrender.com/SaveTestDrive/add',ChildData)
		                    	.then((resp)=>{
	                                           alert(resp.data);
	                                           //Redirect('/TestDrive_View');
		                    	})
		                    	.catch((err)=>{

		                    	});
	                    	}
	                    	
	                    }

	                    function Exit_click()
	                    {
	                    	 Redirect('/TestDrive_View');
	                    }
	                     const handleKeyPress = (e) => {
	                             
													  const { name, key } = e;
													   var currentValue = e.target.value;
													  if (e.target.name === "MobileNo") {
													    // Allow only digits
													    if (!/^\d$/.test(key) || currentValue.length >= 10) {
													      e.preventDefault();
													    }
													  }

													  if (e.target.name == "Visitors_Name" || e.target.name == "Model" || e.target.name == "Variant" || e.target.name == "Color"  || e.target.name == "StaffName" || e.target.name == "Reviews"  ) {
													  	
													    // Allow only letters and space
													    if (!/^[a-zA-Z ]$/.test(key)) {
													      e.preventDefault();
													    }
													  }

													  // Add other fields as needed
													};
	                  return(
	                  	     <div className="container-fluid text-left">
                                  <header class="text-start">TEST DRIVE REGISTER</header>

                                   <div className="container-fluid">
	                   	                <div className="row">
	                   	                    <div className="col-xl-3 col-lg-6 col-md-12">
	                   	                         <label>Date</label>
	                   	                         <input type="date" name="Entry_date" onChange={selectionChange} className="form-control"/>
	                   	                    </div>

	                   	                    <div className="col-xl-3 col-lg-6 col-md-12">
	                   	                         <label>Customer Name</label>
	                   	                         <input type="text" name="Visitors_Name" onChange={selectionChange} onKeyPress={handleKeyPress} className="form-control"/>
	                   	                    </div>

	                   	                    <div className="col-xl-3 col-lg-6 col-md-12">
	                   	                         <label>Driving Licence</label>
	                   	                         <input type="text" name="Driving_Licence" onChange={selectionChange} className="form-control"/>
	                   	                    </div>

	                   	                    <div className="col-xl-3 col-lg-6 col-md-12">
	                   	                         <label>Mobile No</label>
	                   	                         <input type="text" name="MobileNo" onChange={selectionChange} onKeyPress={handleKeyPress} className="form-control"/>
	                   	                    </div>
            
	                   	                </div>

	                   	                 <div className="row">
	                   	                     <div className="col-xl-3 col-lg-6 col-md-12">
	                   	                         <label>Vehicle Name</label>
	                   	                         <input type="text" name="VehicleName" onChange={selectionChange} className="form-control"/>
	                   	                    </div>
	                   	                    <div className="col-xl-3 col-lg-6 col-md-12">
	                   	                         <label>Model</label>
	                   	                         <input type="text" name="Model" onChange={selectionChange} onKeyPress={handleKeyPress} className="form-control"/>
	                   	                    </div>

	                   	                    <div className="col-xl-3 col-lg-6 col-md-12">
	                   	                         <label>Variant</label>
	                   	                         <input type="text" name="Variant" onChange={selectionChange} onKeyPress={handleKeyPress} className="form-control"/>
	                   	                    </div>

	                   	                    <div className="col-xl-3 col-lg-6 col-md-12">
	                   	                         <label>Color</label>
	                   	                         <input type="text" name="Color" onChange={selectionChange} onKeyPress={handleKeyPress}  className="form-control"/>
	                   	                    </div>

	                   	                   

	                   	                    
	                   	                </div>

	                   	                <div className="row">
	                   	                     <div className="col-xl-3 col-lg-6 col-md-12">
	                   	                         <label>Staff Name</label>
	                   	                         <input type="text" name="StaffName" onChange={selectionChange} onKeyPress={handleKeyPress} className="form-control"/>
	                   	                    </div>

	                   	                    <div className="col-xl-3 col-lg-6 col-md-12">
	                   	                         <label>Vehicle No</label>
	                   	                         <input type="text" name="VehicleNo" onChange={selectionChange} className="form-control"/>
	                   	                    </div>

	                   	                    <div className="col-xl-3 col-lg-6 col-md-12">
	                   	                         <label>from Time</label>
	                   	                         <input type="time" name="fromTime" onChange={selectionChange} className="form-control"/>
	                   	                    </div>

	                   	                    <div className="col-xl-3 col-lg-6 col-md-12">
	                   	                         <label>To Time</label>
	                   	                         <input type="time" name="ToTime" onChange={selectionChange} className="form-control"/>
	                   	                    </div>    
	                   	                </div>

	                   	                <div className="row">
	                   	                     <div className="col-xl-3 col-lg-6 col-md-12">
	                   	                         <label>Fuel Type</label>
	                   	                         <select className="form-control" name="FuelType" onChange={selectionChange}>
	                   	                                 <option>Select Fuel Type</option>
	                   	                                 <option>Petrol</option>
	                   	                                 <option>Diesel</option>
	                   	                         </select>
	                   	                         
	                   	                    </div>
	                   	                      <div className="col-xl-3 col-lg-6 col-md-12">
	                   	                         <label>Reviews</label>
	                   	                         <input type="text" name="Reviews" onChange={selectionChange} onKeyPress={handleKeyPress} className="form-control"/>
	                   	                      </div>
	                   	                </div>

	                   	                 <div className="row mt-2">                  
	                   	                    <div className="offset-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 d-flex justify-content-end">
	                   	                         <input type="button" className="btn btn-success add"  value="Save" onClick={Save_click}/>
	                   	                         <input type="button" className="btn btn-danger add mx-2" value="Exit" onClick={Exit_click}/>
	                   	                    </div>             
	                   	                </div>


                                  </div>
                             </div>     
	                  	)

}

export default Test_Drive;

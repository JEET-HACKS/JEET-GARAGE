import React,{useEffect} from 'react';
import axios from 'axios';
import {useNavigate,useParams} from 'react-router-dom';

const Staff_Master=()=>{
	                     var Redirect=useNavigate();
	                     function Exit_Click()
	                     {
                             Redirect('/Staff_Master_View');
	                     }
	                     var textboxes_ids = [
											  "Joiningdate",
											  "StaffName",
											  "MobileNo",
											  "Address",
											  "State",
											  "City",
											  "Email",
											  "PanNo",
											  "AadharNo",
											  "AccountNo",
											  "Designation"
                                             ];
	                     var {id}=useParams();
	                            useEffect(()=>{
	                            	             if(id != "add")
                                                 BindStaffDetails();
	                            },[])

	                             function BindStaffDetails(){
                                                       axios.get(`https://garage-backend-8rs3.onrender.com/BindStaffDetails/${id}`)
                                                       .then((response)=>{
                                                       	                 var val=response.data[0];
                                                       	                 textboxes_ids.forEach(id=>{
                                                       	                 	     var InputElement=document.getElementsByName(id)[0];
                                                       	                 	      InputElement.value=val[id];

                                                       	                 })                   
                                                       })
                                                       .catch((err)=>{

                                                       })
	                            }
	                    
	                    var [Form,setFormData]=React.useState(
          	                                    Object.fromEntries(textboxes_ids.map(id =>[id, ""]))
          	                     	            );

	                    const handleChange=(e)=>{
                      	                       
                      	                       	var{name,value}=e.target;
                                               setFormData(prev=>({ ...prev,[name]:value}));
                      	                       
                                     
	                                           }

	                    function Save_click()
	                        { 
	                                if(id != "add")
	                             	{
	                             	
	                             	 var update={};
	                             	 textboxes_ids.map(id=>{
                                                       	    var InputElement=document.getElementsByName(id)[0];
                                                             update[id]=InputElement.value
                                  
                                                       	   });
	                             	
	                             	 console.log(update);
	                             	 axios.post(`https://garage-backend-8rs3.onrender.com/AddStaffName/${id}`,update)
	                             	 .then((resp)=>{
                                                   if(resp.data == "ok")
                                                   {
                                                   	alert('Staff Updated Successfully');
	                                                Redirect('/Staff_Master_View');
                                                   }
                                                   else{
                                                   	 alert(resp.data);
                                                   }
	                             		})
	                             		.catch((err)=>{

	                             		})
	                             	 
	                             	}else{
	                             		     axios.post(`https://garage-backend-8rs3.onrender.com/AddStaffName/${id}`,Form)
	                                  	    .then((response)=>{
	                                                          
	                                                           if(response.data == "ok")
						                       	                 {
						                       	                 	alert('Staff Saved Successfully');
	                                                                Redirect('/Staff_Master_View');
						                       	                 }
						                       	                 else{
						                       	                 	alert(response.data);
						                       	                 }
		                                  	})
		                                  	.catch((err)=>{
	                                                          alert(err);
		                                  	})

	                             	       }
                                         
	                                 
	                               }
                 
	                                  
	                   return(
	                   	      <div className="container-fluid text-left">
	                   	           <header class="text-start">STAFF MASTER</header>

	                   	           <div className="container-fluid">
	                   	                <div className="row">
	                   	                    <div className="col-xl-3 col-lg-6 col-md-12">
	                   	                         <label> Date of Joining</label>
	                   	                         <input type="date" name="Joiningdate" onChange={handleChange} className="form-control"/>
	                   	                    </div>
	                   	                    <div className="col-xl-3 col-lg-6 col-md-12">
	                   	                         <label>Staff Name</label>
	                   	                         <input type="text" name="StaffName" onChange={handleChange} className="form-control"/>
	                   	                    </div>
	                   	                    <div className="col-xl-3 col-lg-6 col-md-12">
	                   	                         <label>Address</label>
	                   	                         <input type="text" name="Address" onChange={handleChange} className="form-control"/>
	                   	                    </div>
	                   	                    <div className="col-xl-3 col-lg-6 col-md-12">
	                   	                         <label>Mobile No</label>
	                   	                         <input type="text" name="MobileNo" onChange={handleChange} className="form-control"/>
	                   	                    </div>
	                   	                    
	                   	                    
	                   	                </div>

	                   	                <div className="row">
	                   	                    
	                   	                    
	                   	                    <div className="col-xl-3 col-lg-6 col-md-12">
	                   	                         <label>State</label>
	                   	                         <input type="text" name="State" onChange={handleChange} className="form-control"/>
	                   	                    </div>
	                   	                    <div className="col-xl-3 col-lg-6 col-md-12">
	                   	                         <label>City</label>
	                   	                         <input type="text" name="City" onChange={handleChange} className="form-control"/>
	                   	                    </div>
	                   	                       <div className="col-xl-3 col-lg-6 col-md-12">
	                   	                         <label>Email</label>
	                   	                         <input type="email" name="Email" onChange={handleChange} className="form-control"/>
	                   	                    </div>
	                   	                          <div className="col-xl-3 col-lg-6 col-md-12">
	                   	                         <label>Pan No</label>
	                   	                         <input type="text" name="PanNo" onChange={handleChange} className="form-control"/>

	                   	                    </div>
	                   	                    
	                   	                    
	                   	                 

	                   	                </div>

	                   	                <div className="row">
	                   	                    <div className="col-xl-3 col-lg-6 col-md-12">
	                   	                         <label>Aadhar No</label>
	                   	                         <input type="text" name="AadharNo" onChange={handleChange} maxlength="12" minlength="12" className="form-control"/>
	                   	                    </div>
	                   	                    <div className="col-xl-3 col-lg-6 col-md-12">
	                   	                         <label>Account No</label>
	                   	                         <input type="text" name="AccountNo" onChange={handleChange}  className="form-control"/>

	                   	                    </div>
	                   	                    <div className="col-xl-3 col-lg-6 col-md-12">
	                   	                         <label>Designation</label>
	                   	                         
	                   	                         <select name="Designation" onChange={handleChange} className="form-control">
	                   	                                 <option>Select Designation</option>
	                   	                                 <option>Owner</option>
	                   	                                 <option>Manager</option>
	                   	                                 <option>SalesMan</option>
	                   	                                 <option>Other</option>
	                   	                         </select>
	                   	                    </div>
	                   	               
	                   	                </div>

	                   	                <div className="row mt-2">                  
	                   	                    <div className="offset-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 d-flex justify-content-end ">
	                   	                         <input type="button" className="btn btn-success add" onClick={Save_click} value="Save"/>
	                   	                         <input type="button" className="btn btn-danger add mx-2" onClick={Exit_Click} value="Exit"/>

	                   	                    </div>             
	                   	                </div>
	                   	           </div>
	                   	      </div>
	                   	      )
}
export default Staff_Master;

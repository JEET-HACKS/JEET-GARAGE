import React,{useEffect} from 'react';
import axios from 'axios';
import {useNavigate,useParams} from 'react-router-dom';

const Account_master_for_showroom=()=>{
	                                  var textboxes_ids=["AcDate",
	                                  	                 "Account_Name",
	                                  	                 "Opening_Balance",
	                                  	                 "ScheduleType",
	                                  	                 "Address",
	                                  	                 "State",
	                                  	                 "City",
	                                  	                 "Email",
	                                  	                 "AcMobileNo",
	                                  	                 "PanNo",
	                                  	                 "AdharNo",
	                                  	                 "GSTIN",
	                                  	                 "AccountNo",
	                                  	                 "IFSC",
	                                  	                 "AccountType",
	                                  	                 "BankName",
	                                  	                 "CreditLimit"];
	                                  var {id}=useParams();
	                                  var [Form,setFormData]=React.useState(
	                                  	                                    Object.fromEntries(textboxes_ids.map(id =>[id, ""]))
	                                  	                     	            );
	                                  useEffect(()=>{
	                                  	             if(id !="add")
	                                  	             {
	                                  	             	EditAccountMasterDetails();
	                                  	             }
	                                  })

	                                  function EditAccountMasterDetails()
	                                  {
	                                  	   axios.get(`http://localhost:5000/EditAccountFromMaster/${id}`)
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
	                                  var Redirect=useNavigate(); 
	                                  

	                                  

	                                  const handleChange=(e)=>{
	                                  	                       if(id =="add")
	                                  	                       {
	                                  	                       	var{name,value}=e.target;
                                                               setFormData(prev=>({ ...prev,[name]:value}));
	                                  	                       }
                                                               
                                                              

	                                  }
	                                  function Save_click()
	                                  {
	                                  	if(id !="add")
	                                  	{
                                            var update={};
                                            textboxes_ids.map(id=>{
                                            	             var InputElement=document.getElementsByName(id)[0];
                                                             update[id]=InputElement.value
                                            })

                                            axios.post(`http://localhost:5000/AddNewAccountInShowRoom/${id}`,update)
	                                  	    .then((response)=>{
	                                                          alert('Account Update Successfully');
	                                                           //Redirect('/AccountMasterView');
		                                  	})
		                                  	.catch((err)=>{
	                                                          alert(err);
		                                  	})
	                                  	}
	                                  	else{
	                                  		axios.post(`http://localhost:5000/AddNewAccountInShowRoom/${id}`,Form)
	                                  	.then((response)=>{
	                                  		               alert(response.data);
                                                          //alert('Account Saved Successfully');
                                                           //Redirect('/AccountMasterView');
	                                  	})
	                                  	.catch((err)=>{
                                                          if (err.response?.data?.error) {
                                                          alert(err.response.data.error); // or show inline
  }
	                                  	     })
	                                  	}
	                                  	
	                                  	
	                                  }

	                                  function Exit_Click()
	                                  {
                                             Redirect('/AccountMasterView');
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
													  if ( e.target.name === "Opening_Balance" ||   e.target.name === "CreditLimit") {
													    // Allow only digits
													    
													    if (!/^\d$/.test(key)) {
													      e.preventDefault();
													    }
													  }

													  if (e.target.name == "Account_Name" || e.target.name == "State" || e.target.name == "City"  ) {
													  	
													    // Allow only letters and space
													    if (!/^[a-zA-Z ]$/.test(key)) {
													      e.preventDefault();
													    }
													  }

													  // Add other fields as needed
													};
	                   return(
	                   	      <div className="container-fluid text-left">
	                   	           <header class="text-start">ACCOUNT MASTER FOR SHOWROOM</header>

	                   	           <div className="container-fluid">
	                   	                <div className="row">
	                   	                    <div className="col-md-3">
	                   	                         <label> Date</label>
	                   	                         <input type="date" name="AcDate" onChange={handleChange} className="form-control"/>
	                   	                    </div>
	                   	                    <div className="col-md-3">
	                   	                         <label>Account Name</label>
	                   	                         <input type="text" name="Account_Name" onChange={handleChange} onKeyPress={handleKeyPress} className="form-control"/>
	                   	                    </div>
	                   	                    <div className="col-md-3">
	                   	                         <label>Opening Balance</label>
	                   	                         <input type="text" name="Opening_Balance" onChange={handleChange} onKeyPress={handleKeyPress} className="form-control"/>
	                   	                    </div>
	                   	                    <div className="col-md-3">
	                   	                         <label>DR/CR</label>
	                   	                         <select name="ScheduleType" onChange={handleChange} className="form-control">
	                   	                                 <option>Select Schedule Type</option>
	                   	                                 <option>Sundry Debtors</option>
	                   	                                 <option>Sundry Creditors</option>
	                   	                         </select>
	                   	                    </div>
	                   	                </div>

	                   	                <div className="row">
	                   	                    <div className="col-md-3">
	                   	                         <label>Address</label>
	                   	                         <input type="text" name="Address" onChange={handleChange} className="form-control"/>
	                   	                    </div>
	                   	                    <div className="col-md-3">
	                   	                         <label>State</label>
	                   	                         <input type="text" name="State" onChange={handleChange} onKeyPress={handleKeyPress} className="form-control"/>
	                   	                    </div>
	                   	                    <div className="col-md-3">
	                   	                         <label>City</label>
	                   	                         <input type="text" name="City" onChange={handleChange} onKeyPress={handleKeyPress} className="form-control"/>
	                   	                    </div>
	                   	                    <div className="col-md-3">
	                   	                         <label>Email</label>
	                   	                         <input type="email" name="Email" onChange={handleChange} className="form-control"/>
	                   	                    </div>

	                   	                </div>

	                   	                <div className="row">
	                   	                    <div className="col-md-3">
	                   	                         <label>Mobile No</label>
	                   	                         <input type="text" name="AcMobileNo" onChange={handleChange} onKeyPress={handleKeyPress} className="form-control"/>
	                   	                    </div>
	                   	                    <div className="col-md-3">
	                   	                         <label>Pan No</label>
	                   	                         <input type="text" name="PanNo" onChange={handleChange} className="form-control"/>

	                   	                    </div>
	                   	                    <div className="col-md-3">
	                   	                         <label>Aadhar No</label>
	                   	                         <input type="text" name="AdharNo" maxlength="12" minlength="12" onChange={handleChange} onKeyPress={handleKeyPress} className="form-control"/>
	                   	                    </div>
	                   	                    <div className="col-md-3">
	                   	                         <label>GSTIN</label>
	                   	                         <input type="text" name="GSTIN" onChange={handleChange} className="form-control"/>
	                   	                    </div>
	                   	                </div>

	                   	                <div className="row">
	                   	                    <div className="col-md-3">
	                   	                         <label>Account No</label>
	                   	                         <input type="text" name="AccountNo" onChange={handleChange} onKeyPress={handleKeyPress} className="form-control"/>

	                   	                    </div>
	                   	                    <div className="col-md-3">
	                   	                         <label>IFSC</label>
	                   	                         <input type="text" name="IFSC" onChange={handleChange} className="form-control"/>
	                   	                    </div>

	                   	                    <div className="col-md-3">
	                   	                         <label>Account Type</label>
	                   	                         <select name="AccountType" onChange={handleChange} className="form-control">
	                   	                                 <option>Select Account Type</option>
	                   	                                 <option>SUPPL</option>
	                   	                                 <option>CUST</option>
	                   	                         </select>
	                   	                    </div>
	                   	                    <div className="col-md-3">
	                   	                         <label>Bank Name</label>
	                   	                         <input type="text" name="BankName" onChange={handleChange} className="form-control"/>
	                   	                    </div>
	                   	                   
	                   	                </div>

	                   	                <div className="row">
	                   	                      <div className="col-md-3">
	                   	                         <label>Credit Limit</label>
	                   	                         <input type="text" name="CreditLimit" onChange={handleChange} onKeyPress={handleKeyPress} className="form-control"/>
	                   	                    </div>

	                   	                </div>


	                   	                <div className="row mt-2">                  
	                   	                    <div className="offset-6 col-md-6 col-sm-12 text-end">
	                   	                         <input type="button" className="btn btn-success add" onClick={Save_click} value="Save"/>
	                   	                         <input type="button" className="btn btn-danger add mx-2" value="Exit" onClick={Exit_Click}/>

	                   	                    </div>             
	                   	                </div>
	                   	           </div>
	                   	      </div>
	                   	      )
}
export default Account_master_for_showroom;
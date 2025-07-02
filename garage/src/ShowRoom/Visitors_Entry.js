import React,{useEffect} from 'react';
import axios from 'axios';
import {useNavigate,useParams} from 'react-router-dom';


const Visitors_Entry=()=>{
	                            var textBoxesIds=["Entry_date","Visitors_Name",
	                       	                 "MobileNo","PurposeOfVisit",
	                       	                 "InterestedVehicleModel","CheckInTime",
	                       	                 "StaffName","CheckOutTime","Reviews"];
	                            var [ChildData,setChildData]=React.useState(Object.fromEntries(textBoxesIds.map(id => [id, ""])));
	                            var [BindVisitors,SetBindVisitors]=React.useState([]);
	                            
	                            var {id}=useParams();
	                            useEffect(()=>{
	                            	             if(id != "add")
                                              GetVisitorsDetails();
	                            },[])

	                            function GetVisitorsDetails(){
                                                       axios.get(`http://localhost:5000/EditVisitorsDetails/${id}`)
                                                       .then((response)=>{
                                                       	                 var val=response.data[0];
                                                       	                 textBoxesIds.forEach(id=>{
                                                       	                 	     var InputElement=document.getElementsByName(id)[0];
                                                       	                 	      InputElement.value=val[id];

                                                       	                 })                   
                                                       })
                                                       .catch((err)=>{

                                                       })
	                            }

	                            
	                            var Redirect=useNavigate();
                                

	                            const selectionChange=(e)=>{
                            	
                                                         var{name,value}=e.target;
                                                          // setChildData(prev=>({ ...prev,[name]:value}))
                                                             setChildData(prev=>({ ...prev,[name]:value}));
                                                             

	                                                   }
	                             function Save_Click()
	                             {
	                             	if(id != "add")
	                             	{
	                             	
	                             	  var update={};
	                             	 textBoxesIds.map(id=>{
                                                       	    var InputElement=document.getElementsByName(id)[0];
                                                             update[id]=InputElement.value
                                  
                                                       	   });
	                             	
	                             	 console.log(update);
	                             	 axios.post(`http://localhost:5000/SaveVisitors/${id}`,update)
	                             	 .then((resp)=>{
                                                   if(resp.data == "ok")
                                                   {
                                                   	 alert('Updated Successfully');
	                             	                      Redirect('/Visitors_Entry_View');
                                                   }
                                                   else{
                                                   	 alert(resp.data);
                                                   }
	                             		})
	                             		.catch((err)=>{

	                             		})
	                             	 // alert('Edit Successfully');
	                             	 // Redirect('/Visitors_Entry_View');
	                             	}
	                             	else
	                             	{
	                             		axios.post(`http://localhost:5000/SaveVisitors/${id}`,ChildData)
	                             		.then((resp)=>{
                                                   
                                                   if(resp.data == "ok")
                                                   {
                                                   	 alert('Save Successfully');
	                             	                      Redirect('/Visitors_Entry_View');
                                                   }
                                                   else{
                                                   	 alert(resp.data);
                                                   }
	                             		})
	                             		.catch((err)=>{

	                             		})
	                             		
	                             	}
	                             
	                             	
                                    
	                             	


	                             }    
	                             function Exit_click()
	                             {
	                             	 Redirect('/Visitors_Entry_View');
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

													  if (e.target.name == "Visitors_Name" || e.target.name == "Reviews" || e.target.name == "InterestedVehicleModel" || e.target.name == "PurposeOfVisit"  ) {
													  	
													    // Allow only letters and space
													    if (!/^[a-zA-Z ]$/.test(key)) {
													      e.preventDefault();
													    }
													  }

													  // Add other fields as needed
													};


	                                          

	                     return(
	                     	  <div className="container-fluid text-left">
                                <header class="text-start">VISITORS ENTRY</header>

                                 <div className="container-fluid">
	                   	                <div className="row">
	                   	                
	                   	                    <div className="col-md-3">
	                   	                         <label>Date</label>
	                   	                         <input type="date" name="Entry_date" onChange={selectionChange} className="form-control"/>
	                   	                    </div>

	                   	                    <div className="col-md-3">
	                   	                         <label>Full Name</label>
	                   	                         <input type="text" name="Visitors_Name" onChange={selectionChange} onKeyPress={handleKeyPress} className="form-control"/>
	                   	                    </div>

	                   	                    <div className="col-md-3">
	                   	                         <label>Phone No.</label>
	                   	                         <input type="number" name="MobileNo" max="10" onKeyPress={handleKeyPress} onChange={selectionChange} className="form-control"/>
	                   	                    </div>

	                   	                    <div className="col-md-3">
	                   	                         <label>Purpose of Visit</label>
	                   	                         <input type="text" name="PurposeOfVisit" onChange={selectionChange} onKeyPress={handleKeyPress} className="form-control"/>
	                   	                    </div>
	                   	                 </div>    

	                   	                  <div className="row">
	                   	                
	                   	                    <div className="col-md-3">
	                   	                         <label>Interested Car Model</label>
	                   	                         <input type="text" name="InterestedVehicleModel" onChange={selectionChange} onKeyPress={handleKeyPress} className="form-control"/>
	                   	                    </div>

	                   	                    <div className="col-md-3">
	                   	                         <label>In Time</label>
	                   	                         <input type="time" name="CheckInTime" onChange={selectionChange} className="form-control"/>
	                   	                    </div>

	                   	                    <div className="col-md-3">
	                   	                         <label>Salesperson/Executive Name</label>
	                   	                         <input type="text" name="StaffName" onChange={selectionChange} className="form-control"/>
	                   	                    </div>

	                   	                        <div className="col-md-3">
	                   	                         <label>Out Time</label>
	                   	                         <input type="time" name="CheckOutTime" onChange={selectionChange} className="form-control"/>
	                   	                    </div>

	                   	                    <div className="col-md-3">
	                   	                         <label>Review</label>
	                   	                         <input type="text" name="Reviews" onChange={selectionChange} onKeyPress={handleKeyPress} className="form-control"/>
	                   	                    </div>
	                   	                 </div> 

	                   	                 <div className="row mt-2">                  
	                   	                    <div className="offset-6 col-md-6 text-end">
	                   	                         <input type="button" className="btn btn-success add" onClick={Save_Click} value="Save"/>
	                   	                         <input type="button" className="btn btn-danger add mx-2" value="Exit" onClick={Exit_click}/>
	                   	                    </div>             
	                   	                </div>
	                   	         </div>           
                              </div>  
	                     	)
}

export default Visitors_Entry;
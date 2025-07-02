import React, {useEffect} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const Mechanics=()=>{


	const [mechanic,set_mechanic]=React.useState('');
	const [loadstopper,set_loadstopper]=React.useState('');
	var stopper="";

	 useEffect(()=>{

	           
	             if(stopper !="jeet")
	             {
	             	 
	             	GetMechanicsDetails();
	             }
	 	         
                  
	 },[1]);

	 const navigate=useNavigate();
	 function  GetMechanicsDetails(){
	 	 axios.get('http://localhost:5000/getmechanicsdetails')
	 	 .then((response)=>{
	 	 	set_mechanic(response.data);
	 	 	set_loadstopper(response.data);
	 	 })
	 	 .catch((err)=>{

	 	 })
	 	 stopper="jeet";

	 	
	 }
	 function Addmechanics(){
	 
	 	navigate("/AddMechanic/add");
	 }
     
      function Delete_click(id)
	 {
        

           axios.delete(`http://localhost:5000/deletemechanicsdetails/${id}`)
           .then((response)=>{
           	                  alert(response.data);
                              GetMechanicsDetails();
           })
           .catch((err)=>{
                   console.log(err);
           })
	 }

     function Edit_Click(id)
     {
        
           navigate(`/AddMechanic/${id}`);
     }
	 
	 return(<div className="container-fluid">
                  <header class="text-start">MECHANIC DETAILS</header>

                 <div className="row mechdetail mb-3">
                   <div className="col-lg-8 col-md-12 col-sm-12 col-12 mb-2">
                       <input type="text" className="form-control" Placeholder="Type here to search"/>
                   </div>
                   <div className="col-lg-2 col-md-3 col-sm-3 col-6 mx-col-2">
                       <input type="button"  className="btn btn-secondary w-100 fw-bold" value="Search"/>
                   </div>
                    <div className="col-lg-2 col-md-3 col-sm-3 col-6 ml-col-2 ">
                       <input type="button" onClick={Addmechanics} className="btn btn-primary w-100 fw-bold" value="Add New"/>
                   </div>
                </div>
                
                    
                      <div className="table-responsive">
                       <table class="table  table-bordered table-striped">
                          <thead>
                               <tr>
                                 <th>Mechanic Name</th>
                                  <th>Specialization</th>
                                  <th>Mobile No</th>
                                  <th>Aadhar No.</th>
                                  <th>Action</th>
                               </tr>
                         </thead>
                         <tbody>
                      {
                      	mechanic.length>0
                      	?
                      	mechanic.map((item,index)=>
                      		 
                                   <tr>
                                      <td>{item.M_Name}</td>
                                      <td>{item.serviceDetails.Service_Name}</td>
                                      <td>{item.MobileNo}</td>
                                      <td>{item.AadharNo}</td>
                                      <td>
                                         <button class="btn btn-success fw-bold" onClick={()=>Edit_Click(item._id)}>Edit</button>
                                         <button class="btn btn-danger mx-2 fw-bold"  onClick={()=>Delete_click(item._id)} >Delete</button>
                                         
                                      </td>
                                   </tr>
                    
                      	)
                      	:
                      	<h1>no result found</h1>
                      }
                      </tbody>
                      </table>
                     

                   </div>
                 

                 
	 	</div>

	 	)
}

export default Mechanics;
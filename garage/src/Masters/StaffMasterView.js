import React, {useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';


const Staff_Master_View=()=>{
                              var Redirect=useNavigate();
                              function Add_Click()
                             {
                                Redirect('/Staff_Master/'+'add');
                             }
                              var [StaffDetails,setStaffDetails]=React.useState([]);
                             useEffect(()=>{
                                    
                                    GetStaffDetails();
                        
                    

                            },[])
                             

                               function GetStaffDetails()
                                 {
                                      axios.get('http://localhost:5000/GetStaffDetails')
                                      .then((response)=>{
                                                         setStaffDetails(response.data);
                                                         

                                      })
                                      .catch((err)=>{
                                                        alert(err);
                                      })    
                                      
                                 }
                                 function Delete_click(id)
                                 {
                            

                                    axios.delete(`http://localhost:5000/DeleteStaffDetails/${id}`)
                                    .then((response)=>{
                                                       GetStaffDetails();
                                                      
                                    })
                                    .catch((err)=>{
                                                   alert(err);
                                    })
                                 }
                                  function UpdateClick(id)
                                 {
                                   localStorage.setItem("status","edit");
                                   Redirect('/Staff_Master/'+id);

                                 }

	                  return(<div className="container-fluid">
                                   
                                   <header class="text-start">STAFF MASTER VIEW</header>

                                   <div className="row mechdetail mb-3">
                                       <div className="col-lg-8 col-md-12 col-sm-12 col-12 mb-2">
                                           <input type="text" className="form-control" Placeholder="Type here to search"/>
                                       </div>
                                       <div className="col-lg-2 col-md-3 col-sm-3 col-6 mx-col-2">
                                           <input type="button"  className="btn btn-secondary w-100 fw-bold" value="Search"/>
                                       </div>
                                        <div className="col-lg-2 col-md-3 col-sm-3 col-6 ml-col-2 ">
                                           <input type="button" className="btn btn-primary w-100 fw-bold" onClick={Add_Click} value="Add New"/>
                                       </div>
                                   </div>


                                    <div className="table-responsive">
                                           <table class="table  table-bordered table-striped">
                                              <thead>
                                                   <tr>
                                                     <th>Joining Date</th>
                                                      <th>Staff Name</th>
                                                      <th>Designation</th>
                                                      <th>Mobile No.</th>
                                                      <th>Action</th>
                                                   </tr>
                                             </thead>
                                            <tbody>
                                                      {
                                                    StaffDetails.length>0
                                                    ?
                                                    StaffDetails.map((option)=>
                                                         <tr>
                                                              <td>{option.Joiningdate}</td>
                                                              <td>{option.StaffName}</td>
                                                              <td>{option.Designation}</td>
                                                              <td>{option.MobileNo}</td>
                                                              <td>
                                                                 <button class="btn btn-danger fw-bold" onClick={()=>Delete_click(option._id)}>Delete</button>
                                                                 <button class="btn btn-success mx-2 fw-bold" onClick={()=>UpdateClick(option._id)}>Edit</button>                          
                                                              </td>
                                                         </tr>
                                                    )
                                                    :
                                                    <h1>No records Found</h1>
                                                  }
                                            </tbody>
                                          </table>  
                                      </div>
                                    
                   


	                  	    </div>)
}
export default Staff_Master_View;
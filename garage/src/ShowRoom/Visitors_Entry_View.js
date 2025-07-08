import React,{useEffect} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const Visitors_View=()=>{
                             var [GetVisitorsDetatils,SetVisitorsDetails]=React.useState([]);
                             var Redirect=useNavigate();

                            useEffect(()=>{
                                           GetVisitorsDetails();
                            },[])

                            function GetVisitorsDetails()
                            {
                                axios.get('https://garage-backend-8rs3.onrender.com/GetVisitorsDetails')
                                .then((resp)=>{
                                       
                                               SetVisitorsDetails(resp.data);
                                })
                                .catch((err)=>{

                                })
                            }

                            function Add_Click() {
                               // body...
                              Redirect('/Visitors_Entry/add');
                            }

                            function ShowRoom_Click()
                            {
                                Redirect('/CarShowRoom');
                            }

                            function Edit_Click(id)
                            {
                                
                                Redirect(`/Visitors_Entry/${id}`);
                            }

                            function Delete_Click(id)
                            {
                                
                                axios.delete(`https://garage-backend-8rs3.onrender.com/DeleteVisitors/${id}`)
                                .then((response)=>{
                                                   GetVisitorsDetails();
                                })
                                .catch((err)=>{

                                })
                            }

                            
	                     return(
                               <div className="container-fluid text-left">
                                  <header class="text-start">VISITORS VIEW</header>


                                   <div className="row mechdetail mb-3">
                                       <div className="col-lg-8 col-md-12 col-sm-12 col-12 mb-2">
                                           <input type="text" className="form-control" Placeholder="Type here to search"/>
                                       </div>
                                       <div className="col-lg-2 col-md-3 col-sm-3 col-6 mx-col-2">
                                           <input type="button"  className="btn btn-secondary w-100 fw-bold" value="Search"/>
                                       </div>
                                        <div className="col-lg-2 col-md-3 col-sm-3 col-6 ml-col-2 ">
                                           <input type="button" onClick={Add_Click} className="btn btn-primary w-100 fw-bold" value="Add New"/>
                                       </div>
                                   </div>

                                  <div className="table-responsive">
                                       <table className="table table-bordered table-striped">
                                          <thead>
                                              <tr>
                                                 <th>Date</th>
                                                 <th>Visitor Name</th>
                                                 <th>Staff Name</th>
                                                 <th>In</th>
                                                 <th>Out</th>
                                                 <th>Reviews</th>
                                                 <th>Action</th>
                                               </tr>  
                                          </thead>
                                           <tbody>
                                                  {
                                                        GetVisitorsDetatils.length>0
                                                        ?
                                                          GetVisitorsDetatils.map((option)=>
                                                                     <tr>
                                                                         <td>{option.Entry_date}</td>
                                                                         <td>{option.Visitors_Name}</td>
                                                                         <td>{option.StaffName}</td>
                                                                         <td>{option.CheckInTime}</td>
                                                                         <td>{option.CheckOutTime}</td>
                                                                         <td>{option.Reviews}</td>
                                                                           <td>
                                                                              <button class="btn btn-success mx-2 fw-bold" onClick={()=>Edit_Click(option._id)}>Edit</button>
                                                                              <button class="btn btn-danger fw-bold" onClick={()=>Delete_Click(option._id)}>Delete</button>
                                                                              <button class="btn btn-secondary fw-bold mx-2" onClick={ShowRoom_Click}>ShowRoom</button>                         
                                                                           </td>
                                                                     </tr>
                                                          )
                                                        :
                                                        <h1>No Records Found</h1>

                                                        
                                                  }
                                         
                                          </tbody>

                                       </table>
                                  </div>

                               </div>   
	                     	)
}

export default Visitors_View;

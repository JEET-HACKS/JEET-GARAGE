import React,{useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const AccountMasterView=()=>{
                              var Redirect=useNavigate();
	                          var [InvoiceDetails,setInvoiceDetails]=React.useState([]);

	                          useState(()=>{
                                             GetAccountDetails();
	                          },[])

	                          function GetAccountDetails()
	                          {
	                          	axios.get('https://garage-backend-8rs3.onrender.com/GetAccountDetailsInShowRoom')
	                          	.then((response)=>{
                                                  setInvoiceDetails(response.data);
	                          	})
	                          	.catch((err)=>{
                                                  alert(err);
	                          	})
	                          }

                              function Add_Click()
                              {
                                   Redirect('/Account_master_for_showroom/add');
                              }

                              function Delete_Click(id)
                              {
                                
                                    axios.delete(`https://garage-backend-8rs3.onrender.com/DeleteAccountFromMaster/${id}`)
                                    .then((response)=>{
                                                       GetAccountDetails();
                                    })
                                    .catch((err)=>{

                                    })
                              }
                              function Edit_Click(id)
                              {     
                                    Redirect(`/Account_master_for_showroom/${id}`);     
                              }

	                          
	                        return(<div className="container-fluid">
                                   
                                   <header class="text-start">ACCOUNT DETAILS</header>

                                   <div className="row mechdetail mb-3">
                                       <div className="col-lg-8 col-md-12 col-sm-12 col-12 mb-2">
                                           <input type="text" className="form-control" Placeholder="Type here to search"/>
                                       </div>
                                       <div className="col-lg-2 col-md-3 col-sm-3 col-6 mx-col-2">
                                           <input type="button"  className="btn btn-secondary w-100 fw-bold" value="Search"/>
                                       </div>
                                        <div className="col-lg-2 col-md-3 col-sm-3 col-6 ml-col-2 ">
                                           <input type="button" className="btn btn-primary w-100 fw-bold" value="Add New" onClick={Add_Click}/>
                                       </div>
                                   </div>


                                    <div className="table-responsive">
                                           <table class="table  table-bordered table-striped">
                                              <thead>
                                                   <tr>
                                                      <th>Account Name</th>
                                                      <th>Mobile No.</th>
                                                      <th>Opening Balance</th>
                                                      <th>Account Number</th>
                                                      <th>Action</th>
                                                   </tr>
                                             </thead>
                                            <tbody>
                                                      {
                                                    InvoiceDetails.length>0
                                                    ?
                                                    InvoiceDetails.map((option)=>
                                                         <tr>
                                                              <td>{option.Account_Name}</td>
                                                              <td>{option.AcMobileNo}</td>
                                                              <td>{option.Opening_Balance}</td>
                                                              <td>{option.AccountNo}</td>
                                                              
                                                              <td>
                                                                 <button class="btn btn-danger fw-bold" onClick={()=>Delete_Click(option._id)}>Delete</button>
                                                                 <button class="btn btn-success mx-2 fw-bold" onClick={()=>Edit_Click(option._id)}>Edit</button>
                                                                                            
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
export default AccountMasterView;
import React,{useEffect} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const Sales_Invoice_For_Vehicle_Ledger=()=>{
	                                         var [Account,setAccountName]=React.useState([]);
			                                   useEffect(()=>{
			                                   	              GetAccountName();
			                                                
			                                             },[])
	                                         var [PurchaseDetails,setPurchaseDetails]=React.useState([]);
	                                         var Redirect=useNavigate();
	                                        function Add_Click()
			                               {
			                               	Redirect('/Vehicle_Sale_Invoice');
			                               }

	                               function Delete_click(id)
	                               {
                                        //alert(id);
                                        axios.delete(`https://garage-backend-8rs3.onrender.com/DeletePurchaseVoucher/${id}`)
                                        .then((response)=>{

                                        })
                                        .catch((error)=>{

                                        })
	                               }
		                            function GetAccountName()
		                            {
	                                     axios.get('https://garage-backend-8rs3.onrender.com/CustomerBind')
	                                     .then((res)=>{
	                                                   setAccountName(res.data);
	                                     })
	                                     .catch((err)=>{

	                                     })
		                            }

	                               function Edit_Click(id)
	                               {
                                        
                                        //Redirect(`/VehiclePurchase/${id}`);
	                               }

	                                 function GatePass_Click(id)
	                               {
                                        
                                        //Redirect(`/VehiclePurchase/${id}`);
	                               }
	                                function onselectionChanged(event)
                                   {
                                   	
                                   	var id=event.target.value;
                                   	 
                                   	   BindGrid(id);
                                   }
                                   function BindGrid(id)
                                   {
                                   	      
                                          axios.get(`https://garage-backend-8rs3.onrender.com/BindSalesLedger/${id}`)
                                          .then((res)=>{
                                                        setPurchaseDetails(res.data);
                                          })
                                          .catch((err)=>{

                                          })
                                   }
	                           
	                                         
	                                    return(
	                                    	   <div className="container-fluid">
	                               	                    <header class="text-start">SALES ACCOUNT LEDGER</header>

		                               	       <div className="row mechdetail mb-3">
			                                       <div className="col-lg-10 col-md-12 col-sm-12 col-12 mb-2">
			                                           <select className="form-control"  onChange={(e)=>onselectionChanged(e)}>
                                                                <option>Select Sales Account</option>
                                                                 {
	                   	                                           	Account.map((open)=>(
	                   	                                           		        <option value={open._id}>
	                   	                                           		                   {open.Account_Name}
	                   	                                           		        </option>
	                   	                                           	))
	                   	                                          }  
			                                           </select>
			                                       </div>
			                                      
			                                        <div className="col-lg-2 col-md-3 col-sm-3 col-6 ml-col-2">
			                                           <input type="button" className="btn btn-primary w-100 fw-bold" onClick={Add_Click} value="Add New"/>
			                                       </div>
	                                           </div>  

	                                           <div className="table-responsive">
	                                                 <table class="table table-bordered table-striped">
	                                                         <thead>
	                                                                <th>Date</th>
	                                                                <th>Invoice No.</th>
	                                                                <th>Type</th>
	                                                                <th>Debit Amount</th>
	                                                                <th>Credit Amount</th>
	                                                                <th>Remaining Balance</th>
	                                                                <th>Action</th>
	                                                         </thead>
	                                                         <tbody>
	                                                                {
	                                                                 PurchaseDetails.length>0
	                                                                 ?
	                                                                  PurchaseDetails.map((value)=>
                                                                            <tr>
                                                                                <td>{value.SalesInvnDate}</td>
                                                                                <td>{value.SalesInvn}</td>
                                                                                <td>{value.Type}</td>
                                                                                <td>{value.PurchaseAmt?value.PurchaseAmt:"0"}</td>
                                                                                <td>{value.DebitAmt?value.DebitAmt:"0"}</td>
                                                                                <td>{value.Pending_Amt}</td>
                                                                                <td>
			                                                                         <input type="button" className="btn btn-danger fw-bold" value="Delete" onClick={()=>Delete_click(value._id)} />   
			                                                                         <input type="button" className="btn btn-secondary mx-2 fw-bold" value="Edit" onClick={()=>Edit_Click(value._id)}/>
											         <input type="button" className="btn btn-success mx-2 fw-bold" value="GatePass" onClick={()=>GatePass_Click(value._id)}/>
			                                                                    </td>

                                                                            </tr>                
	                                                                  )
	                                                                 :
	                                                                <h1>No records Found</h1>
	                                                                }
	                                                         </tbody>
	                                                 </table> 

	                                           </div>           

	                               	      </div>
	                                      )
}
export default Sales_Invoice_For_Vehicle_Ledger;

import React,{useEffect} from 'react'
import {useNavigate} from 'react-router-dom';
import axios from 'axios';



const Vehicle_Purchase_Ledger=()=>{
	                                     var [Account,setAccountName]=React.useState([]);
                                   useEffect(()=>{
                                   	              GetAccountName();
                                                
                                   },[])

                                   function onselectionChanged(event)
                                   {
                                   	
                                   	var id=event.target.value;
                                   	 
                                   	   BindGrid(id);
                                   }

                                     function GetAccountName()
	                                {
                                             axios.get('http://localhost:5000/SupplierBind')
                                             .then((res)=>{
                                                           setAccountName(res.data);
                                             })
                                             .catch((err)=>{

                                             })
	                                }
                                   var [PurchaseDetails,setPurchaseDetails]=React.useState([]);
                                   function BindGrid(id)
                                   {
                                          axios.get(`http://localhost:5000/BindPurchaseLedger/${id}`)
                                          .then((res)=>{
                                                        setPurchaseDetails(res.data);
                                          })
                                          .catch((err)=>{

                                          })
                                   }

                                   var Redirect=useNavigate();
	                               function Add_Click()
	                               {
	                               	Redirect('/VehiclePurchase/add');
	                               }

	                               function Delete_click(id)
	                               {
                                        alert(id);
                                        axios.delete(`http://localhost:5000/DeletePurchaseVoucher/${id}`)
                                        .then((response)=>{

                                        })
                                        .catch((error)=>{

                                        })
	                               }

	                               function Edit_Click(id)
	                               {
                                        
                                        Redirect(`/VehiclePurchase/${id}`);
	                               }
	                               return(<div className="container-fluid">
	                               	                    <header class="text-start">PURCHASE ACCOUNT LEDGER</header>

		                               	       <div className="row mechdetail mb-3">
			                                       <div className="col-lg-10 col-md-12 col-sm-12 col-12 mb-2">
			                                           <select className="form-control" onChange={(e)=>onselectionChanged(e)}>
                                                                <option>Select Purchase Account</option>
                                                                {
	                   	                                           	Account.map((open)=>(
	                   	                                           		        <option value={open._id}>
	                   	                                           		                   {open.Account_Name}
	                   	                                           		        </option>
	                   	                                           	))
	                   	                                           }
			                                           </select>
			                                       </div>
			                                      
			                                        <div className="col-lg-2 col-md-3 col-sm-3 col-6 ml-col-2 ">
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
                                                                                <td>{value.SupplierInvnDate}</td>
                                                                                <td>{value.SupplierInvn}</td>
                                                                                <td>{value.Type}</td>
                                                                                <td>{value.PurchaseAmt?value.PurchaseAmt:"0"}</td>
                                                                                <td>{value.DebitAmt?value.DebitAmt:"0"}</td>
                                                                                <td>{value.Pending_Amt}</td>
                                                                                <td>
			                                                                         <input type="button" className="btn btn-danger fw-bold" value="Delete" onClick={()=>Delete_click(value._id)} />   
			                                                                         <input type="button" className="btn btn-success mx-2 fw-bold" value="Edit" onClick={()=>Edit_Click(value._id)}/>   
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
export default Vehicle_Purchase_Ledger;

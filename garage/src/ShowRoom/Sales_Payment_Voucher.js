import React,{useEffect} from 'react';
import axios  from 'axios';
import {useNavigate} from 'react-router-dom';

const Sales_Payment_Voucher=()=>{
	                                var Redirect=useNavigate();
	                                useEffect(()=>{
                                                   GetAccountName();
	                                },[])
	                                  var [Payment,setPayment]=React.useState([{
                                                      	                      SalesInvnDate:"",SalesInvn:"",
                                                      	                      DebitAmt:"",
                                                      	                      CustomerName:"",
                                                      	                      PurchaseAmt:"",
                                                      	                      Pending_Amt:"",Type:"Payment",
                                                                               }]);
	                                  var [childPayment,setChildPayment]=React.useState([{
	                                  	                              SalesInvnDate:"",SalesInvn:"",
                                                      	                      DebitAmt:"",
                                                      	                      CustomerName:"",
                                                      	                      PurchaseAmt:"",
                                                      	                      Pending_Amt:"",Type:"Payment",

	                                  }])
                                    var [Account,setAccountName]=React.useState([]);
                                    var [AccountDetails,setAccountDetails]=React.useState([]);
                                    var total=0;
                                    // var totalPending= AccountDetails.length ? AccountDetails.reduce((sum, option) => sum + option.Pending_Amt, 0)
                                                            // : 0;
                                     var updaterows="";
                                                         
	                                function GetAccountName()
	                                {
                                     axios.get('https://garage-backend-8rs3.onrender.com/CustomerBind')
                                     .then((res)=>{
                                             setAccountName(res.data);
                                      })
                                      .catch((err)=>{

                                      })
	                                }

	                                function AccountChanged(event)
	                                {
                                          var account=event.target.value;
                                          updaterows=Payment.map(row=>{
                                          	                           return{
                                          	                           	...row,
                                          	                           	CustomerName:account
                                          	                           }
                                          });
                                          setPayment(updaterows);
                                          axios.get(`https://garage-backend-8rs3.onrender.com/InvoiceBindForSales/${account}`)
                                          .then((res)=>{
                                                        setAccountDetails(res.data); 
                                                        document.getElementsByName('Pending_Amt')[0].value=res.data[2].Total;
                                                        var totalvalue=res.data[2].Total;
                                                        localStorage.setItem("total",totalvalue);
                                          })
                                          .catch((err)=>{

                                          })
	                                }
	                                function AdjustInvoiceChanged(event)
	                                {
	                                	             
                                                  var amt=event.target.options[event.target.selectedIndex].text;
                                                  var divide=amt.split('|')[0];
                                                  var divide2=amt.split('|')[1];
                                                  var invnamt=divide.split(':')[1];
                                                  var invnamt2=divide2.split(':')[1];
                                                  
                                                  var adjamt=document.getElementsByName('DebitAmt')[0].value;
                                                  var adjustment=Number(invnamt2)-Number(adjamt); 
                                                        
                                                  var Remaining=localStorage.getItem("total");
                                                  document.getElementsByName('Pending_Amt')[0].value=Number(Remaining)-Number(adjamt);
                                                  updaterows = Payment.map(row=>{
                                                  	             return{
                                                  	             	      ...row,
                                                  	             	      SalesInvn:divide.split(':')[1],
                                                  	             	      Pending_Amt:Number(invnamt2)
                                                  	             }
                                                  })
                                                  setPayment(updaterows);
	                                }

	                                function selectionChanged(event){
	                                	   var {name,value}=event.target;
	                                	   setChildPayment(prev=>({...prev,[name]:value}));

	                                }
	                                     


	                                function Save_Click()
	                                {
	                                	var newdata = Object.values(childPayment);
	                                	console.log(newdata);
	                                	var update=Payment.map(row=>{
	                                		                           return{
	                                		                           	   ...row,
	                                		                           	   SalesInvnDate:newdata[1] ?? '',
	                                		                           	   SalesInvn:newdata[2] ?? '',
	                                		                           	   DebitAmt:newdata[3] ?? '',
	                                		                           	   PurchaseAmt:'',
	                                		                           	   Type:'Payment',
	                                		                           	   Payment_Type:'cash'
	                                		                           }
	                                	})
	                               
	                                	axios.post('https://garage-backend-8rs3.onrender.com/SalesPaymentVoucher',update)
	                                	.then((res)=>{
	                                		              if(res.data == "ok")
	                                		              {
	                                		              	alert("Save Payment Successfully");
                                                                        Redirect('/Sales_Invoice_For_Vehicle_Ledger');
	                                		              }
	                                		              else{
	                                		              	alert(res.data);
	                                		              }
                                                   
	                                	})
	                                	.catch((err)=>{

	                                	})
	                                	console.log(update);
	                                }

	                                   function Exit_Click()
	                                   {
                                           Redirect('/Sales_Invoice_For_Vehicle_Ledger');
	                                   }
	                                   const handleKeyPress = (e) => {
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
	                                            <header class="text-start">SALES PAYMENT VOUCHER</header>

	                                            <div className="row">
	                                                  <div className="col-md-3">
	                                                        <label>Voucher Date</label>
	                   	                                    <input type="date" name="SalesInvnDate" onChange={selectionChanged} className="form-control"/>
	                                                  </div>

	                                                  <div className="col-md-3">
	                                                        <label>Voucher No.</label>
	                   	                                    <input type="text" name="SalesInvn" onChange={selectionChanged} className="form-control"/>
	                                                  </div>

	                                                  <div className="col-md-3">
	                                                        <label>Account Name</label>
	                   	                                    <select className="form-control" name="CustomerName" onChange={AccountChanged}>
	                   	                                            <option>Select Account Name</option>
	                   	                                          {
	                   	                                           	Account.map((open)=>(
	                   	                                           		        <option value={open._id}>
	                   	                                           		                   {open.Account_Name}
	                   	                                           		        </option>
	                   	                                           	))
	                   	                                           }
	                   	                                    </select>
	                                                  </div>

	                                                  <div className="col-md-3">
	                                                       <label>Amount</label>
	                                                       <input type="Number" className="form-control" onChange={selectionChanged} name="DebitAmt"/>
	                                                 </div>
   
	                                            </div>

	                                            <div className="row">

	                                                  <div className="col-md-3">
	                                                        <label>Adjust Invoice Amount</label>
	                   	                                    <select className="form-control" onChange={AdjustInvoiceChanged}>
                                                                    <option>Select Invoice</option>
                                                                    {
                                                                    	AccountDetails.map((option)=>(
                                                                                      <option value={option._id}>{`Invn No:${option.SalesInvn} | AMT:${option.Pending_Amt}`}</option>
                                                                    	))
                                                                    }
                                                                    
	                   	                                    </select>
	                                                  </div>
	                                                 
	                                                 <div className="col-md-3">
	                                                       <label>Payment Type</label>
	                                                       <select className="form-control"  onChange={selectionChanged}>
                                                                   <option>Select Payment Type</option>
                                                                   <option>UPI</option>
                                                                   <option>Cheque</option>
                                                                   <option>Cash</option>
	                                                       </select>
	                                                 </div>

	                                                 <div className="col-md-3">
	                                                       <label>Cheque No</label>
	                                                       <input type="text" name="Cheque_No" onChange={selectionChanged} className="form-control" disabled/>
	                                                 </div>

	                                                 <div className="col-md-3">
	                                                       <label>Bank Name</label>
	                                                       <input type="text"  onChange={selectionChanged} onKeyPress={handleKeyPress} className="form-control"/>
	                                                 </div>         

	                                            </div>  

	                                            <div className="row">
	                                                   <div className="col-md-3">
	                                                       <label>Remaining Amount</label>
	                                                     
	                                                       	 	   <input type="Number" name="Pending_Amt"  onChange={selectionChanged} className="form-control" disabled/>
	                                                       	 
                                                              
                                                                 
                                                          
	                                                       
	                                                 </div>
	                                            </div>

	                                             <div className="row mt-2">                  
				                   	                    <div className="offset-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 d-flex justify-content-end ">
				                   	                         <input type="button" className="btn btn-success add" onClick={Save_Click} value="Save"/>
				                   	                         <input type="button" className="btn btn-danger add mx-2" value="Exit" onClick={Exit_Click}/>
				                   	                    </div>             
	                   	                         </div>  
	                                       </div>
	                                	   )
	                                
}

export default Sales_Payment_Voucher;

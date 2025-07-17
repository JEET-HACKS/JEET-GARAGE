import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const Vehicle_Sale_Invoice=()=>{
	                       var Redirect=useNavigate();
	                       var textBoxesIds=["SalesInvn","SalesInvnDate",
	                       	                 "CustomerName","StaffName",
	                       	                 "VehicleNo"];

	                       
	                       var [Purchase,setPurchaseInvoice]=React.useState([{
                                                      	                      SalesInvn:"",SalesInvnDate:"",
                                                      	                      CustomerName:"",
                                                      	                      VehicleNo:"",VehicleBrandName:"",
                                                      	                      ModelName:"",Variant:"",VehicleColor:"",TAmount:"",
                                                      	                      GstPer:"",GSTAmt:"",CgstAmt:"",SgstAmt:"",
                                                      	                      CessPer:"",CessAmt:"",TaxAmt:"",TcsPer:"",
                                                      	                      TCSAmt:"",PurchaseAmt:"",SalesPrice:"",PaymentStatus:"Pending",
                                                      	                      Pending_Amt:"",Type:"Sale"
                                                                               }]);
	                       var [InvoiceDetails,setInvoiceDetails]=React.useState([]);
                           var [rows,setRows]=React.useState([{id:Date.now(),
                                                                  Model:"",
                                                                  Variant:"",
                                                                  Quantity:"",
                                                                  Price:"",
                                                                  Amount:""}]);
                           var [ChildData,setChildData]=React.useState(Object.fromEntries(textBoxesIds.map(id => [id, ""])));
                           var [Vehicle,setVehicle]=React.useState([]);
                           var [FinalTotal,setFinalTotal]=React.useState([]);
                           var [Account,setAccountName]=React.useState([]);
	                               
                           useEffect(()=>{
                           	              GetAccountName();
                                          VehicleBind();

                           },[])

                            function GetAccountName()
	                                {
                                             axios.get('https://garage-backend-8rs3.onrender.com/CustomerBind')
                                             .then((res)=>{
                                                           setAccountName(res.data);
                                             })
                                             .catch((err)=>{

                                             })
	                                }
                           
                           function VehicleBind()
                           {
                               axios.get('https://garage-backend-8rs3.onrender.com/GetVehicleBind')
                               .then((response)=>{
                                                  setVehicle(response.data);      
                               })
                               .catch((err)=>{
                                                  alert(err);
                               })  
                           }

                           function  handleChange(event){
                                   var selectionvalue=event.target.value;
                                   
                                   axios.get(`https://garage-backend-8rs3.onrender.com/GetSalesVehicleFuntion/${selectionvalue}`)
                                   .then((response)=>{ 
                                                      var vehicle=response.data[0]; 
                                                      
                                                      var {name,value}=event.target;
                                                          console.log(Purchase);
                                              var updaterows = Purchase.map(row => {
																  return {
																    ...row,
																    ModelName: vehicle.ModelName, // Make sure 'vehicle' is defined
																    Variant: vehicle.Variant,
																    VehicleColor:vehicle.VehicleColor,
																    SalesPrice:vehicle.SalesPrice,
																    VehicleBrandName:selectionvalue
																  };
																});
                                                   setPurchaseInvoice(updaterows);
                                                     
                                                     {/* setPurchaseInvoice((prev) => ({
                                                                              ...prev,
                                                                              [name]: value,
                                                                              ModelName: vehicle.ModelName // This will directly update the ModelName value
                                                                                    }));  
                                                       Purchase.map(row =>{
                                                       	                 ...row,
                                                      	      	  	     [name]: value,
                                                                         ModelName: row.ModelName
                                                       })   
                                                       */}    
                                               {/*  var updaterows= 	rows.map(row =>{
                                                      	      if(row.id === id)
                                                      	      {
                                                      	      	
                                                      	      	  return{
                                                      	      	  	     ...row,
                                                      	      	  	     id:id,
                                                      	      	  	     Model:vehicle.ModelName,
                                                                         Variant:vehicle.Variant,
                                                                         Quantity:"",
                                                                         Price:vehicle.ExShowRoomPrice

                                                      	      	  };
                                                      	      }
                                                      	      return row;
                                                      })
                                                 
                                                 {
                                                 	  setRows(updaterows);
                                                 } */}

                                                    
                                   })
                                   .catch((err)=>{
                                                      alert(err);
                                   })
                           }


	                       

                           function Add_click(){
                           	                   setRows([...rows,{id:Date.now(),Model:"",Variant:"",Quantity:"",Price:"",Amount:""}]);
                           }

                           const DeleteRow=(id)=>{                        
                           
                           	var filteredRow=setRows(rows.filter((row)=>row.id !== id));    


                           }

                           const handleInputChange=(e,id,field,qty,price)=>{
                                      e.target.value=qty;
                           	          var Total=rows.map(row =>{
                           	          	    if(row.id == id)
                           	          	    {
                                                row.Quantity=qty;
                           	          	    	row.Amount=Number(qty)*Number(price);
                                                
                           	          	    }
                           	          	    return row;
                           	          });
                                      console.log(Total);
                           	          setRows(Total);

                           	          UpdateTotal(Total);
                                          
                           }
                          const UpdateTotal=(Total)=>{
                          	        var TotalAmount=Total.reduce((acc,row)=>acc+row.Amount,0);
                                    setFinalTotal(TotalAmount);

                          }// for the total of price * quantity it is works as 0+100=100,100+100=200

                          const ChangeQty=(event)=>{
                          	                        var qty=event.target.value;
                          	                         var updaterows = Purchase.map(row => {
																  return {
																    ...row,
																  
																    TAmount: Number(qty)*Number(row.SalesPrice),
																   
																  };
																});
                                setPurchaseInvoice(updaterows);


                          }
                          const GstChange=(event)=>{
                          	
                          	                         var gstper=event.target.value;

                          	                         var updaterows = Purchase.map(row => {
																  return {
																    ...row,
																    GSTAmt: (Number(row.TAmount)*Number(gstper))/100,
																    CgstAmt:Number((Number(row.TAmount)*Number(gstper))/100)/2,
																    SgstAmt:Number((Number(row.TAmount)*Number(gstper))/100)/2,
																    GstPer:Number(gstper)
																   
																  };
																});
                                                   setPurchaseInvoice(updaterows);

                          }
                          const CessChange=(event)=>{
                          	                         


                          	                        var cessper=event.target.value;

                          	                         var updaterows = Purchase.map(row => {
																  return {
																    ...row,
																    CessAmt:Number(Number(row.TAmount)*Number(cessper))/100,
																    CessPer:Number(cessper),
																    TaxAmt:Number(row.GSTAmt+row.CessAmt+row.TAmount)
																  };
																});
                                                   setPurchaseInvoice(updaterows);
                          }

                          const TcsChange=(event)=>{

                          	                        var tcsper=event.target.value;

                          	                         var updaterows = Purchase.map(row => {
																  return {
																    ...row,
																    TCSAmt:Number(Number(row.TaxAmt)*Number(tcsper))/100,
																    PurchaseAmt:Number(row.GSTAmt+row.CessAmt+row.TAmount)+Number(Number(row.TaxAmt)*Number(tcsper))/100,
																    TcsPer:Number(tcsper),
                                    Pending_Amt:Number(row.GSTAmt+row.CessAmt+row.TAmount)+Number(Number(row.TaxAmt)*Number(tcsper))/100
																    
																  };
																});
                                                   setPurchaseInvoice(updaterows);

                          }

                            const selectionChange=(e)=>{
                            	
                                                         var{name,value}=e.target;
                                                          setChildData(prev=>({ ...prev,[name]:value}))
                                                         
                                                             

	                                                   }
                            const Save_Click=()=>{
                              
                            	var newdata = Object.values(ChildData);
                            	{/*change object data to array format*/}
                                console.log(newdata);
                            	var	update=Purchase.map(row => {
														    return {
														      ...row,
														      SalesInvn:newdata[0],
														      SalesInvnDate:newdata[1],
														      CustomerName:newdata[2],
														      StaffName:newdata[3],
														      VehicleNo:newdata[4],
													              Payment_Type:'its invoice',
														      DebitAmt:'0'
														    };
														});
                            	setPurchaseInvoice(update);
                            	
                                  {/*
                                  var purchase_data=Object.fromEntries(Purchase);
                                  console.log(purchase_data);
                                     */}
                                   axios.post('https://garage-backend-8rs3.onrender.com/SaveVehicleSales',update)
                                   .then((res)=>{
                                                  alert(res.data);
                                                  if(res.data == "ok")
                                                  {
                                                  	alert("Sales Saved Successfully");
                                                  	Redirect('/Sales_Invoice_For_Vehicle_Ledger');
                                                  }
                                                  else{
                                                  	alert(res.data);
                                                  }
                                   })
                                   .catch((err)=>{

                                   })

                            	  // var cessper="";
                            	    
			                    //                 newdata.map((child, index) => {
								// 											  return Purchase.map(row => {
								// 											    return {
								// 											      ...row,
								// 											      SupplierInvn: child[index],
								// 											      CessPer: Number(child.cessper),
								// 											      TaxAmt: Number(row.GSTAmt + row.CessAmt + row.TAmount),
								// 											    };
								// 											  });
                                //}).flat();

                                }
                                function Exit_Click()
                                {
                                          Redirect('/Sales_Invoice_For_Vehicle_Ledger');
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
                                                      if (e.target.name == "Qty" ||   e.target.name === "TcsPer" ||   e.target.name === "CessPer" ) {
                                                        // Allow only digits
                                                        
                                                        if (!/^\d$/.test(key)) {
                                                          e.preventDefault();
                                                        }
                                                      }

                                                      if (e.target.name == "StaffName" || e.target.name == "Variant" || e.target.name == "Color"  || e.target.name == "StaffName" || e.target.name == "Reviews"  ) {
                                                        
                                                        // Allow only letters and space
                                                        if (!/^[a-zA-Z ]$/.test(key)) {
                                                          e.preventDefault();
                                                        }
                                                      }

                                                      // Add other fields as needed
                                                    };                    




	                       return(
	                       	      <div className="container-fluid text-left">
	                       	           <header class="text-start">VEHICLE SALES INVOICE MASTER</header>

	                   	           <div className="container-fluid">
	                   	                <div className="row">
	                   	                
	                   	                    <div className="col-xl-3 col-lg-6 col-md-12">
	                   	                         <label>Sales Invoice No</label>
	                   	                         <input type="text" name="SalesInvn" onChange={selectionChange} className="form-control"/>
	                   	                    </div>
	                   	                    <div className="col-xl-3 col-lg-6 col-md-12">
	                   	                         <label>Sales Invoice Date</label>
	                   	                         <input type="date" name="SalesInvnDate"  onChange={selectionChange} className="form-control"/>
	                   	                    </div>
	                   	                    <div className="col-xl-3 col-lg-6 col-md-12">
	                   	                         <label>Account Name</label>
	                   	                          <select className="form-control" name="CustomerName" onChange={selectionChange}>
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
	                   	                    <div className="col-xl-3 col-lg-6 col-md-12">
	                   	                          <label>Vehicle No.</label>
	                   	                         <input type="text"   name="VehicleNo" onChange={selectionChange} className="form-control"/>
	                   	                    </div>
	                   	                </div>

	                   	                <div className="row">
	                   	                    <div className="col-xl-3 col-lg-6 col-md-12">
	                   	                          <label>Staff Name</label>
	                   	                         <input type="text" name="StaffName" onChange={selectionChange} onKeyPress={handleKeyPress} className="form-control"/>
	                   	                    </div>
	                   	                    <div className="col-md-3">
	                   	                         
	                   	                    </div>
	                   	                    <div className="col-md-3">
	                   	                         
	                   	                    </div>
	                   	                    <div className="col-md-3">
	                   	                         
	                   	                    </div>
	                   	                </div>

	                   	                <div className="row mt-3">
	                   	                       <header class="text-start">VEHICLE DETAILS</header>
	                   	                </div>

	                   	                <div className="row">
	                   	                      <div className="col-xl-3 col-lg-6 col-md-12">
	                   	                            <label>Vehicle</label>
	                   	                            <select name="VehicleBrandName" onChange={(e)=>handleChange(e)} className="form-control">
		                                                    <option>Select Vehicle</option>
		                                                    {
                                                          	Vehicle.map((option)=>(    
                                                                  <option value={option._id}>
                                                                          {option.VehicleBrandName}
                                                                  </option>
                                                          		))
		                                                    }
		                                                                
		                                            </select>
		                                             
	                   	                      </div>

	                   	                      <div className="col-xl-3 col-lg-6 col-md-12">
	                   	                            <label>Model Name</label>
    	                   	                            {
                      													    Purchase.length > 0 ? 

                      													      // If there are items in Purchase, render a list of input fields for each row
                      													      Purchase.map((row, index) => (
                      													        <input 
                      													        
                      													          type="text" 
                      													          name="ModelName" 
                      													          value={row.ModelName}  
                      													          className="form-control bg-light" 
                      													          disabled
                      													        />
                      													      ))
                      													      :
                      													       <input 
                      													        
                      													          type="text" 
                      													          name="ModelName" 
                      													          value=""
                      													          className="form-control bg-light" 
                      													          disabled
                      													        />
													   
                                                        }
	                   	                            
	                   	                           
	                   	                      </div>
	                   	                       <div className="col-xl-3 col-lg-6 col-md-12">
	                   	                            <label>Variant</label>
	                   	                             {
                      													    Purchase.length > 0 ? 

                      													      // If there are items in Purchase, render a list of input fields for each row
                      													      Purchase.map((row, index) => (
                      													        <input type="text" name="Variant" value={row.Variant}   className="form-control bg-light" disabled/>
                      													      ))
                      													      :
                      													      <input type="text" name="Variant" value=""  className="form-control bg-light" disabled/>
													   
                                                    }
	                   	                            
	                   	                      </div>
	                   	                       <div className="col-xl-3 col-lg-6 col-md-12">
	                   	                            <label>Color</label>
	                   	                                                {
                      												  	    Purchase.length > 0 ? 

                      													      // If there are items in Purchase, render a list of input fields for each row
                      													      Purchase.map((row, index) => (
                      													          <input type="text" name="VehicleColor" value={row.VehicleColor} className="form-control"/>
                      													      ))
                      													      :
                      													      <input type="text" name="VehicleColor" value=""   className="form-control bg-light" disabled/>
													   
                                                    }
	                   	                           
	                   	                      </div>

	                   	                     
	                   	                </div>

	                   	                <div className="row">
	                   	                       <div className="col-xl-3 col-lg-6 col-md-12">
	                   	                            <label>Qty</label>
	                   	                            <input type="text" name="Qty"  onChange={ChangeQty} onKeyPress={handleKeyPress} className="form-control bg-light"/>
	                   	                      </div>
	                   	                      <div className="col-xl-3 col-lg-6 col-md-12">
	                   	                            <label>Ex-Showroom Price</label>
	                   	                            {
	                   	                              Purchase.length > 0 ? 

                    													      // If there are items in Purchase, render a list of input fields for each row
                    													      Purchase.map((row, index) => (
                    													         
                    													          <input type="text" name="SalesPrice" value={row.SalesPrice} className="form-control bg-light" disabled/>
                    													      ))
                    													      :
                    													      <input type="text" name="SalesPrice" value="" className="form-control bg-light" disabled/>
	                   	                            }
													   
                                                    
	                   	                            
	                   	                      </div>
	                   	                </div>

	                   	             {/*  <div className="row mt-3">
	                   	                     <div className="table-responsive">
	                   	                           <table class="table table-bordered table-striped">
				                   	                     <thead>
			                                                   <tr>
			                                                      <th style={{'width':'400px'}}>Vehicle Name</th>
			                                                      <th>Model Name</th>
			                                                      <th>Variant</th>
			                                                      <th>Color</th>
			                                                      <th>Quantity</th>
			                                                      <th>SalesPrice</th>
			                                                      <th>Amount</th>
			                                                      <th>Action</th>
			                                                   </tr>
			                                             </thead>
			                                             <tbody>

			                                             {
			                                             	rows.map((row,index)=>(
                                                                <tr key={row.id}>
		                                                              <td>
		                                                                  <select onChange={(e)=>handleChange(e,row.id)} className="form-control">
		                                                                      <option>Select Vehicle</option>
		                                                                  {
		                                                                  	Vehicle.map((option)=>(    
				                                                                          <option value={option._id}>
				                                                                                                     {option.VehicleBrandName}
				                                                                          </option>
		                                                                  		))
		                                                                  }
		                                                                  </select>
		                                                                  
		                                                              </td>
		                                                              <td><input type="text" value={row.Model}  className="form-control bg-light" disabled/></td>
		                                                              <td><input type="text" value={row.Variant} className="form-control bg-light" disabled/></td>
		                                                              <td><input type="text" value={row.Variant} className="form-control bg-light" disabled/></td>
		                                                              <td><input type="text" onChange={(e) => handleInputChange(e,row.id, "Qty", e.target.value,row.Price)} className="form-control"/></td>
		                                                              <td><input type="text" value={row.Price} onChange={(e) => handleInputChange(row.id, "Price", e.target.value)}  className="form-control bg-light" disabled/></td>
		                                                              <td><input type="text" value={row.Amount}   className="form-control bg-light" disabled/></td>          
		                                                              <td>
		                                                                 <button class="btn btn-danger fw-bold" onClick={()=> DeleteRow(row.id)}>Delete</button>
		                                                              </td>
				                                                </tr>
				                                                
			                                             	))}

			                                             	<tr>
			                                                     <td>
	                                                                 <button class="btn btn-default fw-bold w-100" onClick={Add_click}>Add New</button>
	                                                            </td>
				                                            </tr>         
							                                     
			                                             </tbody>
	                   	                           </table>
	                   	                     </div>

	                   	                </div>
	                   	                */} 

	                   	                 <div className="row mt-3">
	                   	                       <header class="text-start">AMOUNT DETAILS</header>
	                   	                </div>

	                   	                <div className="row">
	                   	                    <div className="col-xl-3 col-lg-6 col-md-12">
	                   	                         <label>Total Amount</label>
	                   	                             {
	                   	                              Purchase.length > 0 ? 

                    													      // If there are items in Purchase, render a list of input fields for each row
                    													      Purchase.map((row, index) => (
                    													         
                    													         
                    													          <input type="text" name="TAmount" value={row.TAmount} className="form-control bg-light" disabled/>
                    													      ))
                    													      :
                    													      <input type="text" name="TAmount" value="" className="form-control bg-light" disabled/>
	                   	                            }
	                   	                         
	                   	                    </div>
	                   	                    <div className="col-xl-3 col-lg-6 col-md-12">
	                   	                         <label>GST%</label>
	                   	                         <select name="GstPer"  onChange={(e)=>GstChange(e)} className="form-control">
	                   	                                  <option>Select GST%</option>
	                   	                                  <option>28</option>
	                   	                                  <option>18</option>
	                   	                         </select>
	                   	                    </div>
	                   	                    <div className="col-xl-3 col-lg-6 col-md-12">
	                   	                         <label>GST Amount</label>
	                   	                           {
	                   	                              Purchase.length > 0 ? 

                    													      // If there are items in Purchase, render a list of input fields for each row
                    													      Purchase.map((row, index) => (       
                    													          <input type="text" name="GSTAmt"  value={row.GSTAmt} className="form-control bg-light" disabled/>
                    													      ))
                    													      :
                    													      <input type="text" name="GSTAmt"  value="" className="form-control bg-light" disabled/>
	                   	                            }
	                   	                         
	                   	                    </div>
	                   	                    <div className="col-xl-3 col-lg-6 col-md-12">
	                   	                         <label>CGST Amount</label>
	                   	                          {
	                   	                              Purchase.length > 0 ? 

                    													      // If there are items in Purchase, render a list of input fields for each row
                    													      Purchase.map((row, index) => (
                    													         
                    													            <input type="text" name="CgstAmt"  value={row.CgstAmt} className="form-control bg-light" disabled/>
                    													          
                    													      ))
                    													      :
                    													      <input type="text" name="CgstAmt"  value="" className="form-control bg-light" disabled/>
	                   	                            }
	                   	                       
	                   	                    </div>
	                   	                </div>

	                   	                <div className="row">
	                   	                    <div className="col-xl-3 col-lg-6 col-md-12">
	                   	                         <label>SGST Amount</label>
	                   	                                             {
	                   	                              Purchase.length > 0 ? 

                    													      // If there are items in Purchase, render a list of input fields for each row
                    													      Purchase.map((row, index) => (
                    													         
                    													            <input type="text" name="SgstAmt"  value={row.SgstAmt} className="form-control bg-light" disabled/>
                    													          
                    													      ))
                    													      :
                    													      <input type="text" name="SgstAmt"  value="" className="form-control bg-light" disabled/>
	                   	                            }
	                   	                         

	                   	                    </div>
	                   	                    <div className="col-xl-3 col-lg-6 col-md-12">
	                   	                         <label>Cess%</label>
	                   	                         <input type="text" name="CessPer" onChange={(e)=>CessChange(e)} onKeyPress={handleKeyPress} className="form-control"/>
	                   	                    </div>
	                   	                    <div className="col-xl-3 col-lg-6 col-md-12">
	                   	                         <label>Cess Amount</label>
	                   	                          {
	                   	                              Purchase.length > 0 ? 

                    													      // If there are items in Purchase, render a list of input fields for each row
                    													      Purchase.map((row, index) => (
                    													         
                    													          <input type="text" name="CessAmt" value={row.CessAmt} className="form-control bg-light" disabled/>
                    													      ))
                    													      :
                    													      <input type="text" name="CessAmt" value="" className="form-control bg-light" disabled/>
	                   	                            }
	                   	                         
	                   	                    </div>
	                   	                    <div className="col-xl-3 col-lg-6 col-md-12">
	                   	                         <label>Tax Amount</label>
	                   	                                           {
	                   	                              Purchase.length > 0 ? 

                    													      // If there are items in Purchase, render a list of input fields for each row
                    													      Purchase.map((row, index) => (
                    													         
                    													          <input type="text" name="TaxAmt" value={row.TaxAmt} className="form-control bg-light" disabled/>
                    													      ))
                    													      :
                    													      <input type="text" name="TaxAmt" value="" className="form-control bg-light" disabled/>
	                   	                            }
	                   	                        
	                   	                    </div>
	                   	                </div>

	                   	                <div className="row">
	                   	                    <div className="col-xl-3 col-lg-6 col-md-12">
	                   	                         <label>TCS%</label>
	                   	                         <input type="text" name="TcsPer" onChange={(e)=>TcsChange(e)} onKeyPress={handleKeyPress} className="form-control"/>
	                   	                    </div>
	                   	                    <div className="col-xl-3 col-lg-6 col-md-12">
	                   	                         <label>TCS Amount</label>
	                   	                                      {
	                   	                              Purchase.length > 0 ? 

                    													      // If there are items in Purchase, render a list of input fields for each row
                    													      Purchase.map((row, index) => (
                    													         
                    													          <input type="text" name="TCSAmt" value={row.TCSAmt} className="form-control bg-light" disabled/>
                    													      ))
                    													      :
                    													      <input type="text" name="TCSAmt" value="" className="form-control bg-light" disabled/>
	                   	                            }
	                   	                       
	                   	                    </div>
	                   	                    <div className="col-xl-3 col-lg-6 col-md-12">
	                   	                         <label>Net Amount</label>
	                   	                                       {
	                   	                              Purchase.length > 0 ? 

                    													      // If there are items in Purchase, render a list of input fields for each row
                    													      Purchase.map((row, index) => (
                    													         
                    													          <input type="text" name="PurchaseAmt" value={row.PurchaseAmt} className="form-control bg-light" disabled/>
                    													      ))
                    													      :
                    													      <input type="text" name="PurchaseAmt" value="" className="form-control bg-light" disabled/>
	                   	                            }
	                   	                        
	                   	                         
	                   	                    </div>
	                   	                    
	                   	                </div>

	                   	                <div className="row mt-2">                  
	                   	                    <div className="offset-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 d-flex justify-content-end ">
	                   	                         <input type="button" className="btn btn-success add" value="Save" onClick={Save_Click}/>
	                   	                         <input type="button" className="btn btn-danger add mx-2" onClick={Exit_Click} value="Exit"/>
	                   	                    </div>             
	                   	                </div>

                                       </div>
	                       	      </div>
	                       	      )
}
export default Vehicle_Sale_Invoice;

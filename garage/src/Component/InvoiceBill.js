import React, {useEffect} from 'react';
import axios from 'axios';
import {useParams, useNavigate} from 'react-router-dom';


const InvoiceBill=()=>{

	               var {id}=useParams();
	               var navigate =useNavigate();
	               const [MechanicName,setMechanic]=React.useState('');
	               var [Entry_date,setEntry_date]=React.useState('');
	               const [CustomerName,setCustomerName]=React.useState('');
	               const [Cust_MobileNo,setCust_MobileNo]=React.useState('');
	               const [Cust_Address,setCust_Address]=React.useState('');
	               const [VehicleNo,setVehicleNo]=React.useState('');
	               const [VehicleCmpy,setVVehicleCmpy]=React.useState('');
	               const [VehicleType,setVehicleType]=React.useState('');
	               const [Vehicle_Color,setVehicle_Color]=React.useState('');
	               const [Mechanic_Name,setMechanic_Name]=React.useState('');
	               const [Service_Type,setService_Type]=React.useState('');
	               var [VehicleClearDate,setVehicleClearDate]=React.useState('');
	               var [InvoiceNo,setInvoice]=React.useState('');
	               var [NetAmt,SetNetAmt]=React.useState('');
	               var [ServiceCost,setServiceCost]=React.useState('');
	               var [InvoiceDate,setInvoiceDate]=React.useState('');
	               var [bind,setbind]=React.useState([]);
	               var [NetAmt,setNetAmt]=React.useState('');
	               var [NETAMT,SETAMT]=React.useState('');
	               var stopper="";

	               useEffect(()=>{
	               	              if(stopper  =="")
	               	              {
	               	              	 GetServiceType();
	               	              	 GetMechanic();
	               	              	 if(id !="add")
	               	              	 {
	               	              	 	  GetInvoiceDetails(id);
	               	              	 }
	               	              	 else{
	               	              	 	  InvoiceN();
	               	              	 }
                                   
	               	              }
	               	              

	               },[]);

	               function InvoiceN()
	               {
	               	axios.get('http://localhost:5000/InvoiceN')
                      .then((response)=>{
                                        setInvoice("INVN"+response.data);
                      })
                      .catch((err)=>{
                                        alert(err);
                      })

	               }

	               function GetServiceType(){
	               	
	               	axios.get('http://localhost:5000/getServices')
                      .then((response)=>{
                                        setbind(response.data);
                      })
                      .catch((err)=>{
                                        alert(err);
                      })
	               }

	               function GetMechanic()
	               {
	                  axios.get('http://localhost:5000/bindmechanicsdetails')
                      .then((response)=>{
                 
                                        setMechanic(response.data);
                       })
                      .catch((err)=>{
                                        alert(err);
                       })
                      //for services bind

                      
                       stopper="stop";
	               }

	               function GetInvoiceDetails(id){
	               	        
	               	        axios.get(`http://localhost:5000/GetVehicleClearDetails/${id}`)
	               	        .then((response)=>{  
                                               var data=response.data[0];
                                               setEntry_date(data.Entry_date);
                                              {/*setInvoice(data.InvoiceNo);*/} 
                                             
                                               setCustomerName(data.CustomerName);
                                               setCust_MobileNo(data.Cust_MobileNo);
                                               setCust_Address(data.Cust_Address);
                                               setVehicleNo(data.VehicleNo);
                                               setVVehicleCmpy(data.VehicleCmpy);
                                               setVehicleType(data.VehicleType);
                                               setVehicle_Color(data.Vehicle_Color);
                                               setMechanic_Name(data.Mechanic_Name);
                                               setService_Type(data.Service_Type);
                                               setVehicleClearDate(data.VehicleClearDate);
                                               var count=0;
                                               var status=localStorage.getItem("status");
                                               {status == "add"
                                                ?
                                                setServiceCost(data.cost.Cost) || setInvoice("INVN"+data.InvNo)
                                                 :
                                                 setServiceCost(data.ServiceCost) || setInvoice(data.InvoiceNo)
                                               }
                                               {status == "edit" ? setServiceCost(data.ServiceCost):setServiceCost(data.cost.Cost) }
                                               {status == "add" ? setNetAmt(data.cost.Cost) :setNetAmt(data.ServiceCost)}
                                               {status == "edit" ? setNetAmt(data.ServiceCost):setNetAmt(data.cost.Cost) }
                                              {/* {data.cost.Cost ? setServiceCost(data.cost.Cost) : setServiceCost(data.ServiceCost)}*/}
                                               // ;
                                               {/*setServiceCost(data.ServiceCost)*/}
                                               setInvoiceDate(data.InvoiceDate);
                                              {/*setNetAmt(data.ServiceCost);*/} 
                                               
	               	        })
	               	        .catch((err)=>{
                                          alert(err);
	               	        })

	               }
	               function Exit_click()
	               {
	               	navigate('/InvoiceView');
	               }

	                const handleMobileChange = (e) => {
                                        let value = e.target.value;
    
                                         // Remove non-numeric characters
                                         value = value.replace(/[^0-9]/g, '');
                                         e.target.value=value;

                                         // If the value length is less than or equal to 10, update the state
                                         if (value.length <= 10) {
                                         setCust_MobileNo(value);
                                         }
                                         };

	               function Save_click()
	               {
	               	     var status=localStorage.getItem("status");
                       axios.post(`http://localhost:5000/AddInvoiceDetails/${id}/${status}`,{
                       	  Entry_date,
                       	  CustomerName,
                       	  Cust_MobileNo,
                       	  Cust_Address,
                       	  VehicleNo,
                       	  VehicleCmpy,
                       	  VehicleType,
                       	  Vehicle_Color,
                       	  Mechanic_Name,
                       	  Service_Type,
                       	  ServiceCost,
                       	  InvoiceNo,
                       	  InvoiceDate,
                       	  NetAmt
                       })
                       .then((response)=>{
                       	                 if(response.data == "ok")
                       	                 {
                       	                 	alert(response.data);
                       	                  navigate("/InvoiceView")
                       	                 }
                       	                 else{
                       	                 	alert(response.data);
                       	                 }
                       })
                       .catch((err)=>{
                                        alert(err);
                       })
	               }
	                  return(
	                  	     <div className="container-fluid text-left">
	                  	          
	                  	           <header class="text-start">INVOICE ENTRY</header>

                            <div className="container-fluid">
	                  	          <div className="row">
	                  	                <div className="col-md-3">
	                  	                      <label>Vehicle Entry Date</label>
	                  	                      <input type="Date" value={Entry_date} onChange={(e)=>setEntry_date(e.target.value)} className="form-control"/>
	                  	                </div>

	                  	                <div className="col-md-3">
	                  	                      <label>Invoice Date</label>
	                  	                      <input type="Date" value={InvoiceDate}  onChange={(e)=>setInvoiceDate(e.target.value)} className="form-control"/>
	                  	                </div>
                                        
                                        <div className="col-md-3">
	                  	                      <label>Invoice No.</label>
	                  	                      <input type="text" value={InvoiceNo} onChange={(e)=>setInvoice(e.target.value)} className="form-control"/>
	                  	                </div>
	                  	                <div className="col-md-3">
	                  	                      <label>Customer Name</label>
	                  	                      <input type="text" value={CustomerName} onChange={(e)=>{var value=e.target.value.replace(/[^a-zA-Z   ]/g, ''); e.target.value=value; setCustomerName(e.target.value)}} className="form-control"/>
	                  	                </div>

	                  	                
	                  	          </div>

	                  	          <div className="row">

	                  	                <div className="col-md-3">
	                  	                      <label>Mobile No</label>
	                  	                      <input type="text" value={Cust_MobileNo} onChange={handleMobileChange} className="form-control"/>
	                  	                </div>

	                  	                <div className="col-md-3">
	                  	                      <label>Vehicle No</label>
	                  	                      <input type="text" value={VehicleNo} onChange={(e)=>setVehicleNo(e.target.value)} className="form-control"/>
	                  	                </div>

	                  	                <div className="col-md-3">
	                  	                      <label>Vehicle Company</label>
	                  	                      <input type="text" value={VehicleCmpy} onChange={(e)=>setVVehicleCmpy(e.target.value)} className="form-control"/>
	                  	                </div>

	                  	                <div className="col-md-3">
	                  	                      <label>Mechanic Name</label>
	                  	                       <select className="form-control" value={Mechanic_Name} onChange={(e)=>setMechanic_Name(e.target.value)}> 
	                 	                           <option>Select Mechanic</option>
	                 	                       {
	                 	                          MechanicName.length>0
	                 	                        ?
	                 	                         MechanicName.map((option) => (
                                                     <option key={option._id} value={option._id}>
                                                              {option.M_Name}
                                                     </option>
                                                 ))
	                 	                         : 	
	                 	                          <h1>no records found</h1>
	                 	                         }
	                 	                        </select>
	                  	                    
	                  	                </div>	                  	                

	                  	                
	                  	          </div>
	                  	          <div className="row">
	                  	                 <div className="col-md-3">
	                  	                    <label>Service Type</label>
	                  	                    <select className="form-control" value={Service_Type} onChange={(e)=>setService_Type(e.target.value)}>
	                  	                    <option>Select Service Type</option>
	                  	                    {
	                  	                    	bind.map((op)=>
                                             
                                                     <option key={op._id} value={op._id}>
                                                             {op.Service_Name}
                                                     </option>
                                             
	                  	                    	)
	                  	                    }
	                  	                    </select>
                                            
	                  	                </div>

	                  	                 <div className="col-md-3">
	                  	                      <label>Service Cost</label>
	                  	                      <input type="text" value={ServiceCost}  onChange={(e)=>{var value=e.target.value.replace(/[^0-9]/g, ''); e.target.value=value; setServiceCost(e.target.value)}}  className="form-control"/>
	                  	                </div>

	                  	                <div className="col-md-3">
	                  	                      <label>Address</label>
	                  	                      <input type="text" value={Cust_Address} onChange={(e)=>setCust_Address(e.target.value)} className="form-control"/>
	                  	                </div>

	                  	                <div className="col-md-3">
	                  	                      <label>VehicleType</label>
	                  	                      <input type="text" value={VehicleType} onChange={(e)=>setVehicleType(e.target.value)} className="form-control"/>
	                  	                </div>

	                  	                 

	                  	                
	                  	          </div>

	                  	          <div className="row">

	                  	                <div className="col-md-3">
	                  	                      <label>Vehicle Color</label>
	                  	                      <input type="text" value={Vehicle_Color}  onChange={(e)=>{var value=e.target.value.replace(/[^a-zA-z    ]/g, ''); e.target.value=value; setVehicle_Color(e.target.value)}} className="form-control"/>
	                  	                </div>
	                  	                
	                  	               <div className="col-md-3">
	                  	                      <label>Net Amount</label>
	                  	                      <input type="number" value={NetAmt}  onChange={(e)=>{var value=e.target.value.replace(/[^0-9]/g, ''); e.target.value=value; setNetAmt(e.target.value)}} className="form-control"/>
	                  	                </div>
	                  	          </div>

	                  	          <div className="row">
	                  	               <div className="col-md-12 d-flex justify-content-end mt-2">       
	                  	                 	                	                            	                 
	                  	                     <input type="button" value="Save" onClick={Save_click} className="btn btn-success add"/> 
	                  	                    <input type="button" value="Exit" onClick={Exit_click} className="btn btn-danger add mx-2"/>
	                  	               </div>
	                  	          </div>
	                  	       </div>   

	                  	     </div>
	                  	     )
}
export default InvoiceBill;
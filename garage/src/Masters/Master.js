import React from 'react';
import axios from 'axios';

const Master_Page=()=>{
                          var textBoxesIds=["PageName","PageIcons",
	                       	                 "Outlet"];
                          var [ChildData,setChildData]=React.useState(Object.fromEntries(textBoxesIds.map(id => [id, ""])));
	                      function Save_Click()
	                      {
	                      	console.log(ChildData);
	                      	
	                      	axios.post('http://localhost:5000/AddMasters',ChildData)
	                      	.then((response)=>{
                                               alert('Master Added Successfully');
	                      	})
	                      	.catch((err)=>{

	                      	})
	                      }

	                      const selectionChange=(e)=>{
                            	
                                                         var{name,value}=e.target;
                                                          // setChildData(prev=>({ ...prev,[name]:value}))
                                                             setChildData(prev=>({ ...prev,[name]:value}));
                                                             

	                                                 }
	                   return(
	                   	      <div className="container-fluid text-left">
                                            <header class="text-start">MASTERS PAGE</header>

                                    <div className="row">
	                   	                    <div className="col-md-3">
	                   	                         <label>Page Name</label>
	                   	                         <input type="text" name="PageName" onChange={selectionChange} className="form-control"/>
	                   	                    </div>

	                   	                    <div className="col-md-3">
	                   	                         <label>Page Icon</label>
	                   	                         <select name="PageIcons" onChange={selectionChange} className="form-control">
                                                         <option>Select Icons</option>
                                                         <option>MdDashboard</option>
                                                         <option>MdMiscellaneousServices</option>
                                                         <option>GrUserWorker</option>
                                                         <option>TbFileInvoice</option>
                                                          <option>FaCar</option>
                                                         <option>FcDataRecovery</option>
                                                         <option>FaCartFlatbedSuitcase</option>
                                                         <option>GiIndiaGate</option>
                                                         <option>BiSolidPurchaseTagAlt</option>
                                                         <option>FaUsers</option>



	                   	                         </select>
	                   	                    </div>

	                   	                    <div className="col-md-3">
	                   	                         <label>Outlet Code</label>
	                   	                         <select name="Outlet" onChange={selectionChange} className="form-control">
                                                         <option>Select Outlet</option>
                                                         <option>GAR</option>
                                                         <option>SHRM</option>

	                   	                         </select>
	                   	                    </div>

	                   	                    <div className="col-md-3">
	                   	                         <label>Page Url</label>
	                   	                         <select name="PageUrl" onChange={selectionChange} className="form-control">
                                                         <option>Select Urls</option>
                                                         <option>/VehicleDetail</option>
                                                         <option>/ClearVehicle</option>
                                                         <option>/InvoiceView</option>
                                                         <option>/CarShowRoom</option>
                                                         <option>/AddNewVehicleShowRoom</option>
                                                         <option>/VehicleShowRoomDetails</option>
                                                         <option>/AccountMasterView</option>
                                                         <option>/Vehicle_Purchase_Ledger</option>
                                                         <option>/Purchase_Payment_Voucher</option>
                                                         <option>/Vehicle_Sale_Invoice</option>
                                                         <option>/Visitors_Entry_View</option>
                                                         <option>/TestDrive_View</option>
                                                         <option>/Sales_Invoice_For_Vehicle_Ledger</option>
                                                         <option>/Sales_Payment_Voucher</option>

	                   	                         </select>
	                   	                    </div>

	                   	                    
            
	                   	             </div>

	                   	             <div className="row mt-2">                  
	                   	                    <div className="offset-6 col-md-6 text-end">
	                   	                         <input type="button" className="btn btn-success add"  value="Save" onClick={Save_Click}/>
	                   	                         <input type="button" className="btn btn-danger add mx-2" value="Exit"/>
	                   	                    </div>             
	                   	                </div>

                               </div>     
	                   	     )
}
export default Master_Page;
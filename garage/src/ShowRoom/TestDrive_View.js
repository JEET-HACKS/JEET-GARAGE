import React,{useEffect} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';


const TestDrive_View=()=>{
	                         var Redirect=useNavigate();
                            var [GetTestDriveDetails,setTestDriveDetails]=React.useState([]);
		                        useEffect(()=>{
		                        	           GetTestDriveDetail();

		                        },[])

	                       

	                        function GetTestDriveDetail()
	                        {
	                        	 axios.get('http://localhost:5000/GetTestDriveDetails')
	                        	 .then((resp)=>{
                                                setTestDriveDetails(resp.data);

	                        	 })
	                        	 .catch((err)=>{

	                        	 })
	                        }
                            
	                        function Add_Click(){
                                      Redirect('/TestDrive/add');
	                        }

	                        function Invoice_Click(id)
	                        {
	                        	 
	                        	 Redirect('/Sales_Invoice_For_Vehicle_Ledger');
	                        }

	                        function Delete_Click(id)
	                        {
                               alert(id);
                               axios.delete(`http://localhost:5000/DeleteTestDriveDetails/${id}`);
                               GetTestDriveDetail();
	                        }

	                        function Edit_Click(id)
	                        {
	                        	alert(id);
	                        	Redirect(`/TestDrive/${id}`);
	                        }
	                      return(
	                      	     <div className="container-fluid text-left">
                                     <header class="text-start">TEST DRIVE VIEW</header>

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
			                                                        <th>Customer Name</th>
			                                                        <th>Vehicle Name</th>
			                                                        <th>Staff Name</th>
			                                                        <th>Time In</th>
			                                                        <th>Time Out</th>
			                                                        <th>Action</th>
			                                                    </tr>
			                                             </thead>
			                                             <tbody>

			                                                    {GetTestDriveDetails.length>0
			                                                    ?
			                                                    GetTestDriveDetails.map((option)=>
                                                                         <tr>
                                                                             <td>{option.Entry_date}</td>
                                                                             <td>{option.Visitors_Name}</td>
                                                                             <td>{option.VehicleName}</td>
                                                                             <td>{option.StaffName}</td>
                                                                             <td>{option.fromTime}</td>
                                                                             <td>{option.ToTime}</td>
                                                                             <td>
                                                                                <button class="btn btn-success mx-2 fw-bold" onClick={()=>Edit_Click(option._id)}>Edit</button>
                                                                                <button class="btn btn-danger fw-bold" onClick={()=>Delete_Click(option._id)}>Delete</button>  
                                                                                <button class="btn btn-secondary fw-bold mx-2" onClick={()=>Invoice_Click(option._id)}>Invoice</button>                         
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
export default TestDrive_View;
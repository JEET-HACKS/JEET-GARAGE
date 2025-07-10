import React, {useEffect} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const VehicleEntryDetail=()=>{
	const navigate=useNavigate();
     const [VehicleDetails,setVehicleDetails]=React.useState('');
     var stopper="";
     useEffect(()=>{
                             if(stopper == "")
                             GetVehicleEntryDetails();

                         
                         
          },[]);
     function GetVehicleEntryDetails(){
              axios.get('https://garage-backend-8rs3.onrender.com/getVehicleDetails')
              .then((response)=>{
                                
                                setVehicleDetails(response.data);
              })
              .catch((err)=>{
                                alert(err);
              })
              stopper="wait";
     }
     function Edit_click(id)
     {
        
         
          navigate("/AddNewVehicle/"+id);
        
     }
     function Invoice_click(id,status)
     {
        if(status == "Ok")
        {
            localStorage.setItem("status", "add");
            navigate('/InvoiceBill/'+id);
            // axios.get(`https://garage-backend-8rs3.onrender.com/ClearVehicleFromService/${id}`)
            // .then((response)=>{
            //                    alert(response.data);
            //                    axios.post('http://localhost:5000/addClearVehicleFromService',response.data)     
            //                    .then((response)=>{
            //                                       alert(response.data);
            //                                       axios.delete(`http://localhost:5000/deleteClearVehicleFromService/${id}`)
            //                                       .then((response)=>{
            //                                                          alert('Vehicle Clear Successfully');
            //                                                          navigate('/ClearVehicle');
            //                                       })
            //                                       .catch((err)=>{

            //                                       })
            //                    })
            //                    .catch((err)=>{

            //                    })
            // })
            // .catch((err)=>{

            // })
            // // navigate('/ClearVehicle/'+id);
        }
        else{
            alert('Vehicle Status is Not Ok');
        }
      
     }
	const AddVehicle_click=()=>{
		
		navigate("/AddNewVehicle/add");
	}

     function delete_click(id){
          

          axios.delete(`https://garage-backend-8rs3.onrender.com/deleteVehicleDetails/${id}`)
          .then((response)=>{
                       alert(response.data);
                       GetVehicleEntryDetails();
          })
          .catch((err)=>{
                       alert(err);
          })
          

     }
	return(<div className="container-fluid">
                 
                  <header class="text-start">VEHICLE ENTRY DETAILS</header>

                 <div className="row mechdetail mb-3">
                   <div className="col-lg-8 col-md-12 col-sm-12 col-12 mb-2">
                       <input type="text" className="form-control" Placeholder="Type here to search"/>
                   </div>
                   <div className="col-lg-2 col-md-3 col-sm-3 col-6 mx-col-2">
                       <input type="button"  className="btn btn-secondary w-100 fw-bold" value="Search"/>
                   </div>
                    <div className="col-lg-2 col-md-3 col-sm-3 col-6 ml-col-2 ">
                       <input type="button" onClick={AddVehicle_click} className="btn btn-primary w-100 fw-bold" value="Add New"/>
                   </div>
                </div>

                 <div className="table-responsive">
                       <table class="table  table-bordered table-striped">
                          <thead>
                               <tr>
                                 <th>Entry Date</th>
                                  <th>Customer Name</th>
                                  <th>Vehicle No.</th>
                                  <th>Vehicle Status</th>
                                  <th>Mechanic Name</th>
                                  <th>Action</th>
                               </tr>
                         </thead>
                         <tbody>
                         {
                              VehicleDetails.length>0
                              ?
                              VehicleDetails.map((option)=>(
                                <tr>
                                    <td>{option.Entry_date}</td>
                                    <td>{option.CustomerName}</td>
                                    <td>{option.VehicleNo}</td>               
                                    <td>{option.VehicleStatus}</td>
                                    <td>{option.mechdata.M_Name}</td>
                                    
                                    <td>
                                        <button class="btn btn-danger fw-bold" onClick={()=>delete_click(option._id)}>Delete</button>
                                        <button class="btn btn-primary mx-2 fw-bold" onClick={()=>Edit_click(option._id)}>Edit</button>
                                        <button class="btn btn-secondary fw-bold" onClick={()=>Invoice_click(option._id,option.VehicleStatus)}>Invoice</button>
                                    </td>
                              
                                </tr>
                                ))
                              :
                              <h1>No Data Found</h1> 

                              
                            }
                            </tbody>
                      </table>          
                      
                 </div>

		   </div>)
}

export default VehicleEntryDetail;

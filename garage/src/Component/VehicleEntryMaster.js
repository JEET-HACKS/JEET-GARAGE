import React, {useEffect} from 'react';
import { useParams, useNavigate} from 'react-router-dom';
import axios from 'axios';

const AddVehicle=()=>{
	const navigate=useNavigate();
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
	var [VehicleStatus,setVehicleStatus]=React.useState('');
	var [BindService,setService]=React.useState([]);
	var dateobject="";
	var stopper="";
	var {id}=useParams();
	const myStyle={
		marginLeft:'10px'
	}
	function exit_click(){
		navigate('/VehicleDetail');

	}
	useEffect(()=>{
		if(stopper =="")
		{
			
			GetMechanic();
			GetServices();
                   if(id !="add")
                   {
                   	GetUpdatedDetails(id);
                   }
			 
		}
                   
	},[])

	function GetServices() {
		axios.get('https://garage-backend-8rs3.onrender.com/getServices')
		.then((response)=>{
                               setService(response.data);
		})
		.catch((err)=>{

		})
		// body...
	}

	function GetUpdatedDetails(id)
	{
		axios.get(`https://garage-backend-8rs3.onrender.com/getUpdatedDetails/${id}`)
		.then((response)=>{
        
                              setEntry_date(response.data.Entry_date);
                              setCustomerName(response.data.CustomerName);
                              setCust_MobileNo(response.data.Cust_MobileNo);
                              setCust_Address(response.data.Cust_Address);
                              setVehicleNo(response.data.VehicleNo);
                              setVVehicleCmpy(response.data.VehicleCmpy);
                              setVehicleType(response.data.VehicleType);
                              setVehicle_Color(response.data.Vehicle_Color);
                              setMechanic_Name(response.data.Mechanic_Name);
                              setService_Type(response.data.Service_Type);
                              setVehicleClearDate(response.data.VehicleClearDate);
                              setVehicleStatus(response.data.VehicleStatus);
                              
                              
                              

		})
		.catch((err)=>{
                              alert(err);
		})
	}

	function GetMechanic()
	{
           axios.get('https://garage-backend-8rs3.onrender.com/bindmechanicsdetails')
           .then((response)=>{
                 
                 setMechanic(response.data);
           })
           .catch((err)=>{
                 alert(err);
           })
           stopper="stop";
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

        function Update_Click()
        {
        
        	axios.put(`https://garage-backend-8rs3.onrender.com/UpdateVehicleEntry/${id}`,{
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
			VehicleClearDate,
			VehicleStatus
        	})
        	.then((response)=>{
        		             
        		             // Inside Save_Click or Update_Click
					if (response.data === "ok") {
					  alert("Vehicle Saved/Updated Successfully");
					  //setTimeout(() => navigate('/VehicleDetail'), 100); // ✅ add delay
					}
					else{
						alert(response.data); 	
					}

                              
                            
        	})
        	.catch((err)=>{
                              alert(err);
        	})
        }                                 

 
	function Save_Click()
	{
		 // var dateobject =new Date(Entry_date);
		 // alert(dateobject);

         // const formattedDate = dateobject.toLocaleDateString('en-US');
		  setEntry_date((Entry_date).toString());
		   setVehicleClearDate((VehicleClearDate).toString());
		   
		axios.post('https://garage-backend-8rs3.onrender.com/addVehicleDetails',{
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
			VehicleClearDate,
			VehicleStatus         
		})
		.then((response)=>{
			            if(response.data == "ok")
			            {
			            	alert("Vehicle Saved Successfully");
                                    navigate('/VehicleDetail');
			            }
			            else{
                                    alert(response.data);
			            }

                          
		})
		.catch((err)=>{
                          alert(err);
		})
	}
	                 return(<div className="container-fluid">
	                 	     
	                 	      <header class="text-start">VEHICLE ENTRY MASTER</header>

	                 	     <div className="row">
	                 	           <div className="col-xl-3 col-lg-6 col-md-6 text-left">
	                 	                <label>Entry Date</label>
	                 	               <input type="date" className="form-control" value={Entry_date} onChange={(e)=>{            
	                 	               setEntry_date(e.target.value)
	                 	           }}/> 
	                 	          </div>

	                 	          <div className="col-xl-3 col-lg-6 col-md-6 text-left">
	                 	               <label>Customer Name</label>
	                 	               <input type="text" className="form-control" value={CustomerName} onChange={(e)=>{
	                 	                var value=e.target.value.replace(/[^a-zA-Z   ]/g, '');
	                 	                    e.target.value=value;
	                 	                    setCustomerName(e.target.value)}
	                 	                }/>             
	                 	               
	                 	          </div>
	                 	          <div className="col-xl-3 col-lg-6 col-md-6 text-left">
	                 	                <label>Mobile No</label>
	                 	               <input type="text" id="mob" value={Cust_MobileNo} className="form-control" maxlength="10"  onChange={handleMobileChange}/> 
                                        
	                 	               
	                 	          </div>
	                 	          <div className="col-xl-3 col-lg-6 col-md-6 text-left">
	                 	                <label>Address</label>
	                 	               <input type="text" className="form-control" value={Cust_Address} onChange={(e)=>setCust_Address(e.target.value)}/> 
	                 	          </div>
	                 	         
	                 	         
	                 	     </div>
	                 	     <div className="row">
	                 	            <div className="col-xl-3 col-lg-6 col-md-6 text-left">
	                 	                <label>Vehicle No</label>
	                 	               <input type="text" className="form-control" value={VehicleNo} onChange={(e)=>setVehicleNo(e.target.value)}/> 
	                 	          </div>

	                 	           <div className="col-xl-3 col-lg-6 col-md-6 text-left">
	                 	                <label>Vehicle Company</label>
	                 	               <input type="text" className="form-control" value={VehicleCmpy} onChange={(e)=>setVVehicleCmpy(e.target.value)}/> 
	                 	          </div>

	                 	           <div className="col-xl-3 col-lg-6 col-md-6 text-left">
	                 	                <label>Vehicle Type</label>
	                 	                <select className="form-control" value={VehicleType} onChange={(e)=>setVehicleType(e.target.value)}>
	                 	                         <option>Select Vehicle Type</option>
	                 	                         <option>Car</option>
	                 	                         <option>Bike</option>
	                 	                         <option>Truck</option>
	                 	                </select> 
	                 	          </div>
	                 	          <div className="col-xl-3 col-lg-6 col-md-6 text-left">
	                 	                  <label>Color</label>
	                 	                  <input type="text" className="form-control" value={Vehicle_Color} onChange={(e)=>{var value=e.target.value.replace(/[^a-zA-z    ]/g, ''); e.target.value=value; setVehicle_Color(e.target.value)}}/>  
	                 	          </div>
	                 	     </div>
	                 	     
	                 	     <div className="row">
	                 	           <div className="col-xl-3 col-lg-6 col-md-6 text-left">
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
	                 	           <div className="col-xl-3 col-lg-6 col-md-6 text-left">
	                 	                <label>Service Type</label>
	                 	                <select className="form-control" value={Service_Type} onChange={(e)=>setService_Type(e.target.value)}> 
	                 	                        <option>Select Service</option>
	                 	                        {
	                 	                         BindService.length>0
	                 	                         ?
	                 	                         BindService.map((option)=>
	                 	                         	 <option key={option._id} value={option._id}>
	                 	                         	          {option.Service_Name}
	                 	                         	 </option>
	                 	                         )
	                 	                         :
	                 	                         <h1>No records Found</h1>	
	                 	                        }          
	                 	                </select>
	                 	           </div> 
	                 	           <div className="col-xl-3 col-lg-6 col-md-6 text-left">
	                 	                <label>Vehicle Clear Date</label>
	                 	                <input type="date" className="form-control" value={VehicleClearDate} onChange={(e)=>setVehicleClearDate(e.target.value)}/>
	                 	           </div>

	                 	           <div className="col-xl-3 col-lg-6 col-md-6 text-left">
	                 	                <label>Vehicle Status</label>
	                 	                <select className="form-control" value={VehicleStatus} onChange={(e)=>setVehicleStatus(e.target.value)}>
	                 	                        <option>Select Vehicle Status</option>
	                 	                        <option>Ok</option>
	                 	                        <option>Not Ok</option>
	                 	                </select>
	                 	           </div>
	                 	    </div>
	                 	    
	                 	     <div className="row  mt-3">
	                 	          <div className="offset-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 d-flex justify-content-end ">
	                 	              {
	                 	               id!="add"
	                 	               ?
	                 	               <input type="button" value="Update" className="btn btn-primary add" onClick={Update_Click} />
	                 	               :
	                 	               <input type="button" value="Save" className="btn btn-success add" onClick={Save_Click} />
	     	
	                 	              }
	                 	              <input type="button" style={myStyle} value="Exit" onClick={exit_click} className="btn btn-danger add"/>
	                 	          </div>
	                 	     </div>

	                 	   </div>)

}
export default AddVehicle;

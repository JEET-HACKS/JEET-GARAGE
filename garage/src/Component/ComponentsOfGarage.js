import React, {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';



const Compo=()=>{
	const navigate=useNavigate();

	useEffect(()=>{
		document.body.style.backgroundImage = "Capture.PNG";
	},[]);
	const Mechanicshandle=()=>{
		
		navigate("/Mechanics");
	}
	const VechicleHandle=()=>{
		
		navigate("/VehicleDetail");
	}
	const ServicesHandle=()=>{
		
		navigate('/ClearVehicle');
	}
	const AppointmentHandle=()=>{
		
		navigate('/InvoiceView');
	}

	function Attendence_Click() {
		alert('Work Under Process....');
	}
	

	return(
	<div className="container-fluid compo">  
	       <header class="text-start">SERVICES OF GARAGE</header>
  <div className="row">
    
      <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
        <input type="button" onClick={Mechanicshandle}  className="btn btn-primary" value="MECHANICS DETAILS" />
      </div>

      <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
        <input type="button" onClick={VechicleHandle} className="btn btn-danger" value="VEHICLES ENTRY" />
      </div>
 
      <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
        <input type="button" onClick={ServicesHandle} className="btn btn-success" value="RECOVER VEHICLES" />
      </div>

      <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
        <input type="button" onClick={AppointmentHandle} className="btn btn-secondary" value="VEHICLE INVOICE" />
      </div>
      
      <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
        <input type="button" className="btn btn-info" value="ATTENDENCE PUNCH" onClick={Attendence_Click} />
      </div>
  </div>
</div>

		   )
}
export default Compo;
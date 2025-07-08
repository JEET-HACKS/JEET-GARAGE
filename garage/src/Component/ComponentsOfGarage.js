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
    
      <div className="col-xl-3 col-lg-6 col-md-6 mb-3">
        <input type="button" onClick={Mechanicshandle}  className="btn btn-primary w-100 pt-5 pb-5 fs-4 fw-bold" value="MECHANICS DETAILS" />
      </div>

      <div className="col-xl-3 col-lg-6 col-md-6 mb-3">
        <input type="button" onClick={VechicleHandle} className="btn btn-danger w-100 pt-5 pb-5 fs-4 fw-bold" value="VEHICLES ENTRY" />
      </div>
 
      <div className="col-xl-3 col-lg-6 col-md-6 mb-3">
        <input type="button" onClick={ServicesHandle} className="btn btn-success w-100 pt-5 pb-5 fs-4 fw-bold" value="RECOVER VEHICLES" />
      </div>

      <div className="col-xl-3 col-lg-6 col-md-6 mb-3">
        <input type="button" onClick={AppointmentHandle} className="btn btn-secondary w-100 pt-5 pb-5 fs-4 fw-bold" value="VEHICLE INVOICE" />
      </div>
      
      <div className="col-xl-3 col-lg-6 col-md-6 mb-3">
        <input type="button" className="btn btn-info w-100 pt-5 pb-5 fs-4 fw-bold" value="ATTENDENCE PUNCH" onClick={Attendence_Click} />
      </div>
  </div>
</div>

		   )
}
export default Compo;
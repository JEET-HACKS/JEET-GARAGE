import React from 'react';
import {useNavigate} from 'react-router-dom';
import Button from '@mui/material/Button';
import { MdDashboard } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa6";
import { MdMiscellaneousServices } from "react-icons/md";
import { GrUserWorker } from "react-icons/gr";
import { TbFileInvoice } from "react-icons/tb";
import { FaCar } from "react-icons/fa";
import { FcDataRecovery } from "react-icons/fc";
import { FaCartFlatbedSuitcase } from "react-icons/fa6";
import { GiIndiaGate } from "react-icons/gi";
import { BiSolidPurchaseTagAlt } from "react-icons/bi";
import { FaUsers } from 'react-icons/fa'

const Sidebar=({isOpen})=>{
	               var Redirect=useNavigate();
	              function Dashboard_click()
	              {
	              	
                    Redirect('/DashBoard');
	              }
	                function Service_click()
	              {
	              	
                    Redirect('/Compone');
	              }
	                function Mechanics_click()
	              {
	              	
                    Redirect('/Mechanics');
	              }
	               function VehicleEntry_click()
	              {
	              	Redirect('/VehicleDetail');
	              }
	              function VehicleShowRoom_click()
	              {
	              	
                    Redirect('/CarShowRoom');
	              }
	                function InvoiceMaster_click()
	              {
	              	
                    Redirect('/InvoiceView');
	              }
	                function RecoverVehicle_click()
	              {
	              	
                    Redirect('/ClearVehicle');
	              }
	              function VehiclePurchase_click()
	              {
	              	Redirect('/Vehicle_Purchase_Ledger')
	              }
                   function GatePass_click()
                   {
                   	alert('Work Under Progress.....');
                   }
                   function AccountMaster_click()
                   {
                   	 Redirect('/AccountMasterView');
                   }
                   function AddVehicleInShowRoom_click()
                   {
                   	Redirect('/AddNewVehicleShowRoom');
                   }
                   


	              const Sidebar= isOpen ? 'Sidebar open' : 'Sidebar';
	              
	               return(<div className={Sidebar}>
	               	          <ul>
	               	              <li>
		               	              <Button className="w-100 fw-bold" onClick ={Dashboard_click}>
		               	                     <span className="icon">
		               	                       <MdDashboard/>
		               	                     </span>
		               	                            Dashboard
		               	                     <span className="arrow">
		               	                       <FaAngleRight/>
		               	                     </span>
		               	               </Button>
		               	          </li>

		               	          <li>
		               	              <Button className="w-100 fw-bold" onClick ={Service_click}>
		               	                     <span className="icon">
		               	                       <MdMiscellaneousServices/>
		               	                     </span>
		               	                            Services
		               	                     <span className="arrow">
		               	                       <FaAngleRight/>
		               	                     </span>
		               	               </Button>
		               	          </li>

		               	           <li>
		               	              <Button className="w-100 fw-bold" onClick ={Mechanics_click}>
		               	                     <span className="icon">
		               	                       <GrUserWorker/>
		               	                     </span>
		               	                            Mechanics Master
		               	                     <span className="arrow">
		               	                       <FaAngleRight/>
		               	                     </span>
		               	               </Button>
		               	          </li>
                                  {/*
                                     <li>
		               	              <Button className="w-100 fw-bold" onClick ={Mechanics_click}>
		               	                     <span className="icon">
		               	                       <GrUserWorker/>
		               	                     </span>
		               	                           Order Booking Master
		               	                     <span className="arrow">
		               	                       <FaAngleRight/>
		               	                     </span>
		               	               </Button>
		               	          </li>
                                  */}

		               	          
		               	          

		               	          <li>
		               	              <Button className="w-100 fw-bold" onClick ={VehiclePurchase_click}>
		               	                     <span className="icon">
		               	                       <BiSolidPurchaseTagAlt/>
		               	                     </span>
		               	                            Vehicle Purchase
		               	                     <span className="arrow">
		               	                       <FaAngleRight/>
		               	                     </span>
		               	               </Button>
		               	          </li>


		               	          <li>
		               	              <Button className="w-100 fw-bold" onClick ={VehicleEntry_click}>
		               	                     <span className="icon">
		               	                       <FaCar/>
		               	                     </span>
		               	                            Vehicle Entry
		               	                     <span className="arrow">
		               	                       <FaAngleRight/>
		               	                     </span>
		               	               </Button>
		               	          </li>

		               	           <li>
		               	              <Button className="w-100 fw-bold" onClick ={InvoiceMaster_click}>
		               	                     <span className="icon">
		               	                       <TbFileInvoice/>
		               	                     </span>
		               	                            Invoice Master
		               	                     <span className="arrow">
		               	                       <FaAngleRight/>
		               	                     </span>
		               	               </Button>
		               	          </li>

		               	          <li>
		               	              <Button className="w-100 fw-bold" onClick ={RecoverVehicle_click}>
		               	                     <span className="icon">
		               	                       <FcDataRecovery/>
		               	                     </span>
		               	                            Recover Vehicle
		               	                     <span className="arrow">
		               	                       <FaAngleRight/>
		               	                     </span>
		               	               </Button>
		               	          </li>

		               	           <li>
		               	              <Button className="w-100 fw-bold" onClick ={VehicleShowRoom_click}>
		               	                     <span className="icon">
		               	                       <FaCartFlatbedSuitcase/>
		               	                     </span>
		               	                            Vehicle ShowRoom
		               	                     <span className="arrow">
		               	                       <FaAngleRight/>
		               	                     </span>
		               	               </Button>
		               	          </li>

		               	          <li>
		               	              <Button className="w-100 fw-bold" onClick ={GatePass_click}>
		               	                     <span className="icon">
		               	                       <GiIndiaGate/>
		               	                     </span>
		               	                            GatePass
		               	                     <span className="arrow">
		               	                       <FaAngleRight/>
		               	                     </span>
		               	               </Button>
		               	          </li>

		               	          <li>
		               	              <Button className="w-100 fw-bold" onClick ={AccountMaster_click}>
		               	                     <span className="icon">
		               	                       <FaUsers/>
		               	                     </span>
		               	                            Account Master
		               	                     <span className="arrow">
		               	                       <FaAngleRight/>
		               	                     </span>
		               	               </Button>
		               	          </li>

		               	          <li>
		               	              <Button className="w-100 fw-bold" onClick ={AddVehicleInShowRoom_click}>
		               	                     <span className="icon">
		               	                       <FaCar/>
		               	                     </span>
		               	                            Add Vehicle In ShowRoom
		               	                     <span className="arrow">
		               	                       <FaAngleRight/>
		               	                     </span>
		               	               </Button>
		               	          </li>
	               	          </ul>

	               	     </div>
	               	     )
}
export default Sidebar;
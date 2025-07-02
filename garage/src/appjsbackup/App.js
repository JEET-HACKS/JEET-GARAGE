import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navigationbar';
import LoginPage from './Component/LoginPage';
import Compo from './Component/ComponentsOfGarage';
import Mechanics from './Component/MechanicsDetails';
import AddMechanic from './Component/Addmechanic_master';
import {BrowserRouter,Routes,Route} from 'react-router-dom'; 
import VehicleEntryDetail from './Component/VehicleEntryView';
import AddVehicle from './Component/VehicleEntryMaster';
import Appointment from './Component/Appointment_master';
import ClearVehicle from './Component/ClearVehicle';
import InvoiceBill from './Component/InvoiceBill';
import InvoiceView from './Component/InvoiceView';
import ServiceBill from './Component/ServiceBill';
import InvoiceGenerator from './Component/InvoiceGenerator';
import CarShowRoom from './Component/CarShowRoom';
import CarDetails from './Component/CarDetails';
import Sidebar from './Component/Sidebar';
import DashBoard from './Component/DashBoard';
import React from 'react';
import AddNewVehicleShowRoom from './Component/AddNewVehicleInShowRoom';
import VehicleShowRoomDetails from './Component/VehicleShowRoomView';
import OrderBooking from './Component/OrderBooking';
import VehiclePurchase from './Component/VehiclePurchase';
import Account_master_for_showroom from './Component/Account_master_for_showroom';
import AccountMasterView from './Component/AccountMasterView';
import OutletButton from './Component/Outlet';
import Vehicle_Purchase_Ledger from './Component/Vehicle_Purchase_Ledger';
import Purchase_Payment_Voucher from './Component/Purchase_Payment_Voucher';
import Vehicle_Sale_Invoice from './ShowRoom/Sales_Invoice_For_Vehicle';
import Visitors_Entry from './ShowRoom/Visitors_Entry';
import Visitors_Entry_View from './ShowRoom/Visitors_Entry_View';
import TestDrive from './ShowRoom/TestDrive';
import TestDrive_View from './ShowRoom/TestDrive_View';
import VehicleFeatures from './Component/VehicleFeatures';
import FeaturesSection from './Component/FeaturesSection';
import VehicleSaleInvoice from './Component/VehicleSaleInvoice';
import VehicleSalesLedger from './Component/VehicleSalesLedger';
import UserId from './Component/UserID';





function App() {
   const value=localStorage.getItem("token");
     const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
     const [isUserOpen, setIsUserOpen] = React.useState(false);

         // Toggle the sidebar visibility
      const toggleSidebar = () => {
                                
                                setIsSidebarOpen(!isSidebarOpen);
                          };
      const onUserAdm=()=>{
                        
                           setIsUserOpen(!isUserOpen);
      }                    

  return (
    <div className="App">
    <BrowserRouter>

        {value?<Navbar onToggleSidebar={toggleSidebar} onUserAdm={onUserAdm} />:null}
        <div className="main d-flex">
              <div className="SidebarWrapper">
                   <Sidebar isOpen={isSidebarOpen}/>
              </div>         
        </div>
        <UserId IsUser={isUserOpen}/>

        <div className="content">
                           
                    <Routes>
                            <Route path="/DashBoard" element={<DashBoard/>} />
                            <Route path="/Mechanics" element={<Mechanics/>} />
                            <Route path="/Compone" element={<Compo/>} />
                            <Route path="/" element={<LoginPage />} />
                            <Route path="/AddMechanic/:id" element={<AddMechanic/>} />
                            <Route path="/VehicleDetail" element={<VehicleEntryDetail/>} />
                            <Route path="/AddNewVehicle/:id" element={<AddVehicle/>}/>
                            <Route path="/AddNewAppointment" element={<Appointment/>}/>
                            <Route path="/ClearVehicle" element={<ClearVehicle/>}/>
                            <Route path="/InvoiceBill/:id" element={<InvoiceBill/>}/>
                            <Route path="/InvoiceView" element={<InvoiceView/>}/>
                            <Route path="/ServiceBill" element={<ServiceBill/>}/>
                            <Route path="/InvoiceGenerator" element={<InvoiceGenerator/>}/>
                            <Route path="/CarShowRoom" element={<CarShowRoom/>}/>
                            <Route path="/CarDetails" element={<CarDetails/>}/>
                            <Route path="/AddNewVehicleShowRoom" element={<AddNewVehicleShowRoom/>}/>
                            <Route path="/VehicleShowRoomDetails" element={<VehicleShowRoomDetails/>}/>
                            <Route path="/OrderBooking" element={<OrderBooking/>}/>
                            <Route path="/VehiclePurchase" element={<VehiclePurchase/>}/>
                            <Route path="/Account_master_for_showroom" element={<Account_master_for_showroom/>}/>
                            <Route path="/AccountMasterView" element={<AccountMasterView/>}/>
                            <Route path="/OutletMaster" element={<OutletButton/>}/>
                            <Route path="/Vehicle_Purchase_Ledger" element={<Vehicle_Purchase_Ledger/>}/>
                            <Route path="/Purchase_Payment_Voucher" element={<Purchase_Payment_Voucher/>}/>
                            <Route path="/Vehicle_Sale_Invoice" element={<Vehicle_Sale_Invoice/>}/>
                            <Route path="/Visitors_Entry/:id" element={<Visitors_Entry/>}/>
                            <Route path="/Visitors_Entry_View" element={<Visitors_Entry_View/>}/>
                            <Route path="/TestDrive/:id" element={<TestDrive/>}/>
                            <Route path="/TestDrive_View" element={<TestDrive_View/>}/>
                            <Route path="/VehicleFeatures/:id" element={<VehicleFeatures/>}/>
                            <Route path="/FeaturesSection" element={<FeaturesSection/>}/>
                            <Route path="/VehicleSaleInvoice" element={<VehicleSaleInvoice/>}/>
                            <Route path="/VehicleSalesLedger" element={<VehicleSalesLedger/>}/> 
                    </Routes>
               </div>    
    </BrowserRouter>       
    </div>
  );
}

export default App;

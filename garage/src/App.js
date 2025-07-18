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
import {useState,useEffect} from 'react';
import Master_Page from './Masters/Master';
import Sales_Invoice_For_Vehicle_Ledger from './ShowRoom/Sales_Invoice_For_Vehicle_Ledger';
import Sales_Payment_Voucher from './ShowRoom/Sales_Payment_Voucher';
import HelpSuggest from './Component/HelpSuggest';
import Login from './Component/Login';
import PrivateRoute from './Component/PrivateComponent';
import Staff_Master from './Masters/StaffMaster';
import Staff_Master_View from './Masters/StaffMasterView';




//import { AuthProvider } from './Security/AuthContext';


//const root = ReactDOM.createRoot(document.getElementById('root'));


function App() {
    //const { isLoggedIn } = useAuth();
     var [isLoggedIn, setIsLoggedIn] = useState(false);
     var value=localStorage.getItem("token");
     var [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
     var [isUserOpen, setIsUserOpen] = React.useState(false);
     var [isHelpOpen, setIsHelpOpen] = React.useState(false);
     const [sidebarMode, setSidebarMode] = useState("default"); // default mode

     
     useEffect(() => {
                        var token = localStorage.getItem("token");
                        setIsLoggedIn(!!token); // sets true if token exists

                      }, []);
     useEffect(() => {
                      var mode = localStorage.getItem("sidebarMode") || "default";
                      setSidebarMode(mode);
                    }, [window.location.pathname]); // re-run when route changes

      var toggleSidebar = () => {
                                
                                setIsSidebarOpen(!isSidebarOpen);
                          };
      var onUserAdm=()=>{
                        
                           setIsUserOpen(!isUserOpen);
                             if (!isUserOpen) setIsHelpOpen(false); 
                           //document.querySelector('.userdiv.open').style.display='block';
      }
      var onHelpSupport=()=>{
                           setIsHelpOpen(!isHelpOpen);
                           if (!isHelpOpen) setIsUserOpen(false);
      }                    

  return (
    <div className="App">
    <BrowserRouter>

        {isLoggedIn
        ?
        (
        <>    
         <Navbar onToggleSidebar={toggleSidebar} onUserAdm={onUserAdm} onHelpSupport={onHelpSupport} />
         <div className="main d-flex">
              <div className="SidebarWrapper">
                   <Sidebar isOpen={isSidebarOpen} mode={sidebarMode}/>
              </div>         
        </div>
        <UserId IsUser={isUserOpen} onLoginSuccess={() => setIsLoggedIn(false)} onClose={() => setIsUserOpen(false)}/>
        <HelpSuggest IsHelp={isHelpOpen} onClose={() => setIsHelpOpen(false)}  />
        </>
        )
        :
         <Routes>
                 <Route path="/" element={<Login  onLoginSuccess={() => setIsLoggedIn(true)} />}/> 
          </Routes>

        }

        <div className="content">
                           
                    <Routes>
                      <Route path="/DashBoard" element={<PrivateRoute element={<DashBoard />} />} />
                      <Route path="/Mechanics" element={<PrivateRoute element={<Mechanics />} />} />
                      <Route path="/Compone" element={<PrivateRoute element={<Compo />} />} />
                      <Route path="/AddMechanic/:id" element={<PrivateRoute element={<AddMechanic />} />} />
                      <Route path="/VehicleDetail" element={<PrivateRoute element={<VehicleEntryDetail />} />} />
                      <Route path="/AddNewVehicle/:id" element={<PrivateRoute element={<AddVehicle />} />} />
                      <Route path="/AddNewAppointment" element={<PrivateRoute element={<Appointment />} />} />
                      <Route path="/ClearVehicle" element={<PrivateRoute element={<ClearVehicle />} />} />
                      <Route path="/InvoiceBill/:id" element={<PrivateRoute element={<InvoiceBill />} />} />
                      <Route path="/InvoiceView" element={<PrivateRoute element={<InvoiceView />} />} />
                      <Route path="/ServiceBill" element={<PrivateRoute element={<ServiceBill />} />} />
                      <Route path="/InvoiceGenerator" element={<PrivateRoute element={<InvoiceGenerator />} />} />
                      <Route path="/CarShowRoom" element={<PrivateRoute element={<CarShowRoom />} />} />
                      <Route path="/CarDetails" element={<PrivateRoute element={<CarDetails />} />} />
                      <Route path="/AddNewVehicleShowRoom" element={<PrivateRoute element={<AddNewVehicleShowRoom />} />} />
                      <Route path="/VehicleShowRoomDetails" element={<PrivateRoute element={<VehicleShowRoomDetails />} />} />
                      <Route path="/OrderBooking" element={<PrivateRoute element={<OrderBooking />} />} />
                      <Route path="/VehiclePurchase/:id" element={<PrivateRoute element={<VehiclePurchase />} />} />
                      <Route path="/Account_master_for_showroom/:id" element={<PrivateRoute element={<Account_master_for_showroom />} />} />
                      <Route path="/AccountMasterView" element={<PrivateRoute element={<AccountMasterView />} />} />
                      <Route path="/OutletMaster" element={<PrivateRoute element={<OutletButton onClose={() => setIsUserOpen(true)} onLoginSuccess={() => setIsLoggedIn(true)} />} />} />
                      <Route path="/Vehicle_Purchase_Ledger" element={<PrivateRoute element={<Vehicle_Purchase_Ledger />} />} />
                      <Route path="/Purchase_Payment_Voucher" element={<PrivateRoute element={<Purchase_Payment_Voucher />} />} />
                      <Route path="/Vehicle_Sale_Invoice" element={<PrivateRoute element={<Vehicle_Sale_Invoice />} />} />
                      <Route path="/Visitors_Entry/:id" element={<PrivateRoute element={<Visitors_Entry />} />} />
                      <Route path="/Visitors_Entry_View" element={<PrivateRoute element={<Visitors_Entry_View />} />} />
                      <Route path="/TestDrive/:id" element={<PrivateRoute element={<TestDrive />} />} />
                      <Route path="/TestDrive_View" element={<PrivateRoute element={<TestDrive_View />} />} />
                      <Route path="/VehicleFeatures/:id" element={<PrivateRoute element={<VehicleFeatures />} />} />
                      <Route path="/FeaturesSection" element={<PrivateRoute element={<FeaturesSection />} />} />
                      <Route path="/VehicleSaleInvoice" element={<PrivateRoute element={<VehicleSaleInvoice />} />} />
                      <Route path="/VehicleSalesLedger" element={<PrivateRoute element={<VehicleSalesLedger />} />} />
                      <Route path="/Master_Page" element={<PrivateRoute element={<Master_Page />} />} />
                      <Route path="/Sales_Invoice_For_Vehicle_Ledger" element={<PrivateRoute element={<Sales_Invoice_For_Vehicle_Ledger />} />} />
                      <Route path="/Sales_Payment_Voucher" element={<PrivateRoute element={<Sales_Payment_Voucher />} />} />
                      <Route path="/HelpSuggest" element={<PrivateRoute element={<HelpSuggest />} />} /> 
                      <Route path="/Staff_Master/:id" element={<PrivateRoute element={<Staff_Master />} />} />
                      <Route path="/Staff_Master_View" element={<PrivateRoute element={<Staff_Master_View />} />} />
                                                
                                                
                    </Routes>
               </div>    
    </BrowserRouter>       
    </div>
  );
}

export default App;

import React from 'react';
import {useNavigate} from 'react-router-dom';
import { FaCar } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import Button from '@mui/material/Button';
import { MdMiscellaneousServices } from "react-icons/md";
import Navbar from '../Component/Navigationbar';

const OutletButton=({onLoginSuccess})=>{
	                    var navigate=useNavigate();
	                    function Garage_click()
	                    {
	                         localStorage.setItem("sidebarMode", "GAR");
	                         localStorage.setItem("token","ok");
	                    	navigate(`/Compone`);
	                    	onLoginSuccess();

	                    }

	                    const showroom_click=()=>{
	                    	   
	                    	   
	                    	localStorage.setItem("sidebarMode", "SHRM");
	                         localStorage.setItem("token","ok");
	                    	
	                    	navigate(`/Visitors_Entry_View`);
	                    	onLoginSuccess();
	                    }
	                return(<div className="container-fluid">
	                	    
	                	     <div className="row">
	                	        <div className="col-md-3 col-sm-12 mb-2 mt-2">
                                       <Button className="w-100 fw-bold text-light fs-4" style={{backgroundImage:'url("try1.PNG"),#48d483','height':'150px','background':'linear-gradient(to right,#1da256,#48d483)'}} onClick={Garage_click}>        
		               	                            GARAGE  
		               	                        <MdMiscellaneousServices style={{'fontSize':'100px','textAlign':'right'}}/>
		               	                   {/*{'background':'linear-gradient(to right,#1da256,#48d483)','height':'150px'}*/}      	               	                  
		               	         </Button>
                                    </div>

                                   <div className="col-md-3 col-sm-12 mb-2 mt-2">
                                        <Button className="w-100 fw-bold text-light fs-4" style={{'background':'linear-gradient(to right,#c012e2,#eb64fe)','height':'150px'}} onClick={showroom_click}>        
		               	                            VEHICLE SHOWROOM  
		               	                        <FaCar style={{'fontSize':'100px','textAlign':'right'}}/>
		               	                         	               	                   
		               	               </Button>
                                      
                                    </div>   
                               </div>     
	                	</div>)
}
export default OutletButton;
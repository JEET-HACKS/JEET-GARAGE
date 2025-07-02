import React, {useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {Link,useNavigate,useParams} from 'react-router-dom';
import { FaAlignJustify } from "react-icons/fa";


//import backgroundImage from '/public/gbackground (2).jpg'; 



const Navbar=({ onToggleSidebar,onUserAdm,onHelpSupport })=>{
  var Redirect=useNavigate();
  
  var Outletname="";
  var id=localStorage.getItem("sidebarMode");
  if(id == "SHRM")
  {
    Outletname="SHOWROOM";
  }
  else{
    Outletname="GARAGE";
  }

	
	useEffect(()=>{
		       const authentication=localStorage.getItem("token");
              // if(authentication)
              // {
              // 	document.body.style.BackgroundImage="none";
              	

              // }
              // else{
              // 	document.body.style.backgroundImage = "url('/public/gbackground (2).jpg')";     
              //   document.body.style.backgroundSize = 'cover';  // Optional: to cover the entire background
              //   document.body.style.backgroundPosition = 'center'; 
              // }
             
	},[])

  function Dashboard_Click()
  {
      Redirect('/DashBoard');
  }
  function Outlet_Click()
  {
      Redirect('/OutletMaster');
  }
  
	return(

          <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
                <div class="container-fluid">
               
                  <span class="togle text-light mx-1 d-flex align-items-center"><button class="btn btn-default text-light" onClick={onToggleSidebar}><FaAlignJustify/></button></span>
             
                  
                  <div class="collapse navbar-collapse text-start" id="collapsibleNavbar">
                    <ul class="navbar-nav">
                      <li class="nav-item">
                        <a class="nav-link" href="#">{Outletname}</a>
                      </li>
                      

                    </ul>
                  </div>
                  <form class="d-flex text-end">       
                           <input type="button" className="btn btn-secondary w-50 mx-3 fw-bold text-light" onClick={Dashboard_Click} value="Dashboard"/>
                           <input type="button" className="btn btn-primary w-50 mx-3 fw-bold text-light" onClick={Outlet_Click} value="Outlet"/>
                           <input type="button" className="btn btn-danger w-50 mx-3 fw-bold text-light" value="Help" onClick={onHelpSupport}  />
                           <img src="/logout_img.png" className="rounded-pill" style={{'width':'40px'}} onClick={onUserAdm}/>
                  </form>
                </div>
          </nav>
      
		)
}

export default Navbar;




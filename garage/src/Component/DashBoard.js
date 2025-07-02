import React, {useEffect} from 'react';
import { MdDashboard } from "react-icons/md";
import { FaCar } from "react-icons/fa";
import { LuMessageCircleHeart } from "react-icons/lu";
import { GrUserWorker } from "react-icons/gr";
import { TbFileInvoice } from "react-icons/tb";
import { IoIosBriefcase } from "react-icons/io";
import { FcSalesPerformance } from "react-icons/fc";
import { FaShoppingCart } from "react-icons/fa";
import { BsGraphUpArrow } from "react-icons/bs";
import { MdAccountBalance } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import axios from 'axios';


const DashBoard=()=>{
                      var [GetDashboardDetails,SetDashboardDetails]=React.useState([]);
                      var [GetMechanicCount,SetMechanics]=React.useState([]);
                      var [ServiceInvoice,SetServiceInvn]=React.useState([]);
                      var [ServiceInvoiceAmt,SetServiceInvnAmt]=React.useState([]);
                      var [TotalVehicle,SetTotalVehicle]=React.useState([]);
                      var [TotalInvoice,SetTotalInvoice]=React.useState([]);
                   useEffect(()=>{
                                   DashBoardDetails();
                   },[])

                   function DashBoardDetails()
                   {
                        axios.get('http://localhost:5000/GetSomeDetails')
                        .then((response)=>{
                                         
                                         var data1=response.data[0];
                                         SetMechanics(data1.MechanicsNo);
                                         SetServiceInvn(data1.InvnNo);
                                         SetServiceInvnAmt(data1.Invnamt);
                                         SetTotalVehicle(data1.totalVehicles);
                                         SetTotalInvoice(data1.totalInvoices);
                        })
                        .catch((error)=>{
                                         alert(error);
                        })
                   }


	                 return(
                            <div className="container-fluid">
                                
                                  <header class="text-start">DASHBOARD</header>
                               <div className="row mb-2">

                               <div className="col-xl-3 col-lg-6 col-md-6 mb-2">
                                       <div class="card text-left text-light" style={{'background':'linear-gradient(to right,#1da256,#48d483)','height':'150px'}}>              
                                          <div class=" row card-body" >
                                               <div className="col-lg-9 col-md-10 col-sm-6 col-6"  style={{'padding':'0 0 0 12px'}}>
                                                    <h5 class="card-title">Total Vehicles</h5>          
                                                    <span className="fw-bold fs-4 pt-0">{TotalVehicle}</span>
                                               </div>
                                               <div className="col-lg-3 col-md-2 col-sm-6 col-6 text-end">
                                                    <span className="icon fs-1">                         
                                                                     <FaCar style={{'position':'relative','bottom':'10px'}}/>
                                                    </span>
                                               </div>

                                               <div className="row mt-4">
                                                    <div className="col-lg-10 col-md-10 col-sm-10 col-10">
                                                          <span className="mt-2 fw-bold"><span class="p-1 bg-dark" style={{'border-radius':'5px','opacity':'0.5'}}>+95%</span> Last Month</span>
                                                    </div>
                                                    <div className="col-lg-2 col-md-2 col-sm-2 col-2 text-end">
                                                         <BsThreeDotsVertical style={{'position':'relative','left':'20px'}}/>
                                                    </div>
                                               </div>                  
                                           </div>            
                                       </div>
                                    
                               </div>
                                    
                                    <div className="col-xl-3 col-lg-6 col-md-6 mb-2">
                                       <div class="card text-left text-light" style={{'background':'linear-gradient(to right,#c012e2,#eb64fe)','height':'150px'}}>              
                                          <div class=" row card-body" >
                                               <div className="col-lg-9 col-md-10 col-sm-6 col-6"  style={{'padding':'0 0 0 12px'}}>
                                                    <h5 class="card-title">Sold Vehicles Invoice</h5>          
                                                    <span className="fw-bold fs-4 pt-0">{TotalInvoice}</span>
                                               </div>
                                               <div className="col-lg-3 col-md-2 col-sm-6 col-6 text-end">
                                                    <span className="icon fs-1">
                                                                   
                                                                   <FaShoppingCart style={{'position':'relative','bottom':'10px'}}/>
                                                    </span>
                                               </div>

                                               <div className="row mt-4">
                                                    <div className="col-lg-10 col-md-10 col-sm-10 col-10">
                                                          <span className="mt-2 fw-bold"><span class="p-1 bg-dark" style={{'border-radius':'5px','opacity':'0.5'}}>+30%</span> Last Month</span>
                                                    </div>
                                                    <div className="col-lg-2 col-md-2 col-sm-2 col-2 text-end">
                                                         <BsThreeDotsVertical style={{'position':'relative','left':'20px'}}/>
                                                    </div>
                                               </div>
                                              
                                              
                                           </div>
                                           
                                           
                                       </div>
                                    </div>
                                    
                                    <div className="col-xl-3 col-lg-6 col-md-6 mb-2">
                                       <div class="card text-left text-light" style={{'background':'linear-gradient(to right,#2c78e5,#60aff5)','height':'150px'}}>              
                                          <div class=" row card-body" >
                                               <div className="col-lg-9 col-md-10 col-sm-6 col-6"  style={{'padding':'0 0 0 12px'}}>
                                                    <h5 class="card-title">Service Invoices</h5>
                                                    <span className="fw-bold fs-4 pt-0">{ServiceInvoice}</span>  
                                                           
                                                    
                                               </div>
                                               <div className="col-lg-3 col-md-2 col-sm-6 col-6 text-end">
                                                    <span className="icon fs-1">
                                                                   <TbFileInvoice style={{'position':'relative','bottom':'10px'}}/>
                                                                  
                                                    </span>
                                               </div>

                                               <div className="row mt-4">
                                                    <div className="col-lg-10 col-md-10 col-sm-10 col-10">
                                                          <span className="mt-2 fw-bold"><span class="p-1 bg-dark" style={{'border-radius':'5px','opacity':'0.5'}}>+25%</span> Last Month</span>
                                                    </div>
                                                    <div className="col-lg-2 col-md-2 col-sm-2 col-2 text-end">
                                                         <BsThreeDotsVertical style={{'position':'relative','left':'20px'}}/>
                                                    </div>
                                               </div>
                                              
                                              
                                           </div>
                                           
                                           
                                       </div>
                                    </div>
                                    

                                    <div className="col-xl-3 col-lg-6 col-md-6 mb-2">
                                       <div class="card text-left text-light" style={{'background':'linear-gradient(to right,#e1950a,#f3cd29)','height':'150px'}}>              
                                          <div class=" row card-body" >
                                               <div className="col-lg-9 col-md-10 col-sm-6 col-6"  style={{'padding':'0 0 0 12px'}}>
                                                    <h5 class="card-title">Customers Reviews</h5>          
                                                    <span className="fw-bold fs-4 pt-0">277</span>
                                               </div>
                                               <div className="col-lg-3 col-md-2 col-sm-6 col-6 text-end">
                                                    <span className="icon fs-1">                         
                                                                  <LuMessageCircleHeart style={{'position':'relative','bottom':'10px'}}/>
                                                    </span>
                                               </div>

                                               <div className="row mt-4">
                                                    <div className="col-lg-10 col-md-10 col-sm-10 col-10">
                                                          <span className="mt-2 fw-bold"><span class="p-1 bg-dark" style={{'border-radius':'5px','opacity':'0.5'}}>+45%</span> Last Month</span>
                                                    </div>
                                                    <div className="col-lg-2 col-md-2 col-sm-2 col-2 text-end">
                                                         <BsThreeDotsVertical style={{'position':'relative','left':'20px'}}/>
                                                    </div>
                                               </div>                  
                                           </div>            
                                       </div>
                                    </div>
                               </div>
                               
                               <div className="row">

                                    <div className=" col-xl-3 col-lg-6 col-md-6 mb-2">
                                       <div class="card text-left text-light" style={{'background':'linear-gradient(to right,#e74c3c, #f1c40f)','height':'150px'}}>              
                                          <div class=" row card-body" >
                                               <div className="col-lg-9 col-md-10 col-sm-6 col-6"  style={{'padding':'0 0 0 12px'}}>
                                                    <h5 class="card-title">Total Mechanics</h5>
                                                     <span className="fw-bold fs-4 pt-0">{GetMechanicCount}</span>
                                                       
                                                    
                                               </div>
                                               <div className="col-lg-3 col-md-2 col-sm-6 col-6 text-end">
                                                    <span className="icon fs-1">                         
                                                                  <GrUserWorker style={{'position':'relative','bottom':'10px'}}/>
                                                    </span>
                                               </div>

                                               <div className="row mt-4">
                                                    <div className="col-lg-10 col-md-10 col-sm-10 col-10">
                                                          <span className="mt-2 fw-bold"><span class="p-1 bg-dark" style={{'border-radius':'5px','opacity':'0.5'}}>+95%</span> Last Month</span>
                                                    </div>
                                                    <div className="col-lg-2 col-md-2 col-sm-2 col-2 text-end">
                                                         <BsThreeDotsVertical style={{'position':'relative','left':'20px'}}/>
                                                    </div>
                                               </div>                  
                                           </div>            
                                       </div>
                                    
                               </div>


                               <div className=" col-xl-3 col-lg-6 col-md-6 mb-2">
                                       <div class="card text-left text-light" style={{'background':'linear-gradient(to right,#1abc9c,#8e44ad)','height':'150px'}}>              
                                          <div class=" row card-body" >
                                               <div className="col-lg-9 col-md-10 col-sm-6 col-6"  style={{'padding':'0 0 0 12px'}}>
                                                    <h5 class="card-title">Invoice Revenue</h5>          
                                                    <span className="fw-bold fs-4 pt-0">{ServiceInvoiceAmt}</span>
                                               </div>
                                               <div className="col-lg-3 col-md-2 col-sm-6 col-6 text-end">
                                                    <span className="icon fs-1">                         
                                                                  <FcSalesPerformance style={{'position':'relative','bottom':'10px'}}/>
                                                    </span>
                                               </div>

                                               <div className="row mt-4">
                                                    <div className="col-lg-10 col-md-10 col-sm-10 col-10">
                                                          <span className="mt-2 fw-bold"><span class="p-1 bg-dark" style={{'border-radius':'5px','opacity':'0.5'}}>+95%</span> Last Month</span>
                                                    </div>
                                                    <div className="col-lg-2 col-md-2 col-sm-2 col-2 text-end">
                                                         <BsThreeDotsVertical style={{'position':'relative','left':'20px'}}/>
                                                    </div>
                                               </div>                  
                                           </div>            
                                       </div>
                                    
                               </div>

                               <div className="col-xl-3 col-lg-6 col-md-6 mb-2">
                                       <div class="card text-left text-light" style={{'background':'linear-gradient(to right,#a2c2e3, #3498db)','height':'150px'}}>              
                                          <div class=" row card-body" >
                                               <div className="col-lg-9 col-md-10 col-sm-6 col-6"  style={{'padding':'0 0 0 12px'}}>
                                                    <h5 class="card-title">Service Revenue</h5>          
                                                    <span className="fw-bold fs-4 pt-0">{ServiceInvoiceAmt}</span>
                                               </div>
                                               <div className="col-lg-3 col-md-2 col-sm-6 col-6 text-end">
                                                    <span className="icon fs-1">                         
                                                                    <BsGraphUpArrow style={{'position':'relative','bottom':'10px'}}/>
                                                    </span>
                                               </div>

                                               <div className="row mt-4">
                                                    <div className="col-lg-10 col-md-10 col-sm-10 col-10">
                                                          <span className="mt-2 fw-bold"><span class="p-1 bg-dark" style={{'border-radius':'5px','opacity':'0.5'}}>+95%</span> Last Month</span>
                                                    </div>
                                                    <div className="col-lg-2 col-md-2 col-sm-2 col-2 text-end">
                                                         <BsThreeDotsVertical style={{'position':'relative','left':'20px'}}/>
                                                    </div>
                                               </div>                  
                                           </div>            
                                       </div>
                                    
                               </div>

                               <div className="col-xl-3 col-lg-6 col-md-6 mb-2">
                                       <div class="card text-left text-light" style={{'background':'linear-gradient(to right,#ff6a00,#ee0979)','height':'150px'}}>              
                                          <div class=" row card-body" >
                                               <div className="col-lg-9 col-md-10 col-sm-6 col-6"  style={{'padding':'0 0 0 12px'}}>
                                                    <h5 class="card-title">Balance</h5>          
                                                    <span className="fw-bold fs-4 pt-0">{ServiceInvoiceAmt}</span>
                                               </div>
                                               <div className="col-lg-3 col-md-2 col-sm-6 col-6 text-end">
                                                    <span className="icon fs-1">                         
                                                                     <MdAccountBalance style={{'position':'relative','bottom':'10px'}}/>
                                                    </span>
                                               </div>

                                               <div className="row mt-4">
                                                    <div className="col-lg-10 col-md-10 col-sm-10 col-10">
                                                          <span className="mt-2 fw-bold"><span class="p-1 bg-dark" style={{'border-radius':'5px','opacity':'0.5'}}>+95%</span> Last Month</span>
                                                    </div>
                                                    <div className="col-lg-2 col-md-2 col-sm-2 col-2 text-end">
                                                         <BsThreeDotsVertical style={{'position':'relative','left':'20px'}}/>
                                                    </div>
                                               </div>                  
                                           </div>            
                                       </div>  
                               </div>
                            </div>
                          </div>  
	                 	    )
}
export default DashBoard;

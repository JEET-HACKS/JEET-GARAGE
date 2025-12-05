import React,{useEffect} from 'react';
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
import { FaUsers } from 'react-icons/fa';
import axios from 'axios';
import * as MdIcons from 'react-icons/md';
import * as FcIcons from 'react-icons/fc';
import * as TbIcons from 'react-icons/tb';
import * as GrIcons from 'react-icons/gr';
import * as FaIcons from "react-icons/fa";
import * as Fa6Icons from "react-icons/fa6";
import * as  BiIcons from "react-icons/bi";
import * as  GiIcons from "react-icons/gi";


const Sidebar=({isOpen,mode})=>{
	               var Redirect=useNavigate();
	               var [BindMenus,SetMenus]=React.useState([]);

	               useEffect(()=>{
	               	 
	               	 BindSidebar();
	               },[])

	               function BindSidebar()
	               {
                        axios.get(`https://garage-backend-8rs3.onrender.com/BindSidebar/${mode}`)
                        .then((response)=>{
                                          SetMenus(response.data); 
                        })
                        .catch((err)=>{

                        })
	               }
	              
                   const getIconComponent = (iconName) =>
                              MdIcons[iconName] || FcIcons[iconName] || TbIcons[iconName] || GrIcons[iconName] || FaIcons[iconName] || Fa6Icons[iconName] || BiIcons[iconName] || GiIcons[iconName] || null;

                   function Sidebar_Click(name)
                   {
					   alert(name);
                      Redirect(name);
                   }           

                   


	              const Sidebar= isOpen ? 'Sidebar open' : 'Sidebar';
	              
	               return(<div className={Sidebar}>
	               	          <ul>
	               	              {
	               	              	 BindMenus.length>0
	               	              	 ?
	               	              	 
                                         BindMenus.map((option,index)=>{
                                         	var IconName = getIconComponent(option.PageIcons); // from DB or config
                                          
															  return (
															    <li key={index}>
															      <Button className="w-100 fw-bold" onClick={()=>Sidebar_Click(option.PageUrl)}>
															        <span className="icon">
															          {IconName ? <IconName /> : null}
															        </span>
															        {option.PageName}
															        <span className="arrow">
															          <FaAngleRight/>
															        </span>
															      </Button>
															    </li>
															  );

                                              } 
                                         	)
	               	              	 
	               	              	 :
	               	              	 <h1>No Records Found</h1>
	               	              }
	               	             
	               	          </ul>

	               	     </div>
	               	     )
}
export default Sidebar;

import React,{useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

const UserId=({IsUser,onLoginSuccess,onClose})=>{
                       var userdiv= IsUser ? 'userdiv open' : 'userdiv';
                       var Redirect=useNavigate();
                       const [username,Setusername]=React.useState('');

                       useEffect(()=>{
                                      Setusername(localStorage.getItem("userid"));
                                    //document.querySelector('.userdiv.open').style.display='block';
                       })



                       function label_click()
                       {
                             Redirect('/');
                             onLoginSuccess();
                             
                             localStorage.clear("token"); 
                             onClose(); 
                       }
                       function Close_click()
                       {
                        onClose();
                        //serdiv='userdiv';
                         //document.querySelector('.userdiv.open').style.display='none';
                       }
                  return(
                  	     
                          <div className={userdiv}  style={{'width':'21%','backgroundColor':'#ffffff','marginLeft':'10px'}}>
                                <h5 className="text-left p-2 bg-danger text-light">Profile<img src="/Close-icon.png" className="rounded-pill" onClick={Close_click} style={{'marginLeft':'200px'}} /></h5>
                                
                            
                                <img src="/logout_img.png" className="rounded-pill" style={{'width':'90px'}} />
                  
                                <div className="row innerdiv border m-3 border-dark rounded" >
                                      <div className="col-md-12 d-flex justify-content-start p-2  fw-bold">
                                           <label className="text-left" style={{'fontSize':'11px'}}>Emp Code:</label>
                                           <label className="text-left" style={{'fontSize':'11px','marginLeft':'170px'}}>{username}</label>
                                          
                                      </div>
                                      <div className="col-md-12 d-flex justify-content-start p-2  fw-bold">
                                           <label className="text-left" style={{'fontSize':'11px'}}>User Group:</label>
                                           <label className="text-left" style={{'fontSize':'11px','marginLeft':'163px'}}>{username}</label>
                                          
                                      </div>
                                      <div className="col-md-12 d-flex justify-content-start p-2 fw-bold">
                                        
                                                 <label className="text-left text-info" style={{'fontSize':'11px'}}>Change Password:</label>
                                           
                                           <label className="text-left" onClick={label_click} style={{'display':'inline','fontSize':'11px','marginLeft':'110px'}}>Log-Out</label>
                            
                                      </div>
                               
                                </div>
                          </div>

                  	    )
}
export default UserId;


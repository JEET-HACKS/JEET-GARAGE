import React from 'react';

const HelpSuggest=({IsHelp,onClose})=>{
                        var userdiv= IsHelp ? 'userdiv open' : 'userdiv';

                        function Close_click() {
                             onClose();
                        }
	                   return(
	                   	        <div className={userdiv}  style={{'width':'21%','backgroundColor':'#ffffff','marginLeft':'10px'}}>
                                <h5 className="text-left p-2 bg-danger text-light">Help<img src="/Close-icon.png" onClick={Close_click} className="rounded-pill" style={{'marginLeft':'215px'}} /></h5>
                                
                            
                                
                  
                                <div className="row innerdiv border m-1 border-dark rounded">
                                      <div className="col-md-12 d-flex justify-content-start p-2  fw-bold">
                                           <label className="text-left" style={{'fontSize':'11px'}}>Contact Us :</label>
                                           <label className="text-left" style={{'display':'inline','fontSize':'12px','marginLeft':'5px'}}>4561234561</label>
                                          
                                      </div>
                                      <div className="col-md-12 d-flex justify-content-start p-2  fw-bold">
                                           <label className="text-left" style={{'fontSize':'12px'}}>We're available 24/7 — feel free to contact us anytime!😊</label>
                                          
                                      </div>
                                      
                               
                                </div>
                          </div>   
	                   	     )
}

export default HelpSuggest; 
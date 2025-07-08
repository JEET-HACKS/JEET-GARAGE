import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const AddMechanic=()=>{
     var {id} = useParams();
     const [M_Name,setM_name]=React.useState('');
     const [Specialization,set_specialization]=React.useState('');
     const [MobileNo,set_Mobile]=React.useState('');
     const [AadharNo,set_Aadhar]=React.useState('');
     const [showDiv, setShowDiv] = React.useState(false);
     const [Salary,SetSalary]=React.useState('');
     const usenavigate=useNavigate();
     const [Service_Name,setService]=React.useState('');
     const [Cost,set_Cost]=React.useState('');
     const [Servicedropdown,SetServicedropdown]=React.useState('');

     useEffect(()=>{
                    GetService();
                    if(id !="add")
                    {
                        GetMechanics();
                    }
     },[]);

     function GetMechanics(){
        axios.get(`https://garage-backend-8rs3.onrender.com/EditMechanics/${id}`)
        .then((response)=>{
                           var data1=response.data[0];
                           setM_name(data1.M_Name);
                           set_specialization(data1.Specialization);
                           set_Mobile(data1.MobileNo);
                           set_Aadhar(data1.AadharNo);
                           SetSalary(data1.Salary);
        })
        .catch((response)=>{

        })
     }

     function GetService()
     {
              
              axios.get('https://garage-backend-8rs3.onrender.com/getServices')
              .then((response)=>{
                               SetServicedropdown(response.data);
              })
              .catch((err)=>{
                             alert(err);

              })
     }

       const AddMechanic_click=()=>{
          
          
          axios.post(`https://garage-backend-8rs3.onrender.com/addmechanicsdetails/${id}`,{
               M_Name,Specialization,MobileNo,AadharNo,Salary

          })
          .then((response)=>{
                             if(response.data == "ok")
                             {
                                 alert("Mechanic Added Successfully");
                                 usenavigate('/Mechanics');
                             }
                             else{
                                 alert(response.data);
                             }
                
          })
          .catch((err)=>{

          })
       }
       const exit_click=()=>{
          usenavigate('/Mechanics');
       }
       function Handleclick()
       {
     
            setShowDiv(!showDiv);
       }

         function Closeclick()
       {
     
            setShowDiv(!showDiv);
       }

       function AddService_click()
       {
          axios.post('https://garage-backend-8rs3.onrender.com/addservicedetails',{
                    Service_Name,Cost
          })
          .then((response)=>{
                      alert(response.data);
                      setShowDiv(!showDiv);
          })
          .catch((err)=>{
                      alert(err);
          })
       }
	      return(<div className="container-fluid AddMechanic_box">
                       <header class="text-start">MECHANIC MASTER</header>
                   
                      <div className="row">
                          <div className="col-md-4 mname" >
                               <label>Mechanic Name</label>
                               <input type="text" className="form-control" value={M_Name}  onChange={(e)=>{var value=e.target.value.replace(/[^a-zA-Z    ]/g, ''); e.target.value=value; setM_name(e.target.value)}}/>
                          </div>
                          <div className="col-md-3 mname" >
                               <label>Specialization</label>
                               <select className="form-control" value={Specialization} onChange={(e)=>set_specialization(e.target.value)}>
                                       <option>Select Service</option>
                                       {Servicedropdown.length>0
                                       ?
                                        Servicedropdown.map((option)=>(
                                                   <option key={option._id} value={option._id}>{option.Service_Name}</option>
                                        ))
                                       :
                                       <option>No Services</option>
                                       }
                               </select>   
                          </div>
                          <div className="col-md-1 d-flex align-items-center">
                                <input type="button" className="btn btn-default add_service fw-bold" onClick={Handleclick} value="+"/>
                          </div>
                          <div className="col-md-4 mname">
                               <label>Mobile No.</label>
                               <input type="text" className="form-control" value={MobileNo} maxlength="10"  onChange={(e)=>{var value=e.target.value.replace(/[^0-9]/g, ''); e.target.value=value; set_Mobile(e.target.value)}} />
                          </div>
                          <div className="col-md-4 mname">
                               <label>Aadhaar No.</label>
                               <input type="text" className="form-control" maxlength="16" value={AadharNo}  onChange={(e)=>{var value=e.target.value.replace(/[^0-9]/g, ''); e.target.value=value; set_Aadhar(e.target.value)}} />
                          </div>
                           <div className="col-md-4 mname">
                               <label>Salary</label>
                               <input type="text" className="form-control" value={Salary}  onChange={(e)=>{var value=e.target.value.replace(/[^0-9]/g, ''); e.target.value=value; SetSalary(e.target.value)}} />
                          </div>
                          

                      </div>

                          <div className="row">
                              
                               <div className=" col-md-12 d-flex justify-content-end">
                                    <input type="button" className="btn btn-success add mx-2" onClick={AddMechanic_click} value="Save"/>
                                   <input type="button" className="btn btn-danger add" onClick={exit_click} value="Exit"/>
                              </div>
                          </div>
                      {showDiv && (

                        
                                              <div className="newdiv">
                                                   <div className="row">
                                                        <div className="col-md-12">
                                                             <h3>Add New Service</h3>
                                                        </div>
                                                   </div>
                                                   <div className="row">
                                                        <div className="col-md-12">
                                                            <label>Service Name</label>
                                                            <input type="text" value={Service_Name} onChange={(e)=>{var value=e.target.value.replace(/[^a-zA-Z    ]/g, ''); e.target.value=value; setService(e.target.value)}} className="form-control"/>
                                                        </div>
                                                   </div>
                                                   <div className="row">
                                                        <div className="col-md-12">
                                                            <label>Service Cost</label>
                                                            <input type="text" value={Cost} onChange={(e)=>{var value=e.target.value.replace(/[^0-9]/g, ''); e.target.value=value; set_Cost(e.target.value)}} className="form-control mb-2"/>
                                                        </div>

                                                   </div>
                                                   <div className="row">

                                                       
                                                        <div className="col-md-12 text-end">
                                                       
                                                            <input type="button" className="btn btn-success fw-bold" onClick={AddService_click} value="Save"/>
                                                            <button className="btn btn-danger mx-1 fw-bold" onClick={Closeclick}>Close</button>
                                                        </div>

                                                       
                                                   </div>
                                             </div>
                                             )}
	      	</div>)

}

export default AddMechanic;
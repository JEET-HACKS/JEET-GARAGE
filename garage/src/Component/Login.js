import React, { useState } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

export default function AuthCard({onLoginSuccess}) {
  const [tab, setTab] = useState('login');
  var   [UserName,SetUserName]=useState();
  var   [Password,SetPassword]=useState();
  var   [ConfirmPassword,SetConfirmPassword]=useState();
  var   navigate=useNavigate();

  function Signup_Click()
  {
  	 if(Password == ConfirmPassword)
	  	 {
	  	 	 axios.post('http://localhost:5000/SignUpDetails',{
	  	 	UserName,Password
	  	 })
	  	 .then((response)=>{
	  	 	                   if(response.data == "ok")
	  	 	                   {
	  	 	                     alert("Signup Successfully"); 	
	  	 	                     
	  	 	                     setTab('login');
	  	 	                   }
	  	 	                   else{
	  	 	                   	alert(response.data);
	  	 	                   }
	                        
	  	 })
	  	 .catch((err)=>{
	                    alert(err.data);
	  	 })
  	 }
  	 else{
  	 	alert("Please Confirm Password");
  	 }
  	 
  }
  const loginhandle=()=>{
        
       

        axios.post('http://localhost:5000/login',{
            UserName,Password
        })
        .then((response)=>{
            if(response.data.auth)
            {
               alert("Login Successfully");
               localStorage.setItem("token",response.data.auth);
              // login();
               //onLoginSuccess();
               //localStorage.setItem("token",response.data.auth);
               navigate("/OutletMaster");
            }
            else{
                alert("Incorrect UserName Or Password");
            }
          

        })
        .catch((err)=>{
            alert(err);
        })
    }

  return (
    <div className="bg-container d-flex justify-content-center align-items-center">
      <div className="login-card bg-dark text-white rounded p-4" style={{ width: 380, height: 400 }}>
        {/* Header */}
        <div className="text-center mb-3">
          <h5 className="fw-bold">Vehicle Management System</h5>
          {/*<p className="text-secondary">Fleet Management System</p>*/}
          <hr className="border-secondary" />
        </div>

        {/* Tabs */}
        <div className="d-flex mb-4 border-bottom border-secondary">
          {['login','signup'].map((t) => (
            <div
              key={t}
              className={`flex-fill text-center py-2 ${tab === t ? 'border-bottom border-info text-info fw-bold' : 'text-secondary'}`}
              style={{ cursor: 'pointer' }}
              onClick={() => setTab(t)}
            >
              {t === 'login' ? 'Login' : 'Sign Up'}
            </div>
          ))}
        </div>

        {/* Viewport wrapper */}
        <div style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
          {/* Sliding forms container */}
          <div
            style={{
              display: 'flex',
              width: '200%',
              height: '100%',
              transform: tab === 'login' ? 'translateX(0%)' : 'translateX(-50%)',
              transition: 'transform 0.4s ease',
            }}
          >
            {/* Login */}
            <form style={{ width: '50%', padding: '0 10px' }}>
              <div className="mb-3 input-group">
                <span className="input-group-text bg-secondary border-0 text-white"><FaUser /></span>
                <input type="text" className="form-control bg-secondary text-white" onChange={(e)=>SetUserName(e.target.value)} placeholder="User ID" />
              </div>
              <div className="mb-4 input-group">
                <span className="input-group-text bg-secondary border-0 text-white"><FaLock /></span>
                <input type="password" className="form-control bg-secondary text-white" onChange={(e)=>SetPassword(e.target.value)} placeholder="Password" />
              </div>
              
              <input type="button" className="btn btn-primary w-100" style={{'backgroundColor':'#164deb'}} value="Login" onClick={loginhandle} />
            </form>

            {/* Sign Up */}
            <form style={{ width: '50%', padding: '0 10px' }}>
              <div className="mb-3 input-group">
                <span className="input-group-text bg-secondary border-0 text-white"><FaUser /></span>
                <input type="text" className="form-control bg-secondary text-white" onChange={(e)=>SetUserName(e.target.value)} placeholder="New User ID" />
              </div>
              <div className="mb-3 input-group">
                <span className="input-group-text bg-secondary border-0 text-white"><FaLock /></span>
                <input type="password" className="form-control bg-secondary text-white" onChange={(e)=>SetPassword(e.target.value)} placeholder="Create Password" />
              </div>
              <div className="mb-4 input-group">
                <span className="input-group-text bg-secondary border-0 text-white"><FaLock /></span>
                <input type="password" className="form-control bg-secondary text-white" onChange={(e)=>SetConfirmPassword(e.target.value)}  placeholder="Confirm Password" />
              </div>
              
              <input type="button" className="btn btn-success w-100" style={{'backgroundColor':'#28a745'}} value="Sign Up" onClick={Signup_Click} />

            </form>
          </div>
        </div>

      </div>
    </div>
  );
}

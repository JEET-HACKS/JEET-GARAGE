import React, {useEffect} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';



const LoginPage=()=>{
    const [UserName,setUserName]=React.useState('');
    const [Password,setPassword]=React.useState('');
    const navigate=useNavigate();

    useEffect(()=>{
        
    })

    const loginhandle=()=>{
    
        console.log(UserName,Password);

        axios.post('http://localhost:5000/login',{
            UserName,Password
        })
        .then((response)=>{
            if(response.data.auth)
            {
               alert("Login Successfully");
               localStorage.setItem("token",response.data.auth);
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

            return(
                
                     <div
  className="full-page"
  style={{
    backgroundImage: "url('/automotives.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
    padding: "40px"
  }}
>
  <div className="row">
    <div className="col-md-4 LoginBox">
      <h1 className="text-light">AUTOMOTIVES</h1>

      <label className="form-label">UserName</label>
      <input
        type="text"
        className="form-control input"
        value={UserName}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="Enter UserName"
      />

      <label className="form-label">Password</label>
      <input
        type="password"
        className="form-control input"
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter Password"
      />

      <div className="row">
        <div className="col-md-6">
          <input type="checkbox" />
          <a href="#">Already Have An Account</a>
        </div>
        <div className="col-md-6">
          <input type="checkbox" />
          <a href="#">Forgot Password</a>
        </div>
      </div>

      <input
        type="button"
        onClick={loginhandle}
        className="btn btn-success mt-3"
        value="Log-In"
      />
    </div>
  </div>
</div>

            	)
}
export default LoginPage;
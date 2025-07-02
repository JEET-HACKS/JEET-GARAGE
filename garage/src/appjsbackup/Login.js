import React from 'react';
import { FaUser, FaLock } from 'react-icons/fa';

function App() {
  return (
    <div className="bg-container">
      <div className="login-card">
        <div className="text-center mb-4">
          <div className="login-logo mb-2">
            <i className="bi bi-car-front-fill"></i>
          </div>
          <h4 className="mb-1 fw-bold">Vehicle Management System</h4>
          <p className="text-muted mb-2">Fleet Management System</p>
          <hr className="text-light" />
          <p className="small mb-3">🔒 Secure Login</p>
        </div>
        <form>
          <div className="mb-3 input-group">
            <span className="input-group-text bg-dark border-0 text-light">
              <FaUser />
            </span>
            <input type="text" className="form-control" placeholder="Enter your User ID" />
          </div>
          <div className="mb-4 input-group">
            <span className="input-group-text bg-dark border-0 text-light">
              <FaLock />
            </span>
            <input type="password" className="form-control" placeholder="Enter your Password" />
          </div>
          <button className="btn btn-primary w-100">Login</button>
        </form>
        {/*// <div className="text-center mt-3">
        //   <a href="#" className="text-light small">Forgot your password?</a>
        // </div>*/}
        <div className="text-center mt-3">
  <p className="small text-light">
    Don't have an account? <a href="#" className="text-primary">Sign up</a>
  </p>
</div>
      </div>
    </div>
  );
}

export default App;

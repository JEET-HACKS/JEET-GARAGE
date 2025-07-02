import React from "react";
import { jsPDF } from "jspdf";

const InvoiceGenerator = () => {
    

    return (
        
        <div className="container-fluid mt-3">
  <h2>Bordered Table</h2>
  <p>The .table-bordered class adds borders on all sides of the table and the cells:</p>            
  
  {/* Search and Add New Mechanic Buttons */}
  <div className="row mechdetail mb-3">
    <div className="col-lg-8 col-md-12 col-sm-12 col-12 mb-2">
      <input type="text" className="form-control" placeholder="Type here to search" />
    </div>
    <div className="col-lg-2 col-md-3 col-sm-3 col-6 mb-2">
      <input type="button" className="btn btn-secondary w-100" value="Search" />
    </div>
    <div className="col-lg-2 col-md-3 col-sm-3 col-6 mb-2">
      <input type="button" className="btn btn-primary w-100" value="Add New" />
    </div>
  </div>

  {/* Table */}
  <div className="table-responsive">
    <table className="table table-bordered table-striped">
      <thead>
        <tr>
          <th>Firstname</th>
          <th>Lastname</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>John</td>
          <td>Doe</td>
          <td>
              <button className="btn btn-success">Edit</button>
              <button className="btn btn-primary mx-2">Print</button>
              <button className="btn btn-success">Print</button>
          </td>
        </tr>
        <tr>
          <td>Mary</td>
          <td>Moe</td>
          <td>mary@example.com</td>
        </tr>
        <tr>
          <td>July</td>
          <td>Dooley</td>
          <td>july@example.com</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>


    );
};

export default InvoiceGenerator;

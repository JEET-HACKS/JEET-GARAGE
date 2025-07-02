import React, {useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';
import { jsPDF } from "jspdf";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const InvoiceView=()=>{
	                   var [InvoiceDetails,setInvoiceDetails]=React.useState([]);
                       var Redirect=useNavigate();
                       
                       var [CustName,setCustName]=React.useState([]);
                       var [Service,setService]=React.useState([]);
                       var stopper="";
                     useEffect(()=>{
                                    if(stopper=="")
                     	            GetInvoiceDetails();
                        
                    

                     },[])


                     function Delete_click(id)
                     {
                        alert(id);

                        axios.delete(`http://localhost:5000/DeleteInvoiceDetails/${id}`)
                        .then((response)=>{
                                          
                                           GetInvoiceDetails();
                        })
                        .catch((err)=>{
                                       alert(err);
                        })
                     }


                     function GetInvoiceDetails()
                     {
                          axios.get('http://localhost:5000/GetInvoiceDetails')
                          .then((response)=>{
                          	                 setInvoiceDetails(response.data);
                                             

                          })
                          .catch((err)=>{
                                            alert(err);
                          })    
                          stopper="wait";
                     }

                     function Print_click(id)
                     {
                        alert(id);
                        // Redirect("/ServiceBill/"+id)
                        axios.get(`http://localhost:5000/bindInvoicePrint/${id}`)
                     .then((response)=>{ 
                                        setCustName(response.data);
                                        var arrayid=response.data[0];
                                        var arrid2=response.data[2];
                                        
                                       
                                     
                                       


        const doc = new jsPDF();

        // Title
        doc.setFont("helvetica", "bold");
        doc.setFontSize(18);
        doc.text("Jeet Garage", 80, 10);

        // Customer & Service Details
        
       
        
        doc.setFontSize(12);
        doc.setFont("helvetica", "normal");
        
         const headers = ['SrNo', 'Service Name', 'Rate', 'Amount'];
         const data = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  { id: 3, name: 'Tom Brown', email: 'tom@example.com' },
];
  const rowHeight = 20; // Height of each row
  const colWidth = 40; // Width of each column
  const startX = 20; // Starting X position for drawing
  const startY = 30; // Starting Y position for drawing
        alert(arrayid.CustomerName);
        alert(arrayid.servdata.Service_Name);
        // doc.text(`Customer Name:${arrayid.CustomerName}`, 10, 30);
        // doc.text(`Service Name: ${arrayid.servdata.Service_Name}`, 10, 40);
        // doc.text("Garage Name: Jeet Garage", 10, 50);
        // doc.text(`Service Cost: ${arrayid.servdata.Cost}`, 10, 60);

//         doc.text('SrNo', startX, startY);

        // Assuming you already have jsPDF instance created like:
// const doc = new jsPDF();
  const colWidths = headers.map(header => {
    const headerWidth = doc.getTextWidth(header); // Get the width of the header text
    const maxDataWidth = Math.max(...data.map(row => doc.getTextWidth(row[header.toLowerCase()] || ''))); // Get the max width of data for that column
    return Math.max(headerWidth, maxDataWidth) + 10; // Add padding
  });

  let currentX = startX;
  let currentY = startY;

  // Draw headers with dynamic column width
  headers.forEach((header, index) => {
    const headerWidth = colWidths[index];
    
    // Draw rectangle for each header
    doc.rect(currentX, currentY - 4, headerWidth, rowHeight + 4);

    // Add header text inside the rectangle
    doc.text(header, currentX + 5, currentY + rowHeight / 2); // Adjust text placement

    // Move to the next column
    currentX += headerWidth;
  });
// Starting coordinates for the table
 data.forEach(row => {
    currentX = startX;
    currentY += rowHeight;
    
    headers.forEach((header, index) => {
      const cellText = row[header.toLowerCase()] || ''; // Get cell text for the current row and column
      const cellWidth = colWidths[index];
      
      // Draw rectangle for each cell in the row
      doc.rect(currentX, currentY - 4, cellWidth, rowHeight);

      // Add cell text inside the rectangle
      doc.text(cellText, currentX + 5, currentY + rowHeight / 2); // Adjust text placement

      // Move to the next column
      currentX += cellWidth;
    });
  });

// doc.text('Service Name', startX + colWidth, startY);

// doc.text('Service Cost', startX + 3 * colWidth, startY);
         
       

        // Footer
        doc.line(10, 80, 200, 80); // Horizontal separator
        doc.setFont("helvetica", "italic");
        doc.text("Thanks for coming!", 10, 90);

        // Save the PDF
        doc.save("ServiceBill.pdf");
                     })
                     .catch((err)=>{
                                        alert(err);
                     })
                        
                    
      

                     }
                     function UpdateClick(id)
                     {
                       localStorage.setItem("status","edit");
                       Redirect('/InvoiceBill/'+id);

                     }
                     function Add_Click()
                     {
                        Redirect('/InvoiceBill/'+'add');
                     }

	                  return(<div className="container-fluid">
                                   
                                   <header class="text-start">INVOICE DETAILS</header>

                                   <div className="row mechdetail mb-3">
                                       <div className="col-lg-8 col-md-12 col-sm-12 col-12 mb-2">
                                           <input type="text" className="form-control" Placeholder="Type here to search"/>
                                       </div>
                                       <div className="col-lg-2 col-md-3 col-sm-3 col-6 mx-col-2">
                                           <input type="button"  className="btn btn-secondary w-100 fw-bold" value="Search"/>
                                       </div>
                                        <div className="col-lg-2 col-md-3 col-sm-3 col-6 ml-col-2 ">
                                           <input type="button" onClick={Add_Click} className="btn btn-primary w-100 fw-bold" value="Add New"/>
                                       </div>
                                   </div>


                                    <div className="table-responsive">
                                           <table class="table  table-bordered table-striped">
                                              <thead>
                                                   <tr>
                                                     <th>Invoice Date</th>
                                                      <th>Customer Name</th>
                                                      <th>Vehicle No.</th>
                                                      <th>Mechanic Name</th>
                                                      <th>Service Type</th>
                                                      <th>Action</th>
                                                   </tr>
                                             </thead>
                                            <tbody>
                                                      {
                                                    InvoiceDetails.length>0
                                                    ?
                                                    InvoiceDetails.map((option)=>
                                                         <tr>
                                                              <td>{option.InvoiceDate}</td>
                                                              <td>{option.CustomerName}</td>
                                                              <td>{option.VehicleNo}</td>
                                                              <td>{option.mechdata.M_Name}</td>
                                                              <td>{option.servdata.Service_Name}</td>
                                                              <td>
                                                                 <button class="btn btn-danger fw-bold" onClick={()=>Delete_click(option._id)}>Delete</button>
                                                                 <button class="btn btn-success mx-2 fw-bold" onClick={()=>UpdateClick(option._id)}>Edit</button>
                                                                 <button class="btn btn-primary fw-bold"  onClick={()=>Print_click(option._id)}>Print</button>                            
                                                              </td>
                                                         </tr>
                                                    )
                                                    :
                                                    <h1>No records Found</h1>
                                                  }
                                            </tbody>
                                          </table>  
                                      </div>
                                    
                   


	                  	    </div>)
}
export default InvoiceView;
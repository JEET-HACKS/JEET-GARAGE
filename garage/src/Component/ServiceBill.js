import React, {useEffect} from "react";
import {useParams} from 'react-router-dom';
import { jsPDF } from "jspdf";
import axios from 'axios';

const ServiceBill = () => {

                    useEffect(()=>{
                                   PrintDetails();
                    },[])

                   function PrintDetails()
                   {
                     axios.get(`/bindInvoicePrint`)
                     .then((response)=>{ 
                                        alert(response.data);
                     })
                     .catch((err)=>{
                                        alert(err);
                     })
                   }
    const generatePDF = () => {
        const doc = new jsPDF();

        // Title
        doc.setFont("helvetica", "bold");
        doc.setFontSize(18);
        doc.text("Jeet Garage", 80, 10);

        // Customer & Service Details
        
        
        
        doc.setFontSize(12);
        doc.setFont("helvetica", "normal");
        doc.text("Customer Name: Jitendra", 10, 30);
        doc.text("Service Name: Washing", 10, 40);
        doc.text("Garage Name: Jeet Garage", 10, 50);
        doc.text("Service Cost: ₹800", 10, 60);


        // Footer
        doc.line(10, 80, 200, 80); // Horizontal separator
        doc.setFont("helvetica", "italic");
        doc.text("Thanks for coming!", 10, 90);

        // Save the PDF
        doc.save("ServiceBill.pdf");
    };

    return (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
            <h2>Vehicle Service Bill</h2>
            <button onClick={generatePDF} style={{ padding: "10px 20px", fontSize: "16px" }}>
                Print Service Bill
            </button>
        </div>
    );
};

export default ServiceBill;

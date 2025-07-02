const mongoose=require('mongoose');

const Invoice_Schema=new mongoose.Schema({
	Entry_date:{
	  	           type:String,
	               required:[true,'Date is required']
               },
	CustomerName:{
	  	           type:String,
	               required:[true,'Customer Name is required'],
	               trim: true 
                  },
	Cust_MobileNo:{
	  	           type:String,
	               required:[true,'Mobile No. is required'],
	               match:[/^\d{10}$/,'Mobile number must be exactly 10 digits']
                  },
	Cust_Address:{
	  	           type:String,
	               required:[true,'Address is required'],
	               trim: true 
                  },
	VehicleNo:   {
	  	           type:String,
	               required:[true,'Vehicle No is required'],
	               trim: true 
                  },
	VehicleCmpy:{
	  	           type:String,
	               required:[true,'Vehicle Name is required'],
	               trim: true 
                  },
	VehicleType:{
	  	           type:String,
	               required:[true,'Vehicle Type is required']
                  },
	Vehicle_Color:{
	  	           type:String,
	               required:[true,'Vehicle Color is required'],
	               trim: true 
                  },
	Mechanic_Name:{
	  	           type:String,
	               required:[true,'Mechanic Name is required']
                  },
	Service_Type:{
	  	           type:String,
	               required:[true,'Service Type is required']
                  },
	ServiceCost:{
	  	           type:Number,
	               required:[true,'Service Cost is required']
                  },
	InvoiceNo:{
	  	           type:String,
	               required:[true,'Invoice No. is required']
                  },
	InvoiceDate:{
	  	           type:String,
	               required:[true,'Invoice Date is required']
                  },
	NetAmt:{
	  	           type:Number,
	               required:[true,'Net Amount is required']
                  }
})
module.exports= mongoose.model("invoice_masters",Invoice_Schema);
const mongoose=require('mongoose');

const Sale_Invoice_Schema=new mongoose.Schema({
	           SalesInvn:{
			      	           type:String,
			                   required:[true,'Sales Invoice is required']
                             },
	           SalesInvnDate:{
			      	           type:String,
			                   required:[true,'Sales Invoice Date is required']
                             },
	           CustomerName:{
			      	           type:String,
			                   required:[true,'Customer Name is required'],
			                   trim: true 
                             },
	           StaffName:{
			      	           type:String,
			                   required:[true,'Staff Name is required'],
			                   trim: true 
                             },
	           VehicleNo:{
			      	           type:String,
			                   required:[true,'Vehicle No is required'],
			                   trim: true 
                             },
	           VehicleBrandName:{
			      	           type:String,
			                   required:[true,'Vehicle Name is required'],
			                   trim: true 
                             },
	           ModelName:{
			      	           type:String,
			                   required:[true,'Model Name is required'],
			                   trim: true 
                             },
	           Variant:{
			      	           type:String,
			                   required:[true,'Variant Name is required'],
			                   trim: true 
                             },
	           VehicleColor:{
			      	           type:String,
			                   required:[true,'Color is required'],
			                   trim: true 
                             },
               TAmount:{
			      	           type:Number,
			                   required:[true,'Total Amount is required']
		                    },
	          GstPer:{
			      	           type:Number,
			                   required:[true,'GST Percent is required']
		                    },
	          GSTAmt:{
			      	           type:Number,
			                   required:[true,'GST Amount is required']
		                    },
	          CgstAmt:{
			      	           type:Number,
			                   required:[true,'CGST Amount is required']
		                    },
	          SgstAmt:{
			      	           type:Number,
			                   required:[true,'SGST Amount is required']
		                    },
	          CessPer:{
			      	           type:Number,
			                   required:[true,'Cess Percent is required']
		                    },
	          CessAmt:{
			      	           type:Number,
			                   required:[true,'Cess Amount is required']
		                    },
	          TaxAmt:{
			      	           type:Number,
			                   required:[true,'Taxable Amount is required']
		                    },
	          TcsPer:{
			      	           type:Number,
			                   required:[true,'TCS Percent is required']
		                    },
	          TCSAmt:{
			      	           type:Number,
			                   required:[true,'TCS Amount is required']
		                    },              
	           PurchaseAmt:{
			      	           type:Number,
			                   required:[true,'Sales Amount is required']
		                    },
	           SalesPrice:{
			      	           type:Number,
			                   required:[true,'Sales Price is required']
		                    },
	           PaymentStatus:{
			      	           type:String,
			                   required:[true,'Payment Status is required']
		                    },
	           Pending_Amt:{
			      	           type:Number,
			                   required:[true,'Pending Amount is required']
		                    },
	           Type:{
			      	           type:String,
			                   required:[true,'Type is required']
		                    }
})
module.exports=mongoose.model("vehiclesalesinvoicemasters",Sale_Invoice_Schema);
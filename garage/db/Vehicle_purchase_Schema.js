const mongoose=require('mongoose');
const Vehicle_Purchase_Schema=new mongoose.Schema({
	          SupplierInvn:{
			      	           type:String,
			                   required:[true,'Supplier Invn is required']
		                    },
	          SupplierInvnDate:{
			      	           type:String,
			                   required:[true,'Supplier Invn Date is required']
		                    },
	          SupplierInvnReceiveDate:{
			      	           type:String,
			                   required:[true,'Supplier Invn Recieved Date is required']
		                    },
	          OrderNo:{
			      	           type:String,
			                   required:[true,'Order No. is required'],
			                   trim: true 
		                    },
	          SupplierName:{
			      	           type:String,
			                   required:[true,'Supplier Name is required']
		                    },
	          TransporterName:{
			      	           type:String,
			                   required:[true,'Transporter Name is required'],
			                   trim: true 
		                    },
	          DriverName:{
			      	           type:String,
			                   required:[true,'Driver Name is required'],
			                   trim: true 
		                    },
	          TruckVno:{
			      	           type:String,
			                   required:[true,'Truck No. is required'],
			                   trim: true 
		                    },
	          VehicleBrandName:{
			      	           type:String,
			                   required:[true,'Vehicle Name is required']
		                    },
	          ModelName:{
			      	           type:String,
			                   required:[true,'Model Name is required']
		                    },
	          Variant:{
			      	           type:String,
			                   required:[true,'Variant Name is required']
		                    },
	          VehicleColor:{
			      	           type:String,
			                   required:[true,'Color Name is required']
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
			                   required:[true,'Purchase Amount is required']
		                    },
	          ExShowRoomPrice:{
			      	           type:Number,
			                   required:[true,'ExShowRoom Price is required']
		                    },
	          PaymentStatus:{
			      	           type:String,
			                   required:[true,'Payment Status is required']
		                    },
	          Pending_Amt:{
			      	           type:Number,
			                   required:[true,'Pending Amt is required']
		                    },
	          Type:{
			      	           type:String,
			                   required:[true,'Type is required']
		                    }
})
module.exports=mongoose.model("vehicle_purchase_entrys",Vehicle_Purchase_Schema);
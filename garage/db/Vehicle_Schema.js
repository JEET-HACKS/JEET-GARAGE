const mongoose=require('mongoose');
const VehicleSchema=new mongoose.Schema({
	Entry_date:{
	      	           type:String,
	                   required:[true,'Entry Date is required']
                    },
	CustomerName:{
	      	           type:String,
	                   required:[true,'Customer Name is required'],
	                   trim: true 
                    },
	Cust_MobileNo:{
	      	           type:String,
	                   required:[true,'Mobile No. is required'],
	                   match:[/^\d{10}$/,'Mobile number must be exactly 10 digits'],
	                   trim: true 
                    },
	Cust_Address:{
	      	           type:String,
	                   required:[true,'Address is required']
                    },
	VehicleNo:{
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
	VehicleClearDate:{
	      	           type:String,
	                   required:[true,'Vehicle Clear Date is required']
                    },
	VehicleStatus:{
	      	           type:String,
	                   required:[true,'Vehicle Status is required']
                    }

})
module.exports=mongoose.model("vehicle_masters",VehicleSchema);
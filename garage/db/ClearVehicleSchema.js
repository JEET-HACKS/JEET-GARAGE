const mongoose = require('mongoose');
const clearVehicleSchema=new mongoose.Schema({
	Entry_date:String,
	CustomerName:String,
	Cust_MobileNo:Number,
	Cust_Address:String,
	VehicleNo:String,
	VehicleCmpy:String,
	VehicleType:String,
	Vehicle_Color:String,
	Mechanic_Name:String,
	Service_Type:String,
	VehicleClearDate:String,
	VehicleStatus:String
})
module.exports=mongoose.model("clear_vehicle_masters",clearVehicleSchema);
const mongoose=require('mongoose');

const Appointment_Schema= new mongoose.Schema({
	         Ap_Entry_Date:String,
	         Ap_Customer_Name:String,
	         Ap_Mobile _No:Number,
	         Ap_Mechanic_Name:String,
	         Ap_Service_Type:String,
	         Ap_Vehicle_No:String,
	         Ap_Color:String,
	         Ap_Address:String,
	         Status:String
})
module.exports=mongoose.model("appointment_masters",Appointment_Schema);
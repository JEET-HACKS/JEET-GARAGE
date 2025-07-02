const mongoose=require('mongoose');

const MechanicsSchema=new mongoose.Schema({
	M_Name:         {
	      	           type:String,
	                   required:[true,'Mechanic Name is required'],
	                   trim: true 
                     },
	Specialization:{
	      	           type:String,
	                   required:[true,'Specialization is required']
                     },
	MobileNo:{
	      	           type:String,
	                   required:[true,'Mobile No. is required'],
	                   match:[/^\d{10}$/,'Mobile number must be exactly 10 digits'],
	                   trim: true 
                     },
	AadharNo:{
	      	           type:String,
	                   required:[true,'Aadhar No. is required'],
	                   match:[/^\d{12}$/,'Aadhar No. must be exactly 12 digits'],
	                   trim: true 
                     },
	Salary:{
	      	           type:String,
	                   required:[true,'Salary is required']
                     }
});
module.exports=mongoose.model("mechanic_masters",MechanicsSchema);

const mongoose = require('mongoose');
const ServicesSchema=new mongoose.Schema({
	                 Service_Name:String,
	                 Cost:Number
})
module.exports=mongoose.model("services_masters",ServicesSchema);
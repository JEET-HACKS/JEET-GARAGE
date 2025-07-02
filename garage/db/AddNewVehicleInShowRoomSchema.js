const mongoose=require('mongoose');
const ShowRoomSchema=new mongoose.Schema({
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
	                 MfyYear:{
					      	           type:String,
					                   required:[true,'MfyYear is required'],
					                   trim: true 
				                       },
	                 VehicleType:{
					      	           type:String,
					                   required:[true,'Vehicle Type is required']
				                       },
	                 FuelType:{
					      	           type:String,
					                   required:[true,'Fuel Type is required']
				                       },
	                 TransmissionType:{
					      	           type:String,
					                   required:[true,'Transmission Type is required']
				                       },
	                 EngineCapacity:{
					      	           type:String,
					                   required:[true,'Engine Capacity is required'],
					                   trim: true 
				                       },
	                 Mileage:{
					      	           type:String,
					                   required:[true,'Mileage is required'],
					                   trim: true 
				                       },
	                 SeatingCapacity:{
					      	           type:String,
					                   required:[true,'Seating Capacity is required']
				                       },
	                 ExShowRoomPrice:{
					      	           type:Number,
					                   required:[true,'ExShowRoom Price is required']
				                       },
	                 OnRoadPrice:{
					      	           type:Number,
					                   required:[true,'OnRoad Price is required']
				                       },
	                 SalesPrice:{
					      	           type:Number,
					                   required:[true,'Sales Price is required']
				                       },
	                 VehicleColor:{
					      	           type:String,
					                   required:[true,'Vehicle Color is required'],
					                   trim: true 
				                       },
	                 VinNo:{
					      	           type:String,
					                   required:[true,'Vin No. is required'],
					                   trim: true 
				                       },
	                 Insurance:{
					      	           type:Number,
					                   required:[true,'Insurance is required'],
					                   trim: true 
				                       },
	                 AirBags:{
					      	           type:String,
					                   required:[true,'AirBags Type is required']
				                       },
	                 SunRoof:{
					      	           type:String,
					                   required:[true,'SunRoof Type is required']
				                       },
	                 SafetyFeatures:{
					      	           type:String,
					                   required:[true,'Safety Features is required']
				                       },
	                 VehicleImport:{
					      	           type:String,
					                   required:[true,'Choose Vehicle Image']
				                       },
	                 VehicleStatus:{
					      	           type:String,
					                   required:[true,'Vehicle Status is required']
				                       }
})
module.exports=mongoose.model("Add_New_Vehicle_in_showRoom",ShowRoomSchema);
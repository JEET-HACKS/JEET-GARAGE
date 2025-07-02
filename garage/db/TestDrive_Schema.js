const mongoose =require('mongoose');
const TestDrive_Schema=new mongoose.Schema({
	      Entry_date:{
	      	           type:String,
	                   required:[true,'Entry Date is required']
                    },
	      Visitors_Name:{
		      	           type:String,
		                   required:[true,'Visitors Name is required'],
		                   trim: true 
	                    },
	      Driving_Licence:{
		      	           type:String,
		                   required:[true,'Driving Licence is required'],
		                   trim: true 
	                     },
	      fromTime:{
		      	           type:String,
		                   required:[true,'fromTime is required']
	                },
	      ToTime:{
		      	           type:String,
		                   required:[true,'ToTime is required']
	                },
	      StaffName:{
		      	           type:String,
		                   required:[true,'Staff Name is required'],
		                   trim: true 
	                },
	      MobileNo:{
	      	               type:String,
		      	           required:[true,'Mobile number is required'],
	                       match:[/^\d{10}$/,'Mobile number must be exactly 10 digits'],
	                       trim: true 
	                },
	      VehicleName:{
		      	           type:String,
		                   required:[true,'Vehicle Name is required'],
		                   trim: true 
	                    },
	      Model:{
      	           type:String,
                   required:[true,'Model Name is required'],
                   trim: true 
                },
          Variant:{
	      	           type:String,
	                   required:[true,'Variant is required'],
	                   trim: true 
                    },
         Color:   {
	      	           type:String,
	                   required:[true,'Color is required'],
	                   trim: true 
                    },
	      VehicleNo:{
	      	           type:String,
	                   required:[true,'Vehcile No. is required'],
	                   trim: true 
                    },
          FuelType:{
	      	           type:String,
	                   required:[true,'Fuel Type is required']
                    },
          Reviews:String
	                  


})

module.exports=mongoose.model("TestDrive_Entrys",TestDrive_Schema);
const mongoose = require('mongoose');
const Visitors_Schema= new mongoose.Schema({
	      Entry_date:{
	      	           type:String,
	                   required:[true,'Entry Date is required']
                    },
	      Visitors_Name:{
	      	           type:String,
	                   required:[true,'Visitors Name is required'],
	                   trim: true 
                    },
	      MobileNo:{
	      	           type:String,
	                   required:[true,'Mobile No. is required'],
	                   match:[/^\d{10}$/,'Mobile number must be exactly 10 digits'],
	                   trim: true 
                    },
	      PurposeOfVisit:{
	      	           type:String,
	                   required:[true,'Purpose Of Visit is required'],
	                   trim: true 
                    },
	      InterestedVehicleModel:{
	      	                      type:String,
	                              required:[true,'Interested In Any Vehicle is required'],
	                              trim: true 
                                 },
	      CheckInTime:{
	      	           type:String,
	                   required:[true,'Check In Time is required']
                    },
	      StaffName:{
	      	           type:String,
	                   required:[true,'Staff Name is required'],
	                   trim: true 
                    },
	      CheckOutTime:String,
	      Reviews:String
})

module.exports=mongoose.model("visitors_entrys",Visitors_Schema);


const mongoose=require('mongoose');

const AccountSchema= new mongoose.Schema({
	      AcDate:{
	      	           type:String,
	                   required:[true,'Date is required']
	                   },
	      Account_Name:{
	      	           type:String,
	                   required:[true,'Account Name is required'],
	                   trim: true 
	                   },
	      Opening_Balance:{
	      	           type:Number,
	                   required:[true,'Opening Balance  is required']
	                 },
	      ScheduleType:{
	      	           type:String,
	                   required:[true,'Schedule Type is required']
	                   },
	      Address:    {
	      	           type:String,
	                   required:[true,'Address is required'],
	                   trim: true 
	                 },
	      State:{
	      	           type:String,
	                   required:[true,'State Name is required'],
	                   trim: true 
	                 },
	      City:      {
	      	           type:String,
	                   required:[true,'City Name is required'],
	                   trim: true 
	                 },
	      Email:     {
	      	           type:String,
	                   required:[true,'Email is required'],
	                   trim: true 
	                 },
	      AcMobileNo:{
	      	          type:String,
	                  required:[true,'Mobile number is required'],
	                  match:[/^\d{10}$/,'Mobile number must be exactly 10 digits']
	                  },
	      PanNo: {
	      	           type:String,
	                   required:[true,'PanNo is required'],
	                   trim: true 
	                 },
	      AdharNo:{
	      	       type:String,
	               required:[true,'Aadhar number is required'],
	               match:[/^\d{12}$/,'Aadhar number must be exactly 12 digits']
	               },
	      GSTIN: {
	      	           type:String,
	                   required:[true,'GSTIN is required'],
	                   trim: true 
	                 },
	      AccountNo:{
	      	         type:String,
	                 required:[true,'Account number is required'],
	                 match:[/^\d{10}$/,'Account number must be exactly 10 digits'],
	                 trim: true 
	                },
	      IFSC:{
	      	           type:String,
	                   required:[true,'IFSC is required'],
	                   trim: true 
	                 },
	      AccountType:{
	      	           type:String,
	                   required:[true,'Account Type is required']
	                 },
	      BankName:{
	      	           type:String,
	                   required:[true,'Bank Name is required'],
	                   trim: true 
	                 },
	      CreditLimit:{
	      	           type:Number,
	                   required:[true,'Credit Limit is required']
	                 }
})
module.exports=mongoose.model("account_master_for_showrooms",AccountSchema);
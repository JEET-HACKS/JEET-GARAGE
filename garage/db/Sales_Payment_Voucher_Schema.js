const mongoose=require('mongoose');
const Sales_Payment_Voucher_Schema=new mongoose.Schema({
	        SalesInvnDate:{
			      	           type:String,
			                   required:[true,'Date is required']
                             },
	        SalesInvn:{
			      	           type:String,
			                   required:[true,'Sales Invoice is required']
                             },
	        CustomerName:{
			      	           type:String,
			                   required:[true,'Customer Name is required'],
			                   trim: true 
                             },
	        Type:{
			      	           type:String,
			                   required:[true,'Type is required']
                             },
	        PurchaseAmt:Number,
	        DebitAmt:{
			      	           type:Number,
			                   required:[true,'Debit Amount is required'],
			                   trim: true 
                             },
	        Pending_Amt:   {
			      	           type:Number,
			                   required:[true,'Pending Amount is required']
                             },
	        Payment_Type:{
			      	           type:String,
			                   required:[true,'Payment Type is required']
                             },
	        Cheque_No:String,
	        UPI_ID:String

})
module.exports=mongoose.model("sales_payment_transactions",Sales_Payment_Voucher_Schema);
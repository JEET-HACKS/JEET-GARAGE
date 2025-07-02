const mongoose=require('mongoose');

const Purchase_Payment_Voucher_Schema=new mongoose.Schema({
	        SupplierInvnDate:{
			      	           type:String,
			                   required:[true,'Date is required']
                             },
	        SupplierInvn:{
			      	           type:String,
			                   required:[true,'Supplier Invoice is required']
                             },
	        SupplierName:{
			      	           type:String,
			                   required:[true,'Supplier Name is required']
                             },
	        Type:           {
			      	           type:String,
			                   required:[true,'Type is required']
                             },
	        PurchaseAmt:String,
	        DebitAmt:        {
			      	           type:Number,
			                   required:[true,'Debit Amount is required']
                             },
	        Pending_Amt:     {
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
module.exports=mongoose.model("purchase_payment_transactions",Purchase_Payment_Voucher_Schema);
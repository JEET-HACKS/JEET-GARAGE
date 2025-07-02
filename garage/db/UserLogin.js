const mongoose=require('mongoose');
const UserLoginSchema=new mongoose.Schema({
	UserName:{
  	           type:String,
               required:[true,'Enter UserName Or Password']
             },
	Password:{
  	           type:String,
               required:[true,'Enter UserName Or Password']
             },
})

module.exports=mongoose.model("js_secute",UserLoginSchema);
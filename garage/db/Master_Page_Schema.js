const mongoose= require('mongoose');
const Master_Page_Schema=new mongoose.Schema({
	   PageName:String,
	   PageIcons:String,
	   Outlet:String,
	   PageUrl:String
})
module.exports=mongoose.model("masterpages",Master_Page_Schema);
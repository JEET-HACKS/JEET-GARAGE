const mongoose = require('mongoose');
const {ObjectId} =require('mongodb');
require('./db/garageconfig');
const User = require('./db/UserLogin');
const clear =require('./db/ClearVehicleSchema');
const Mechanics = require('./db/mechanics_Master');
const services = require('./db/ServicesSchema');
const Vehicle = require('./db/Vehicle_Schema');
const Invoice = require('./db/Invoice_Schema');
const VehicleInShowRoom  = require('./db/AddNewVehicleInShowRoomSchema');
const Account_master  = require('./db/Account_master_Schema');
const Vehicle_purchase_master  = require('./db/Vehicle_purchase_Schema');
const purchase_payment_voucher = require('./db/Purchase_Payment_Voucher_Schema');
const Visitors_Entry = require('./db/Visitors_entry_Schema');
const TestDrive_Entry = require('./db/TestDrive_Schema');
const Masters = require('./db/Master_Page_Schema');
const Sale_Invoice_Schema = require('./db/Sales_Invoice_For_Vehicle_Schema');
const Sales_Payment_Voucher_Schema = require('./db/Sales_Payment_Voucher_Schema');

const jwt=require('jsonwebtoken');
const jwtkey="garage786";
const express = require('express');
const app = express();



// Define the signature of the functions in the DLL (adjust these according to your DLL's functions)

const cors = require('cors');
app.use(express.json());
app.use(cors());
var finalresult="";


// const ffi = require('ffi-napi');
// const finger=require('fingerprintjs2');




const path = require('path');

// Define the path to the MFS100 DLL
// const dllPath = 'C:/Program Files/Mantra/RDService/MFS100.MFS100R0.dll';

// // Load the MFS100 DLL using ffi.Library (correct function name)
// const mfs100 = ffi.Library(dllPath, {
//   'InitializeScanner': ['int', []],               // Example: Replace with actual function signatures from the SDK
//   'CaptureFingerprint': ['int', []],              // Example: Replace with actual function signatures
//   'GetFingerImage': ['int', ['pointer']]          // Example: Replace with actual function signature for getting the fingerprint image
// });

// // Function to initialize the scanner
// function initializeScanner() {
//   const result = mfs100.InitializeScanner();
//   if (result === 0) {
//     console.log('Scanner initialized successfully');
//   } else {
//     console.log('Error initializing scanner:', result);
//   }
// }

// // Function to capture a fingerprint image
// function captureFingerprint() {
//   const fingerImageBuffer = Buffer.alloc(1024);  // Adjust buffer size based on SDK docs
//   const result = mfs100.CaptureFingerprint(fingerImageBuffer);

//   if (result === 0) {
//     console.log('Fingerprint captured successfully');
//     // Process the fingerImageBuffer (e.g., save it as an image file or send it for further processing)
//   } else {
//     console.log('Error capturing fingerprint:', result);
//   }
// }

// // Example usage
// initializeScanner();
// captureFingerprint();







// jeet

app.post('/login', async (req,resp)=>{
	// changes
    const { UserName, Password } = req.body;
	
	 if (!UserName || !Password) {
            return resp.status(400).send("Incorrect Username or Password");
        }

	let user=await User.findOne([UserName]);
	// const isMatch = await bcrypt.compare(Password, user.Password);
	// changes
	
	// if(req.body.UserName && req.body.Password){

			// let user=await User.findOne(req.body);
			if(user)
	        {
		    jwt.sign({user}, jwtkey,{expiresIn:"2h"},(err,token)=>{

			    if(err)
			       {
				    resp.send("Something went wrong try after some time");
			       }
			  else{
			     	resp.send({user,auth:token});
			     }
		      })
        	 }
        	 else{
        	 	 resp.send("incorrect UserName Or Password");
        	 }

	// }
	// else{
	// 	resp.send("incorrect UserName Or Password");
	// }

})

app.get('/getmechanicsdetails', async (req, resp) => {
    try {
        // Step 1: Fetch all mechanics
        let mechanics = await Mechanics.find();
        // resp.send(mechanics);
        // Fetch all services
        let Services = await services.find();

        // Step 2: Combine the data by matching Specialization with Service _id
        const enrichedMechanics = mechanics.map(mechanic => {
            // Find the service that matches the mechanic's Specialization
            const service = Services.find(service => service._id.toString() === mechanic.Specialization.toString());

            // Return the mechanic data along with the matched service details
            return {
                ...mechanic.toObject(),
                serviceDetails: service ? service : null // Add service details if a match is found
            };
        });

        // Step 3: Send the combined data as a response
          let mechani = await Mechanics.countDocuments();
          
        resp.send(enrichedMechanics);
    } catch (error) {
        console.error('Error fetching mechanics:', error);
        resp.status(500).send({ error: 'Failed to fetch mechanics' });
    }
});

app.post('/addmechanicsdetails/:id', async (req,resp)=>{
         var mechanics=new Mechanics(req.body);
	     try{
	     	  await mechanics.validate();
              if(req.params.id == "add")
		       {
		     		
		            let result=await mechanics.save();
		            resp.send("ok");
		       }
	     	else{
	     		finalresult=await Mechanics.deleteOne({_id:req.params.id});
	     		let mechanics=new Mechanics(req.body);
	            let result=await mechanics.save();
	            resp.send("ok");
	     	    }
	     }
	     catch(err)
	     {
	     	 const errorMessages = Object.values(err.errors).map(e => e.message);
             console.log({ error: errorMessages[0] }); 
             //console.log({ error: err.message[0] });
             resp.send(errorMessages[0]);
	     }
	     
	     
})

app.post('/addVehicleDetails', async (req,resp)=>{
	var vehicle=new Vehicle(req.body);
	try{
		 await vehicle.validate();
		 let result = await vehicle.save();
	     resp.send('ok');
	}
	catch(err)
	{
           const errorMessages = Object.values(err.errors).map(e => e.message);
           console.log({ error: errorMessages[0] }); 
           //console.log({ error: err.message[0] });
           resp.send(errorMessages[0]); 
	}
	

})

app.delete('/deletemechanicsdetails/:id',async (req,resp)=>{
	let mechanics= await Mechanics.deleteOne({_id:req.params.id});
	resp.send(mechanics);
	//console.log(mechanics.deletedCount);
})

app.get('/getVehicleDetails', async (req, resp) => {
  try {
    const vehicles = await Vehicle.find();
    const mechanics = await Mechanics.find();
   
    const combined = vehicles.map(vehicle => {
      const matchedMechanic = mechanics.find(
        mech => mech._id?.toString() == vehicle.Mechanic_Name?.toString()
      );
       
      return {

        ...vehicle.toObject(),
        mechdata: matchedMechanic || null
      };
    });
    console.log(combined);
    return resp.send(combined);
  } catch (error) {
    console.error("Error in /getVehicleDetails:", error);

    if (!resp.headersSent) {
      return resp.status(500).send("Internal Server Error");
    }
  }
});



app.post('/addservicedetails',async (req,resp)=>{
	 let Services= new services(req.body);
	 let result=await Services.save();
	 resp.send('Service Added Successfully');
})

app.get('/getServices', async(req,resp)=>{
        let Services=await services.find();
       //console.log(Services);
       
        resp.send(Services);
})

app.delete('/deleteVehicleDetails/:id', async (req,resp)=>{
           finalresult=await Vehicle.deleteOne({_id:req.params.id});
           resp.send('Vehicle Deleted Successfully');
})

app.get('/getUpdatedDetails/:id', async (req,resp)=>{
	    var vehicleupdate=await Vehicle.findOne({_id:req.params.id});
	    resp.send(vehicleupdate);
	    //console.log(vehicleupdate);
	    
})

app.get('/bindmechanicsdetails', async (req,resp)=>{
	var mech=await Mechanics.find();
	//console.log(mech);
	resp.send(mech);
	
})

app.get('/ClearVehicleFromService/:id', async (req,resp)=>{
	var clearVehicle=await Vehicle.findOne({_id:req.params.id});
	resp.send(clearVehicle);

})

app.post('/addClearVehicleFromService',async (req,resp)=>{
        var clearVehicle=new clear(req.body);
        var cleardata=await clearVehicle.save();
        resp.send(cleardata);

})

app.delete('/deleteClearVehicleFromService/:id', async (req,resp)=>{
	   var deleted=await Vehicle.deleteOne({_id:req.params.id});
	   resp.send('Vehicle Clear Successfully');
})

app.get('/getClearVehicleDetails', async (req,resp)=>{
	   var clearvehicle=await clear.find();
       var mechanic = await Mechanics.find();

	   finalresult = clearvehicle.map(vehi=>{
	   var mech=mechanic.find(mech=>mech._id.toString() === vehi.Mechanic_Name.toString())

	   	             return{
	   	             	...vehi.toObject(),
                        mechdata:mech ? mech : null
	   	             };
	   })
	   //console.log(finalresult);
	   resp.send(finalresult);
})

app.get('/GetVehicleClearDetails/:id', async (req,resp)=>{
        var cleardata=await clear.findOne({_id:req.params.id});
        var InvNcount=await Invoice.countDocuments({});
        console.log(cleardata);
        if(cleardata)
        {
        const arrayInvoice=cleardata?[cleardata]:[];
        var cost=await services.findOne({_id:cleardata.Service_Type});
        const costnew=cost?[cost]:[];
        	finalresult=arrayInvoice.map(vehi=>{
        		                   var mech=costnew.find(mech=>mech._id.toString() === vehi.Service_Type.toString())
        		            return{
        		            	  ...vehi.toObject(),
        		            	  cost:mech ? mech : null,
        		            	  InvNo:InvNcount+1

        		            };
        	})
        	console.log(finalresult);
            resp.send(finalresult);
        }
        else{
        	var Invoicedata=await Invoice.findOne({_id:req.params.id});
        	console.log(Invoicedata);
        	var InvoiceBind=Invoicedata?[Invoicedata]:[];
            resp.send(InvoiceBind);

        }
       
})


app.post('/AddInvoiceDetails/:id/:status', async (req,resp)=>{
	     // var status=localStorage.getItem("status");
	     // console.log(status);
	     var data=req.body;
	     var data1=data?[data]:[];

	     console.log(req.body);

	     var invoice = new Invoice(data);
	     try{
	     	    await invoice.validate();
                if(req.params.status == "edit")
			      {
		            var delet=await Invoice.deleteOne({_id:req.params.id});  
			        var result=await invoice.save();
			        resp.send("ok");
			       }
			     else
				     {
				     	var invoice = new Invoice(data);
				        var result=await invoice.save();
				        var dele=await clear.deleteOne({_id:req.params.id});
				        resp.send("ok");
				     }     
	     }
	     catch(err)
	     {
                   const errorMessages = Object.values(err.errors).map(e => e.message);
		           console.log({ error: errorMessages[0] }); 
		           //console.log({ error: err.message[0] });
		           resp.send(errorMessages[0]);
		           //resp.status(400).json({ error: err.message });
	     }

	     
})

app.get('/GetInvoiceDetails', async (req,resp)=>{
	    var invoicedetails=await Invoice.find();
	    var mechanic = await Mechanics.find();
	    var servicess=await services.find();

	   finalresult = invoicedetails.map(vehi=>{
	   	             var mech=mechanic.find(mech=>mech._id.toString() === vehi.Mechanic_Name.toString())
                     var serv=servicess.find(serv=>serv._id.toString() === vehi.Service_Type.toString())
	   	             return{
	   	             	...vehi.toObject(),
                        mechdata:mech ? mech : "Mechanic is Not Found",
                        servdata:serv ? serv:"no Service Found"
	   	             };
	   })
	   console.log(finalresult);
	   resp.send(finalresult);
})


app.get('/bindInvoicePrint/:id',async (req,resp)=>{
	    
	   
	    const invoice = await Invoice.findOne({ _id:req.params.id });
	    var mechanic = await Mechanics.find();
	    var servicess=await services.find();
	    const arrayInvoice=invoice?[invoice]:[];
	    

	    var final = arrayInvoice.map(vehi => {
        const mech = mechanic.find(mech => mech._id.toString() == vehi.Mechanic_Name.toString());
        const serv = servicess.find(serv => serv._id.toString() === vehi.Service_Type.toString());

        return {
            ...vehi.toObject(),
            mechdata: mech ? mech : "Mechanic is Not Found",
            servdata: serv ? serv : "no Service Found"
        };
    });
	     console.log(final);
	     resp.send(final);

})

app.put('/UpdateVehicleEntry/:id',async (req,resp)=>{
	     var savedata= new Vehicle(req.body);
	try{
		       await savedata.validate();
	           var result=await Vehicle.updateOne(
													{_id:req.params.id},
														{
															$set:req.body
														}
		                                         )
	           resp.send("ok");
	}
	catch(err)
	{
           const errorMessages = Object.values(err.errors).map(e => e.message);
           console.log({ error: errorMessages[0] }); 
           //console.log({ error: err.message[0] });
           resp.send(errorMessages[0]);
           //resp.status(400).json({ error: err.message });
	}
	
	

})

app.delete('/DeleteInvoiceDetails/:id', async (req,resp)=>{
	   finalresult = await Invoice.deleteOne({_id:req.params.id});
	   resp.send('Invoice Deleted Successfully');

})

app.delete('/ClearVehicleDetails/:id', async (req,resp)=>{
	   finalresult = await clear.deleteOne({_id:req.params.id});
	   resp.send('Invoice Deleted Successfully');
})

app.get('/GetSomeDetails', async(req,resp)=>{
	   var totalInvoices = await Sale_Invoice_Schema.countDocuments({});
	   var totalVehicles = await VehicleInShowRoom.countDocuments({});
	   var totalmechanics= await Mechanics.countDocuments({});
	   var Invn          = await Invoice.countDocuments({});
	   var InvnAmt       = await Sales_Payment_Voucher_Schema.aggregate([
                                                      {
                                                      	$group:{
                                                      		_id:null,
                                                      		Total:{$sum: "$DebitAmt"}
                                                      	}
                                                      }
	   	                                          ]);
	   var TotalAmt=InvnAmt[0].Total;
	   finalresult=()=>{
	   	        return{
                        MechanicsNo:totalmechanics,
                        InvnNo:Invn,
                        Invnamt:TotalAmt,
                        totalVehicles:totalVehicles,
                        totalInvoices:totalInvoices

	   	        	   }
	   };
	   console.log([finalresult()]);
	   resp.send([finalresult()]);
	   // var totalServiceInvoice=await Invoice.find();
	   // console.log(totalmechanics.length);
	   // resp.send({count:totalmechanics.length,
	   //            totalserviceCount:totalServiceInvoice.length
	   //});
})
app.post('/AddNewVehicleShowRoom', async(req,resp)=>{

	   var savedata= new VehicleInShowRoom(req.body);
	   try{
             var result= await savedata.save();
	         resp.send('ok');
	   }
	   catch(err)
	   {
             const errorMessages = Object.values(err.errors).map(e => e.message);
               console.log({ error: errorMessages[0] }); 
           	   //console.log({ error: err.message[0] });
           	   resp.send(errorMessages[0]);
           	   //resp.status(400).json({ error: err.message });
	   }
	   

})

app.get('/VehicleShowRoomDetails', async(req,resp)=>{
	      finalresult= await VehicleInShowRoom.find();
	      resp.send(finalresult);
	      console.log(finalresult);
})

app.post('/AddNewAccountInShowRoom/:id', async(req,resp)=>{
           var saveAc= new Account_master(req.body);
           try{
           	    await saveAc.validate();
           	   if(req.params.id == "add")
			     {
		            finalresult= await saveAc.save();
		            resp.send('Account Added Successfully');
			     } 
			     else{
			     	finalresult=await Account_master.deleteOne({_id:req.params.id});
			     	 finalresult= await saveAc.save();
			     	 resp.send('Account Added Successfully');
			     }
           }
           catch(err)
           {
           	   
           	   const errorMessages = Object.values(err.errors).map(e => e.message);
               console.log({ error: errorMessages[0] }); 
           	   //console.log({ error: err.message[0] });
           	   resp.send(errorMessages[0]);
           	   //resp.status(400).json({ error: err.message });
           }
	     
	    
	     
	    

	     
})

app.get('/GetAccountDetailsInShowRoom', async(req,resp)=>{
	    finalresult = await Account_master.find();
	    resp.send(finalresult);
})

app.get('/GetVehicleBind',async(req,resp)=>{
        finalresult=await VehicleInShowRoom.find();
        resp.send(finalresult);
})

app.get('/GetVehicleFuntion/:id', async(req,resp)=>{
	    finalresult=await VehicleInShowRoom.findOne({_id:req.params.id},{ModelName:1,Variant:1,ExShowRoomPrice:1,VehicleColor:1,_id:0});
	    var arrayInvoice=finalresult?[finalresult]:[];
	    console.log(arrayInvoice);
	    resp.send(arrayInvoice);
})

app.get('/EditMechanics/:id', async(req,resp)=>{
	   finalresult=await Mechanics.findOne({_id:req.params.id});
	   console.log(finalresult);
	   var mechdetails=finalresult?[finalresult]:[];
	   resp.send(mechdetails);
})


app.post('/SaveVehiclePurchase', async(req,resp)=>{
	     
	     var data = req.body[0];
         var vehicle = new Vehicle_purchase_master(data);
         var data2=req.body;
	     //var saveAc= new Vehicle_purchase_master(req.body);
	     try{
	     	    await vehicle.validate();
		     	var result = await Vehicle_purchase_master.insertMany(req.body);
			    finalresult=await Vehicle_purchase_master.find({SupplierName:data2[0].SupplierName},{SupplierInvn:1,Pending_Amt:1,_id:1});
			    var total=finalresult.reduce((acc,option)=> acc+option.Pending_Amt,0);
			    console.log("OK");
		        console.log(finalresult);
		        
			     
			     
			     // finalresult = await Vehicle_purchase_master.find();
			      if(finalresult)
			      {
			      	console.log("yes");
			      	 var total=finalresult.reduce((acc,option)=> acc+option.Pending_Amt,0);
			      console.log(finalresult);
			      console.log(total);
				   // var newpendingAmt=data[0].Pending_Amt+total;
				   data2[0].Pending_Amt=total;
			      }
			     
			      finalresult = await purchase_payment_voucher.insertMany(req.body);
			     // var vehicle_purchase=new Vehicle_purchase_master(Purchase);
			     // finalresult=await vehicle_purchase.save();
			     resp.send('ok');
			     
			     // console.log(ChildData);
			     // var child = ChildData?[ChildData]:[];
			     // console.log(child);
	     }
	     catch(err)
	     {
	     	if (err.name === "ValidationError")
	     	{
	     		var errorMessages = Object.values(err.errors).map(e => e.message);
               //console.log({ error: errorMessages }); 
           	   console.log({ error: err.message[0] });
           	   resp.send(errorMessages[0]);
           	   //resp.status(400).json({ error: err.message });
	     	}
	     	else
	     	{
	     	   console.log(err);
               resp.send("ok");
	         }
	     	}
	      

	    
})

app.get('/BindPurchaseLedger/:id', async(req,resp)=>{
	    // const result = await purchase_payment_voucher.find();
	     finalresult=await purchase_payment_voucher.find({SupplierName:req.params.id});

	    resp.send(finalresult);
	    

})

app.get('/SupplierBind', async(req,resp)=>{
	    finalresult=await Account_master.find({AccountType:"SUPPL"});
	    
	    resp.send(finalresult);
})

app.get('/InvoiceBind/:id', async(req,resp)=>{
// 	    const result = await Vehicle_purchase_master.aggregate([
//             { $match: { SupplierName: req.params.id } },
//             // Match the documents with the specific SupplierName
//             { $group: { _id:1, totalPendingAmount: { $sum: "$Pending_Amt" } } }  // Sum the Pending_Amt values
//          ]);

// console.log(result);  // Display the total or 0 if no result
           
	    finalresult=await Vehicle_purchase_master.find({SupplierName:req.params.id},{SupplierInvn:1,Pending_Amt:1,_id:1});
	    var total=finalresult.reduce((acc,option)=> acc+option.Pending_Amt,0);
        console.log(total);
        var fulldata=[...finalresult,{Total:total}];
	    console.log(fulldata);
	    resp.send(fulldata);
})



app.post('/SavePayment', async(req,resp)=>{
	var data=req.body;
	var data2 = req.body[0];
	console.log(data2);
    var vehicle = new purchase_payment_voucher(data2);
	    try{
	    	await vehicle.validate();
	    	
		    var newpendingAmt=data[0].Pending_Amt-data[0].DebitAmt;
		    data[0].Pending_Amt=newpendingAmt;
		
		    finalresult= await Vehicle_purchase_master.updateOne({SupplierInvn:data[0].SupplierInvn.trim()},{ $set: {Pending_Amt:newpendingAmt}})
		    finalresult = await Vehicle_purchase_master.find({SupplierName:data[0].SupplierName.trim()});
		    
		    var total=finalresult.reduce((acc,option)=> acc+option.Pending_Amt,0);
	   
	        
		    // var newpendingAmt=data[0].Pending_Amt+total;
		    data[0].Pending_Amt=total;
		    finalresult = await purchase_payment_voucher.insertMany(req.body);
		    resp.send("ok");
	       }
	       catch(err)
	       {
		       	if (err.name === "ValidationError")
		     	{
		     		var errorMessages = Object.values(err.errors).map(e => e.message);
	               console.log({ error: errorMessages[0] }); 
	           	   console.log({ error: err });
	           	   //resp.send(errorMessages[errorMessages.length-1]);
	           	   resp.send(errorMessages[0]);
	           	   //resp.status(400).json({ error: err.message });
		     	}
		     	else
		     	{
		     	   console.log("Something went wrong");      
		         }
	       }
	      // finalresult = await purchase_payment_voucher.insertMany(req.body);
	      // resp.send('Purchase Payment Successfully');
})

app.post('/SaveVisitors/:id', async(req,resp)=>{
	     var saveAc= new Visitors_Entry(req.body);
	     
	    // console.log('save visitors');
	     try{
	     	    await saveAc.validate();
			    if(req.params.id == "add")
			    {
			       finalresult= await saveAc.save();
			       resp.send("ok");   	
			    }
			    else{
		             finalresult= await Visitors_Entry.deleteOne({_id:req.params.id});
		             finalresult= await saveAc.save();
		             resp.send("ok");   	
			    }
	     }
	     catch(err){
                const errorMessages = Object.values(err.errors).map(e => e.message);
               console.log({ error: errorMessages[0] }); 
           	   //console.log({ error: err.message[0] });
           	   resp.send(errorMessages[0]);
           	   //resp.status(400).json({ error: err.message });
	     }
	     

})

app.get('/GetVisitorsDetails', async(req,resp)=>{
	    finalresult = await Visitors_Entry.find();
	    console.log(finalresult);
	    resp.send(finalresult);
})

app.get('/GetVehicles', async(req,resp)=>{
	    finalresult=await VehicleInShowRoom.find({VehicleStatus:"UNSOLD"});
	    
	    resp.send(finalresult);

})
app.get('/GetFeatures/:id', async(req,resp)=>{
	    finalresult =await VehicleInShowRoom.find({_id:req.params.id});
        console.log(finalresult);
	    resp.send(finalresult);
})

app.delete('/DeleteVisitors/:id', async(req,resp)=>{
	    finalresult =await Visitors_Entry.deleteOne({_id:req.params.id});
	    resp.send("Entry Deleted Successfully");
})

app.post('/SaveTestDrive/:id', async(req,resp)=>{
	console.log(req.body);
	    var saveAc= new TestDrive_Entry(req.body);
	    try{

             await saveAc.validate();
			    if(req.params.id == "add")
			    {
		           finalresult = await saveAc.save();
		           resp.send("TestDrive Saved Successfully");
			    }
			    else{
			    	finalresult=await TestDrive_Entry.deleteOne({_id:req.params.id});
			    	finalresult = await saveAc.save();
			    	resp.send("TestDrive Updated Successfully");
			    }
		    }
	    catch(err)
           {
           	   
           	    const errorMessages = Object.values(err.errors).map(e => e.message);
               console.log({ error: errorMessages[0] }); 
           	   //console.log({ error: err.message[0] });
           	   resp.send(errorMessages[0]);
           	   //resp.status(400).json({ error: err.message });
           }
	    
	    
	    
})

app.get('/GetTestDriveDetails', async(req,resp)=>{
	   finalresult = await TestDrive_Entry.find();
	   console.log(finalresult);
	   resp.send(finalresult);
})

app.get('/EditVisitorsDetails/:id', async(req,resp)=>{
	    finalresult=await Visitors_Entry.find({_id:req.params.id});
	    console.log(finalresult);
	    resp.send(finalresult);
})

app.delete('/DeleteTestDriveDetails/:id', async(req,resp)=>{
	    finalresult=await TestDrive_Entry.deleteOne({_id:req.params.id});

})

app.get('/EditTestDriveDetails/:id', async(req,resp)=>{
	     finalresult=await TestDrive_Entry.find({_id:req.params.id});
	     resp.send(finalresult);
})

app.delete('/DeleteAccountFromMaster/:id', async(req,resp)=>{
	     finalresult=await Account_master.deleteOne({_id:req.params.id});
	     resp.send(finalresult);
})

app.get('/EditAccountFromMaster/:id', async(req,resp)=>{
	      finalresult=await Account_master.find({_id:req.params.id});
	      console.log(finalresult);
	      resp.send(finalresult);
})

app.delete('/DeletePurchaseVoucher/:id', async(req,resp)=>{
	      finalresult=await Vehicle_purchase_master.deleteOne({_id:req.params.id});
	      resp.send(finalresult);
})

app.get('/EditPurchaseDetails/:id', async(req,resp)=>{
	      finalresult=await Vehicle_purchase_master.find({_id:req.params.id});
	      console.log(finalresult);
	      resp.send(finalresult);
})

app.post('/AddMasters', async(req,resp)=>{
	        var saveAc= new Masters(req.body);
	      finalresult=await saveAc.save();
	      resp.send(finalresult);

})

app.post('/SaveVehicleSales', async(req,resp)=>{
	    // var data=req.body;
	    // console.log(req.body);
	    var data = req.body[0];
         var vehicle = new Sale_Invoice_Schema(data);
         var data2=req.body;
         console.log(data);
	    try{
	    	await vehicle.validate();
	        var result = await Sale_Invoice_Schema.insertMany(req.body);

		    finalresult=await Sale_Invoice_Schema.find({StaffName:data2[0].StaffName},{SalesInvn:1,Pending_Amt:1,_id:1});
		    var total=finalresult.reduce((acc,option)=> acc+option.Pending_Amt,0);
            
		     // finalresult = await Vehicle_purchase_master.find();
		      if(finalresult)
		      {	
		      console.log("AAYA");
		       var total=finalresult.reduce((acc,option)=> acc+option.Pending_Amt,0);
			   // var newpendingAmt=data[0].Pending_Amt+total;
			   data2[0].Pending_Amt=total;
		      }
		      finalresult = await Sales_Payment_Voucher_Schema.insertMany(req.body);
		     // var vehicle_purchase=new Vehicle_purchase_master(Purchase);
		     // finalresult=await vehicle_purchase.save();
		     resp.send('Vehicle Purchase Added Successfully');
		     
		     // console.log(ChildData);
		     // var child = ChildData?[ChildData]:[];
		     // console.log(child);
	    }
	    catch(err)
	    {
               const errorMessages = Object.values(err.errors).map(e => e.message);
               console.log({ error: errorMessages }); 
           	   //console.log({ error: err.message[0] });
           	   resp.send(errorMessages[0]);
           	   //resp.status(400).json({ error: err.message });

	    }
	    

	    
})

app.post('/SalesPaymentVoucher', async(req,resp)=>{
	    var data=req.body[0];
	    var savedata= new Sales_Payment_Voucher_Schema(data);
	    console.log(data);
	
	try
	{
		await savedata.validate();
        
		var newpendingAmt=data.Pending_Amt-data.DebitAmt;
		data.Pending_Amt=newpendingAmt;
		
		finalresult= await Sale_Invoice_Schema.updateOne({SalesInvn:data.SalesInvn.trim()},{ $set: {Pending_Amt:newpendingAmt}})
		finalresult = await Sale_Invoice_Schema.find({CustomerName:data.CustomerName.trim()});
		console.log(finalresult);
		var total=finalresult.reduce((acc,option)=> acc+option.Pending_Amt,0);
	    console.log(total);
		// var newpendingAmt=data[0].Pending_Amt+total;
		data.Pending_Amt=total;
		finalresult = await Sales_Payment_Voucher_Schema.insertMany(req.body);
		resp.send("ok");
	    
	}
	catch(err)
	{
		       
		       	if (err.name === "ValidationError")
		     	{
			       var errorMessages = Object.values(err.errors).map(e => e.message);
	               console.log({ error: errorMessages }); 
	           	   //console.log({ error: err.message[0] });
	           	   resp.send(errorMessages[0]);
	           	   //resp.status(400).json({ error: err.message });
           	     }
           	     else{
           	     	console.log(err);
           	     }
	}
	       
	      // finalresult = await purchase_payment_voucher.insertMany(req.body);
	      // resp.send('Purchase Payment Successfully');
})

app.get('/InvoiceBindForSales/:id', async(req,resp)=>{
// 	    const result = await Vehicle_purchase_master.aggregate([
//             { $match: { SupplierName: req.params.id } },
//             // Match the documents with the specific SupplierName
//             { $group: { _id:1, totalPendingAmount: { $sum: "$Pending_Amt" } } }  // Sum the Pending_Amt values
//          ]);

// console.log(result);  // Display the total or 0 if no result
           
	    finalresult=await Sale_Invoice_Schema.find({CustomerName:req.params.id},{SalesInvn:1,Pending_Amt:1,_id:1});
	    var total=finalresult.reduce((acc,option)=> acc+option.Pending_Amt,0);
        console.log(total);
        var fulldata=[...finalresult,{Total:total}];
	    console.log(fulldata);
	    resp.send(fulldata);
})

app.get('/BindSalesLedger/:id', async(req,resp)=>{
	    // const result = await purchase_payment_voucher.find();
	     finalresult=await Sales_Payment_Voucher_Schema.find({CustomerName:req.params.id});

	    resp.send(finalresult);
	    console.log(finalresult);

})

app.get('/BindSidebar/:id',async(req,resp)=>{
	    finalresult=await Masters.find({Outlet:req.params.id});
	    resp.send(finalresult);
	    
})
app.get('/CustomerBind', async(req,resp)=>{
	    finalresult=await Account_master.find({AccountType:"CUST"});
	    
	    resp.send(finalresult);
})

app.get('/GetSalesVehicleFuntion/:id', async(req,resp)=>{
	    finalresult=await VehicleInShowRoom.findOne({_id:req.params.id},{ModelName:1,Variant:1,SalesPrice:1,VehicleColor:1,_id:0});
	    var arrayInvoice=finalresult?[finalresult]:[];
	    console.log(arrayInvoice);
	    resp.send(arrayInvoice);
})

app.get('/InvoiceN', async(req,resp)=>{
	    var InvNcount=await Invoice.countDocuments({});
	    resp.send(String(InvNcount+1));
})
app.post('/SignUpDetails', async(req,resp)=>{
	    var SaveData= new User(req.body);   
	     try{
	     	  await SaveData.validate();

	     	   await SaveData.save();
	     	   resp.send("ok");
            
	     }
	     catch(err)
	     {
	     	 const errorMessages = Object.values(err.errors).map(e => e.message);
             console.log({ error: errorMessages[0] }); 
             //console.log({ error: err.message[0] });
             resp.send(errorMessages[0]);
	     }
})

app.listen(5000, ()=>{
          console.log("server 5000 is running");
});

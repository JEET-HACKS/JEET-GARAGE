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

	if(req.body.UserName && req.body.Password){

			let user=await User.findOne(req.body);
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

	}
	else{
		resp.send("incorrect UserName Or Password");
	}

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
        console.log(enrichedMechanics);
        resp.send(enrichedMechanics);
    } catch (error) {
        console.error('Error fetching mechanics:', error);
        resp.status(500).send({ error: 'Failed to fetch mechanics' });
    }
});

app.post('/addmechanicsdetails', async (req,resp)=>{
	     if(req.body.M_Name && req.body.Specialization && req.body.MobileNo && req.body.AadharNo)
	     {
	     	let mechanics=new Mechanics(req.body);
	          let result=await mechanics.save();
	          resp.send('Mechanic Added Successfully');
	          
	     }
	     else{
	     	resp.send('Please Fill All The Details');
	     }
	     
})

app.post('/addVehicleDetails', async (req,resp)=>{
	let vehicle=new Vehicle(req.body);
	let result = await vehicle.save();
	resp.send('Vehicle Added Successfully');

})

app.delete('/deletemechanicsdetails/:id',async (req,resp)=>{
	let mechanics= await Mechanics.deleteOne({_id:req.params.id});
	resp.send(mechanics);
	//console.log(mechanics.deletedCount);
})

app.get('/getVehicleDetails', async (req,resp)=>{
	  let vehicle = await Vehicle.find();
	  var mechanic = await Mechanics.find();
	  let combineVNM = vehicle.map(vehicleDetail =>{
              var mechanicdetail= mechanic.find(mech=> mech._id.toString() === vehicleDetail.Mechanic_Name.toString())

              return{
              	...vehicleDetail.toObject(),
              	mechdata: mechanicdetail ? mechanicdetail : null
              };
	  })         
	  console.log(combineVNM);
	  resp.send(combineVNM);
})

app.post('/addservicedetails',async (req,resp)=>{
	 let Services= new services(req.body);
	 let result=await Services.save();
	 resp.send('Service Added Successfully');
})

app.get('/getServices', async(req,resp)=>{
        let Services=await services.find();
       console.log(Services);
        resp.send(Services);
})

app.delete('/deleteVehicleDetails/:id', async (req,resp)=>{
           finalresult=await Vehicle.deleteOne({_id:req.params.id});
           resp.send('Vehicle Deleted Successfully');
})

app.get('/getUpdatedDetails/:id', async (req,resp)=>{
	    var vehicleupdate=await Vehicle.findOne({_id:req.params.id});
	    resp.send(vehicleupdate);
	    console.log(vehicleupdate);
	    
})

app.get('/bindmechanicsdetails', async (req,resp)=>{
	var mech=await Mechanics.find();
	console.log(mech);
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
	   console.log(finalresult);
	   resp.send(finalresult);
})

app.get('/GetVehicleClearDetails/:id', async (req,resp)=>{
        var cleardata=await clear.findOne({_id:req.params.id});
         console.log(cleardata);
        var cost=await services.findOne({_id:cleardata.Service_Type});
        const arrayInvoice=cleardata?[cleardata]:[];
        const costnew=cost?[cost]:[];
        console.log(costnew);
          console.log(arrayInvoice);
        
        if(cleardata)
        {
        	finalresult=arrayInvoice.map(vehi=>{
        		                   var mech=costnew.find(mech=>mech._id.toString() === vehi.Service_Type.toString())
        		            return{
        		            	  ...vehi.toObject(),
        		            	  cost:mech ? mech : null

        		            };
        	})
        	console.log(finalresult);
            resp.send(finalresult);
        }
        else{
        	var Invoicedata=await Invoice.findOne({_id:req.params.id});
        	console.log(Invoicedata);
            resp.send(Invoicedata);

        }
        
})



app.post('/AddInvoiceDetails', async (req,resp)=>{
	     var invoice = new Invoice(req.body);
	     var result=await invoice.save();
	     resp.send('Invoice Added Successfully');
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
	     
	
	const result=await Vehicle.updateOne(
		{_id:req.params.id},
		{
			$set:req.body
		}

	)
	resp.send('Vehicle Updated Successfully');

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
	   var totalmechanics= await Mechanics.find();
	   var totalServiceInvoice=await Invoice.find();
	   console.log(totalmechanics.length);
	   resp.send({count:totalmechanics.length,
	              totalserviceCount:totalServiceInvoice.length
	          });
})
app.post('/AddNewVehicleShowRoom', async(req,resp)=>{

	   var savedata= new VehicleInShowRoom(req.body);
	   var result= await savedata.save();
	   resp.send('Vehicle Added Successfully');

})

app.get('/VehicleShowRoomDetails', async(req,resp)=>{
	      finalresult= await VehicleInShowRoom.find();
	      resp.send(finalresult);
	      console.log(finalresult);
})

app.post('/AddNewAccountInShowRoom', async(req,resp)=>{
	     var saveAc= new Account_master(req.body);
	     finalresult= await saveAc.save();
	     resp.send('Account Added Successfully');
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
	    finalresult=await VehicleInShowRoom.findOne({_id:req.params.id},{ModelName:1,Variant:1,ExShowRoomPrice:1,_id:0});
	    var arrayInvoice=finalresult?[finalresult]:[];
	    console.log(arrayInvoice);
	    resp.send(arrayInvoice);
})

app.listen(5000, ()=>{
     console.log("server 5000 is running");
});
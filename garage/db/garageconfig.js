// const mongoose=require('mongoose');
// mongoose.connect('mongodb://localhost:27017/Garage');
// mongoose.connect(process.env.MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => console.log('✅ Connected to MongoDB'))
// .catch((err) => console.error('❌ Connection error:', err));
const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://jitendra:Jitendra00%40%21@jeet-garage.cuwdwtq.mongodb.net/Garage?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB Atlas'))
.catch(err => console.error('Connection error:', err));

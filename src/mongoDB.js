const mongoose = require('mongoose');

async function connectDB() {
  try {
    await mongoose.connect('mongodb://localhost/e-actividad-3-2', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB is Connected');
  } catch(e) {
    console.log(e);
  } 
}

connectDB();
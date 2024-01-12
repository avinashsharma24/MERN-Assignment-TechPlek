const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/client-details');

console.log("connection established");
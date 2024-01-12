const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

      name : String,
      lastName : String,
      email : String,
      mobile : Number,
      project : String
})

module.exports = mongoose.model("clients" , userSchema);
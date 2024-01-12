const express = require("express");
 require('./db/config');

const cors = require('cors');

const User = require('./db/users')

const app = express();

app.use(express.json());  // what it does what data is send from postman or react ot controll them or what ever payload we send from 

app.use(cors());  

// post request for saving the data to the database 

app.post("/register" , async (req,res)=>{

     const user = new User(req.body);

      let result = await user.save();

      res.send(result);  // req.body is used to acces the data send by client on body of backend.
})


//get request for getting the data from the database

app.get('/getdata' , async(req,res) =>{

      const userdata = await User.find();
       if(userdata.length > 0)
       {
          res.send(userdata);
       }
       else
       {
          res.send({result : "no client is there"})
       }

})


app.delete("/Client/:id" , async (req,res)=>{

     // res.send(req.params.id)  getting the id in post man just for verification that we are getting the id or nor  (params -- parameters)

      const result = await User.deleteOne({_id:req.params.id});
      res.send(result);
})



app.get('/Client/:id' , async(req,res) =>{

     const result = await User.findOne({_id:req.params.id});
   
      if(result)
      {
         res.send(result)
      }
      else{
         res.send({result : "no record found"})
      }
})

// app.get("/" , (req,res) =>{
//      res.send("hey there port started")
// })


app.listen(5002);
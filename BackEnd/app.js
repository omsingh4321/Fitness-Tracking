
const dotenv=require("dotenv")
 dotenv.config();
const conn = require('./connections/mongoConn.js');
conn();

const express=require('express');
const cors= require('cors');
const app= express();
const authRouter=require('./modules/auth/router.js');
app.use(express.json()); //To get the data in json format in  frontend for postman
app.use(express.urlencoded({extended:true}));// taking data from frontEnd

app.use(cors())

app.use('/omApi',authRouter);

app.listen(3000,()=>{
    console.log("app is listening on 3000")
})




  

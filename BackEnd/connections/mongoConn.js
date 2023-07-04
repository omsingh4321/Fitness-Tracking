const mongoose = require('mongoose');

const fun=async()=>{
    try {
        const conn=await  mongoose.connect(process.env.ConnectionMongoUrl);
        console.log("mongoose connected");
    } catch (error) {
        console.log("ERROR::",error.message)
    }
}

module.exports=fun;


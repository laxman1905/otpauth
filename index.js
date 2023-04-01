require('dotenv').config();
const express = require("express");
require('./database/db');
const PORT = process.env.PORT || 2001;
const app = express();
const otpRouter = require("./router/otpRouter")

app.use("/api/otp", otpRouter)



app.get("/", async (req, res) => {
    try {
        return res.status(200).json({status:"success",message:"server runnig Successfully"})
    } catch (error) {
        return res.status(200).json({status:false,data:"server not runnig ",error:error.message})
        
    }
})



app.listen(PORT, ()=>{
    console.log(`Servier runnig on port ${PORT}`)
})

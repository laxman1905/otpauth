require('dotenv').config();
const express = require("express");
require('./database/db');
const PORT = process.env.PORT || 2001;
const app = express();
const otpRouter = require("./router/otpRouter")

app.use("/api/otp", otpRouter)



app.get("/", async (req, res) => {
    console.log("hello from otp new project")
})



app.listen(PORT, ()=>{
    console.log(`Servier runnig on port ${PORT}`)
})
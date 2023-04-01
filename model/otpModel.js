const mongoose = require('mongoose');


var optSchema = new mongoose.Schema({
    otp:{
        type:Number,
        // required:true,
    },
},{timestamps:true});

//Export the model
const Otp = mongoose.model('Otp', optSchema);
module.exports = { Otp }
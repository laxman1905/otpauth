const { Otp } = require("../model/otpModel");



const saveOtp = async (req, res) =>{
    try {
        const otp =  new Otp(req.body);
        console.log(otp)
        const saveotp = await otp.save()
        return res.status(200).json({status:"success",message:"OTP save Successfully",data:saveotp})
    } catch (error) {
        return res.status(200).json({status:false,data:"No OTP Save",error:error})
        
    }
}

module.exports = { saveOtp }
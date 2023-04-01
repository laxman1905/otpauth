const express = require("express");
const { saveOtp } = require("../controller/otpController");
const router = new express.Router();



router.get("/saveOtp", saveOtp)





module.exports = router
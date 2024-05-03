const mongoose = require("mongoose");
const SignupSchema = mongoose.Schema;
let userSignupSchema = new SignupSchema({
  name : String,
  email : String,
  phone : Number,
  password  : String,
  otp : Number,
});
const NewUserDetails = mongoose.model("UserSignUpDetails", userSignupSchema);

module.exports = NewUserDetails;

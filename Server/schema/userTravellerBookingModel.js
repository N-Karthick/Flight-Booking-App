const mongoose = require("mongoose");
const BookingSchema = mongoose.Schema;

let userTravellerBookingSchema = new BookingSchema({
  from: String,
  to: String,
  date: String,
  passengers: Object,
  billingAddress: String,
  pinCode: Number,
  state: String,
  companyName :String,
  registrationNo: Number,
  email:String,
  mobile: Number,
  adults: Object,
  children:Object,
  infants:Object,

});
const TravellerBookingSchema = mongoose.model("UserTravellerBooking_Schema", userTravellerBookingSchema);

module.exports = TravellerBookingSchema;

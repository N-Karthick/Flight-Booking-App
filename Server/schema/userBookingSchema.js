const mongoose = require("mongoose");
const BookingSchema = mongoose.Schema;
let userBookingSchema = new BookingSchema({
  from : String,
  to : String,
  date : String,
  passengers : Object,
});
const TripBookingSchema = mongoose.model("UserBookingSchema", userBookingSchema);

module.exports = TripBookingSchema;

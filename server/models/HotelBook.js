const mongoose = require("mongoose");

const HotelBookSchema = mongoose.Schema(
  {
    hotelId: { type: mongoose.Schema.Types.ObjectId, ref: "hotels" },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
    checkIn: { type: String, required: true },
    checkOut: { type: String, required: true },
    rooms: { type: Array, required: true },
    payment: { type: Boolean ,default:false},

  },
  { timestamps: true }
);

const HotelBookModel =
  mongoose.models.hotelbooks || mongoose.model("hotelbooks", HotelBookSchema);

module.exports = HotelBookModel;

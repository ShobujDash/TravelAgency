const mongoose = require("mongoose");

const HotelBookSchema = mongoose.Schema(
  {
    hotelId: { type: mongoose.Schema.Types.ObjectId, ref: "hotels" },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
  },
  { timestamps: true }
);

const HotelBookModel =
  mongoose.models.hotelbooks || mongoose.model("hotelbooks", HotelBookSchema);

module.exports = HotelBookModel;

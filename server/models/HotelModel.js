const mongoose = require("mongoose");

const HotelSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    roomNumber: { type: String, required: true },
    star: { type: Number, required: true, min: 1, max: 5 }, // Ensures star is between 1 and 5
    place: { type: String, required: true },
    pricePerRoom: { type: Number, required: true },
    garden: { type: Boolean, required: true },
    discount: { type: Number, default: 0 },
    discountPrice: { type: Number, default: 0 },
    rooms: [{ type: mongoose.Schema.Types.ObjectId, ref: "room" }], // Array of room references
    images: [
      {
        type: String,
        default:
          "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png",
      },
    ], // Store images as an array instead of multiple fields
  },
  { timestamps: true }
);

const HotelModel =
  mongoose.models.Hotel || mongoose.model("Hotel", HotelSchema);

module.exports = HotelModel;

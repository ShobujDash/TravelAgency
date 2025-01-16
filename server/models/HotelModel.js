const mongoose = require("mongoose");

const HotelSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    place: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    star: { type: Number, required: true, min: 1, max: 5 }, // Ensures star is between 1 and 5
    roomNumber: { type: String, required: true },
    pricePerRoom: { type: Number, required: true },
    discount: { type: Number, default: 0 },
    discountPrice: { type: Number, default: 0 },
    rooms: [{ type: mongoose.Schema.Types.ObjectId, ref: "rooms" }], // Array of room references
    images: [
      {
        imageUrl: {
          type: String,
          default:
            "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png",
        },
        imageId: { type: String, required: true },
      },
    ], // Store images as an array instead of multiple fields
  },
  { timestamps: true }
);

const HotelModel =
  mongoose.models.hotels || mongoose.model("hotels", HotelSchema);

module.exports = HotelModel;

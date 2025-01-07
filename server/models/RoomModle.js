const mongoose = require("mongoose");

const RoomSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    title: { type: String, required: true },
    roomNumber: { type: Number, required: true },
    airCondition: { type: Boolean, required: true },
    balcony: { type: Boolean, required: true },
    hairdryer: { type: Boolean, required: true },
    toiletries: { type: Boolean, required: true },
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

const RoomModel = mongoose.models.Room || mongoose.model("Room", RoomSchema);

module.exports = RoomModel;

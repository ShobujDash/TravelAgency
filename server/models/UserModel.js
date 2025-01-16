const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true }, 
    image: {
      type: String,
      default:
        "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png",
    },
    address: { type: String, default: "Dhaka" },
    gender: {
      type: String,
      enum: ["Male", "Female", "Not Selected"],
      default: "Not Selected",
    },
    phone: {
      type: String,
      default: "",
    },
    isAdmin: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const UserModel = mongoose.models.users || mongoose.model("users", DataSchema);

module.exports = UserModel;

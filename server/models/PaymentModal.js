const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    }, // Reference to users collection,
    hotelBookID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "hotelbooks",
      required: true,
    }, // Reference to users collection,
    tranNum: { type: String, required: true, trim: true },
    mobileNum: { type: String, required: true, trim: true },
    price: { type: String},
  },
  { timestamps: true, versionKey: false }
);

const PaymentModel =
  mongoose.models.payments || mongoose.model("payments", DataSchema);

module.exports = PaymentModel;

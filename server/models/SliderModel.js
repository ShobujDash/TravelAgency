const mongoose = require("mongoose");

const SliderSchema = mongoose.Schema(
  {
    images: [
      {
        imageUrl: {
          type: String,
          default:
            "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png",
        },
        imageId: { type: String, required: true },
      },
    ],
  },
  { timestamps: true }
);

const SliderModel =
  mongoose.models.sliders || mongoose.model("sliders", SliderSchema);

module.exports = SliderModel;

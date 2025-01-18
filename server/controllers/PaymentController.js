const HotelBookModel = require("../models/HotelBook");
const PaymentModel = require("../models/PaymentModal");


const createPayment = async (req, res) => {
  try {
    let user_id = req.headers.id; // Retrieve the user ID from headers
    const { tranNum, mobileNum, hotelBookID } = req.body;

    // Check if the provided orderID exists in the orders collection
    const bookedHotel = await HotelBookModel.findById(hotelBookID);
    if (!bookedHotel) {
      return res.status(404).json({
        success: false,
        message: "Booked Hotel not found with the provided orderID",
      });
    }

    // Create a new payment document
    const newPayment = new PaymentModel({
      userID: user_id,
      hotelBookID,
      tranNum,
      mobileNum,
    });

    // Save the payment document
    const savedPayment = await newPayment.save();

    // Update the payment field in the orders collection to true
    bookedHotel.payment = true;
    await bookedHotel.save();

    res.status(201).json({
      success: true,
      message: "Payment successfully",
      data: savedPayment,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};


module.exports = {
  createPayment,
};

const HotelBookModel = require("../models/HotelBook");

// Create a new booking
const createHotelBooking = async (req, res) => {
  try {
   
    console.log("userId", req.headers.id);
    const { hotelId} = req.body;

    // console.log(userId,hotelId)

    const newBooking = new HotelBookModel({ hotelId, userId: req.headers.id });
    const savedBooking = await newBooking.save();

    res.status(201).json({
      success: true,
      message: "Booking success",
      data: savedBooking,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get all bookings
const getAllHotelBookings = async (req, res) => {
  try {
    const bookings = await HotelBookModel.find().populate("hotelId userId");
    res.status(200).json({ success: true, data: bookings });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get bookings by userId
const getBookingsByUserId = async (req, res) => {
  try {
    //  const useId = req.headers.id;
    const { userId } = req.params;
    const bookings = await HotelBookModel.find({ userId }).populate(
      "hotelId"
    );
    res.status(200).json({ success: true, data: bookings });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get bookings by hotelId
const getBookingsByHotelId = async (req, res) => {
  try {
    const { hotelId } = req.params;
    const bookings = await HotelBookModel.find({ hotelId }).populate(
      "hotelId userId"
    );
    res.status(200).json({ success: true, data: bookings });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update a booking
const updateHotelBooking = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;

    const updatedBooking = await HotelBookModel.findByIdAndUpdate(
      id,
      updatedData,
      {
        new: true,
      }
    );

    if (!updatedBooking) {
      return res
        .status(404)
        .json({ success: false, message: "Booking not found" });
    }

    res.status(200).json({
      success: true,
      message: "Booking updated successfully",
      data: updatedBooking,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Delete a booking
const deleteHotelBooking = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedBooking = await HotelBookModel.findByIdAndDelete(id);

    if (!deletedBooking) {
      return res
        .status(404)
        .json({ success: false, message: "Booking not found" });
    }

    res.status(200).json({
      success: true,
      message: "Booking deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  createHotelBooking,
  getAllHotelBookings,
  getBookingsByUserId,
  getBookingsByHotelId,
  updateHotelBooking,
  deleteHotelBooking,
};

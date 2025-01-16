const HotelModel = require("../models/HotelModel");

// Create a new hotel
const createHotel = async (req, res) => {
  // const isAdmin = req.headers.isAdmin;
  // if (!isAdmin) {
  //   res.status(401).json({
  //     success: false,
  //     message: "Only Admin can add Resort data",
  //   });
  // }
  try {
    const hotel = new HotelModel(req.body);
    const savedHotel = await hotel.save();
    res.status(201).json({
      success: true,
      message: "Hotel created successfully",
      data: savedHotel,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Error creating hotel",
      error: err.message,
    });
  }
};

// Get all hotels
const getAllHotels = async (req, res) => {
  try {
    const hotels = await HotelModel.find();
    res.status(200).json({
      success: true,
      data: hotels,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Error fetching hotels",
      error: err.message,
    });
  }
};

// Get a single hotel by ID
const getHotelById = async (req, res) => {
  try {
    const { id } = req.params;
    const hotel = await HotelModel.findById(id);
    if (!hotel) {
      return res.status(404).json({
        success: false,
        message: "Hotel not found",
      });
    }
    res.status(200).json({
      success: true,
      data: hotel,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Error fetching hotel",
      error: err.message,
    });
  }
};

// Update a hotel
const updateHotel = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedHotel = await HotelModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedHotel) {
      return res.status(404).json({
        success: false,
        message: "Hotel not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Hotel updated successfully",
      data: updatedHotel,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Error updating hotel",
      error: err.message,
    });
  }
};

// Delete a hotel
const deleteHotel = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedHotel = await HotelModel.findByIdAndDelete(id);
    if (!deletedHotel) {
      return res.status(404).json({
        success: false,
        message: "Hotel not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Hotel deleted successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Error deleting hotel",
      error: err.message,
    });
  }
};

module.exports = {
  createHotel,
  getAllHotels,
  getHotelById,
  updateHotel,
  deleteHotel,
};

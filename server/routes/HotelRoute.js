const express = require("express");
const { createHotel, getAllHotels, getHotelById, updateHotel, deleteHotel } = require("../controllers/HotelController");
const AuthVerification = require("../middlewares/AuthVerification");


const router = express.Router();

// Create a hotel
router.post("/",AuthVerification, createHotel);

// Get all hotels
router.get("/", getAllHotels);

// Get a single hotel by ID
router.get("/:id",AuthVerification, getHotelById);

// Update a hotel
router.put("/:id",AuthVerification, updateHotel);

// Delete a hotel
router.delete("/:id",AuthVerification, deleteHotel);

module.exports = router;

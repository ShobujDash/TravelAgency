const express = require("express");
const { createHotelBooking, getAllHotelBookings, getBookingsByUserId, getBookingsByHotelId, updateHotelBooking, deleteHotelBooking } = require("../controllers/HotelBookController");
const AuthVerification = require("../middlewares/AuthVerification");


const router = express.Router();

// Route to create a new booking
router.post("/",AuthVerification, createHotelBooking);

// Route to get all bookings
router.get("/",AuthVerification, getAllHotelBookings);

// Route to get bookings by userId
router.get("/user/:userId",AuthVerification, getBookingsByUserId);

// Route to get bookings by hotelId
router.get("/hotel/:hotelId",AuthVerification, getBookingsByHotelId);

// Route to update a booking
router.put("/:id",AuthVerification, updateHotelBooking);

// Route to delete a booking
router.delete("/:id",AuthVerification, deleteHotelBooking);

module.exports = router;

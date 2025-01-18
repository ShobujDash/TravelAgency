const express = require("express");
const {
  createPayment,
  getPaymentById,
  getAllPayments,
  checkPaymentByOrderID,
} = require("../controllers/PaymentController");
const AuthVerification = require("../middlewares/AuthVerification");

const router = express.Router();

// Create a new payment
router.post("/create", AuthVerification, createPayment);


module.exports = router;

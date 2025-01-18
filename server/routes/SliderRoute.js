const express = require("express");
const { createSlider, getAllSliders, getSliderById, updateSlider, deleteSlider } = require("../controllers/SliderController");


const router = express.Router();

// Define routes
router.post("/", createSlider); // Create a new slider
router.get("/", getAllSliders); // Get all sliders
router.get("/:id", getSliderById); // Get a slider by ID
router.put("/:id", updateSlider); // Update a slider by ID
router.delete("/:id", deleteSlider); // Delete a slider by ID

module.exports = router;

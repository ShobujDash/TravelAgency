// slider.controller.js
const express = require("express");
const SliderModel = require("../models/SliderModel");

// CREATE a new slider
const createSlider = async (req, res) => {
  try {
    const { images } = req.body; // Expecting an array of image URLs
    const newSlider = new SliderModel({ images });
    await newSlider.save();
    res.status(201).json({
      success: true,
      message: "Slider created successfully",
      data: newSlider,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error creating slider",
      error: error.message,
    });
  }
};

// READ all sliders
const getAllSliders = async (req, res) => {
  try {
    const sliders = await SliderModel.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      message: "Sliders fetched successfully",
      data: sliders,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching sliders",
      error: error.message,
    });
  }
};

// READ a single slider by ID
const getSliderById = async (req, res) => {
  try {
    const { id } = req.params;
    const slider = await SliderModel.findById(id);
    if (!slider) {
      return res
        .status(404)
        .json({ success: false, message: "Slider not found" });
    }
    res.status(200).json({
      success: true,
      message: "Slider fetched successfully",
      data: slider,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching slider",
      error: error.message,
    });
  }
};

// UPDATE a slider by ID
const updateSlider = async (req, res) => {
  try {
    const { id } = req.params;
    const { images } = req.body; // Expecting an array of image URLs
    const updatedSlider = await SliderModel.findByIdAndUpdate(
      id,
      { images },
      { new: true } // Return the updated document
    );
    if (!updatedSlider) {
      return res
        .status(404)
        .json({ success: false, message: "Slider not found" });
    }
    res.status(200).json({
      success: true,
      message: "Slider updated successfully",
      data: updatedSlider,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error updating slider",
      error: error.message,
    });
  }
};

// DELETE a slider by ID
const deleteSlider = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedSlider = await SliderModel.findByIdAndDelete(id);
    if (!deletedSlider) {
      return res
        .status(404)
        .json({ success: false, message: "Slider not found" });
    }
    res
      .status(200)
      .json({ success: true, message: "Slider deleted successfully" });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error deleting slider",
      error: error.message,
    });
  }
};

module.exports = {
  createSlider,
  getAllSliders,
  getSliderById,
  updateSlider,
  deleteSlider,
};

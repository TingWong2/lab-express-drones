const { Schema, model } = require("mongoose");

const DroneSchema = Schema({
  name: String,
  propellers: Number,
  maxSpeed: Number
});

const DroneModel = model("Drones", DroneSchema);

module.exports = DroneModel;

'use strict';

const mongoose = require('mongoose');

const temperatureSchema = mongoose.Schema({
  value: Number,
  room: String
}, {
  timestamps: true,
});

temperatureSchema.pre('save', function (next) {
  this.lastUpdated = new Date();
  next();
});

module.exports = mongoose.model('Temperature', temperatureSchema);
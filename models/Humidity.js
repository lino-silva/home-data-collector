'use strict';

const mongoose = require('mongoose');

const humiditySchema = mongoose.Schema({
  value: Number,
  room: String
}, {
  timestamps: true,
});

humiditySchema.pre('save', function (next) {
  this.lastUpdated = new Date();
  next();
});

module.exports = mongoose.model('Humidity', humiditySchema);
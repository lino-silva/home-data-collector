'use strict';

const mongoose = require('mongoose');

const brightnessSchema = mongoose.Schema({
  value: Number,
  room: String
}, {
  timestamps: true,
});

brightnessSchema.pre('save', function (next) {
  this.lastUpdated = new Date();
  next();
});

module.exports = mongoose.model('Brightness', brightnessSchema);
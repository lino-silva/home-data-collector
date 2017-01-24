'use strict';

const mongoose = require('mongoose');

const luminositySchema = mongoose.Schema({
  value: Number
}, {
  timestamps: true,
});

luminositySchema.pre('save', function (next) {
  this.lastUpdated = new Date();
  next();
});

module.exports = mongoose.model('Luminosity', luminositySchema);
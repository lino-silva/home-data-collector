const mqtt = require('mqtt');
const mongoose = require('mongoose');
const Q = require('q');

mongoose.Promise = Q.Promise;
mongoose.connect('mongodb://localhost/home-data');

const client  = mqtt.connect('mqtt://localhost')

client.on('connect', function () {
  client.subscribe('home/#')
})


client.on('home/livingroom/temperature', function (topic, message) {
  // message is Buffer 
  console.log(message.toString());
});

client.on('home/livingroom/humidity', function (topic, message) {
  // message is Buffer 
  console.log(message.toString());
});

client.on('home/livingroom/ldr', function (topic, message) {
  // message is Buffer 
  console.log(message.toString());
});

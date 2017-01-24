const mqtt = require('mqtt');
const mongoose = require('mongoose');
const Q = require('q');

mongoose.Promise = Q.Promise;
mongoose.connect('mongodb://localhost/home-data');

const client  = mqtt.connect('mqtt://localhost')

client.on('connect', function () {
  console.log('Connected!');
  client.subscribe('home/#');
})


client.on('message', function (topic, message) {
  // message is Buffer 
  console.log(message.toString());
});

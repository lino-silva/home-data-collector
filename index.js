const mqtt = require('mqtt');
const mongoose = require('mongoose');
const Q = require('q');
const Humidity = require('./models/Humidity');
const Temperature = require('./models/Temperature');
const Brightness = require('./models/Brightness');
const NumberExtension = require('./extensions/Number')

mongoose.Promise = Q.Promise;
mongoose.connect('mongodb://localhost/home-data');

const client  = mqtt.connect('mqtt://localhost')

client.on('connect', function () {
  console.log('Connected!');
  client.subscribe('home/#');
});

client.on('message', function (topic, buffer) {
  // message is Buffer 
  const message = buffer.toString()
  
  switch (topic) {
    case 'home/livingroom/temperature':
      new Temperature({
        value: NumberExtension.tryParse(message),
        room: "Living Room"
      }).save();
    break;
    case 'home/livingroom/humidity':
      new Humidity({
        value: NumberExtension.tryParse(message),
        room: "Living Room"
      }).save();
    break;
    case 'home/livingroom/ldr':
      new Brightness({
        value: NumberExtension.tryParse(message),
        room: "Living Room"
      }).save();
    break;
  }
});

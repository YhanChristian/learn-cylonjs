/*
  First Example - Cylon e Arduino
  Actor: Yhan Christian Souza Silva - Date: 1/9/2016
*/

var Cylon = require('cylon');

//Arduíno is ready to communicate 
Cylon.robot({
  connections: {
    arduino: { adaptor: 'firmata', port: 'COM3' }
  },

//define pin 10 as an led
  devices: {
    led: { driver: 'led', pin: 10 }
  },

// turns on an LED on for two seconds, then off for two seconds, repeatedly
  work: function(my) {
    every((2).seconds(), my.led.toggle);
  }
}).start();
/*
  Second Example - Cylon and Arduino
  Use PWM to control the brightness of an LED
  Actor: Yhan Christian Souza Silva - Date: 1/10/2016
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


  work: function(my) {
    var brightness = 0;
    var change = 5

    every((.1).second(), function() {
      my.led.brightness(brightness);
      brightness += change;
      console.log("Brightness value: " + brightness);

      if(brightness < 0 || brightness > 255) {
        change =- change;
      }   
    });
  }
}).start();
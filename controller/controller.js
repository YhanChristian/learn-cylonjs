/*
  Fiveth Example - Cylon and Arduino
  Controlling some devices with an Xbox 360 controller
  Actor: Yhan Christian Souza Silva - Date: 1/18/2016
*/

var Cylon = require('cylon');

var redOn = false;
var greenOn = false;
var blueOn = false;
var brightness = 255; 

//Arduíno is ready to communicate 
Cylon.robot({
  connections: {
    arduino: { adaptor: 'firmata', port: 'COM3' },
    joystick: { adaptor: 'joystick'}
  },

//define hardware
  devices: {
    relay01: { driver: 'relay', pin: 13, type: 'closed', connection: 'arduino' },
    relay02: { driver: 'relay', pin: 12, type: 'closed', connection: 'arduino' },
    redLed: {driver: 'redLed', pin: 11, connection: 'arduino'},
    greenLed: {driver: 'greenLed', pin: 10, connection: 'arduino'},
    blueLed: {driver: 'blueLed', pin: 9, connection: 'arduino'},
    controller: { driver: 'xbox-360', connection: 'joystick' }

  },

  setColor: function() {
    this.redOn.brightness(redOn ? brightness: 0);
    this.greenOn.brightness(greenOn ? brightness: 0); 
    this.blueOn.brightness(blueOn ? brightness: 0);   

  },

// controller mapping, toggling a relay and a RGB LED with the controller buttons
  work: function(my) {
    ["a", "b", "x", "y", "up", "down", "right", "left", "select", "start"].forEach(function(button) {
       
      my.controller.on(button + ":press", function() {
        switch (button) {
          case "a": 
            redOn = true;
            break;
          case "b":
            greenOn = true;
            break;
          case "x":
            blueOn = true;
            break;
        }
        my.setColor();

      });

      my.controller.on(button + ":release", function() {
        switch (button) {
          case "a": 
            redOn = false;
            break;
          case "b":
            greenOn = false;
            break;
          case "x":
            blueOn = false;
            break;
        }
        my.setColor();

      });

    });
    
    my.controller.on("rb:pressed", function() {
      my.relay01.toggle();

    });

    my.controller.on("lb:pressed", function() {
      my.relay02.toggle();

    });


  }

}).start();
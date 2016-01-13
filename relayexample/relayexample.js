/*
  Fourth Example - Cylon and Arduino
  Working with Relay - Turn on and turn off 
  Actor: Yhan Christian Souza Silva - Date: 1/13/2016
*/


var Cylon = require('cylon');

//Arduíno is ready to communicate 
Cylon.robot({

//define device, relay NC (relay normally closed contact)
  connections: {
    arduino: { adaptor: 'firmata', port: 'COM3', typed: "closed" }
  },

  devices: {
    relay: { driver: 'relay', pin: 8 }
  },

//turn on for 3 seconds, after that turn off 

  work: function(my) {
  	after((3).seconds(), function() {
  		my.relay.turnOn();
  		console.log("Turned relay on");
  	});

  	after((6).seconds(), function() {
  		my.relay.turnOff();
  		console.log("Turned relay off");
  	});

  }

}).start();
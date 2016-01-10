/*
  Third Example - Cylon and Arduino
  Make an RGB led randomly flash different colors
  Actor: Yhan Christian Souza Silva - Date: 1/10/2016
*/

var Cylon = require('cylon');

//Arduíno is ready to communicate 
Cylon.robot({
  connections: {
    arduino: { adaptor: 'firmata', port: 'COM3' }
  },

//hardware configuration - led RGB commom cathode
  devices: {
    blueLed: { driver: 'led', pin: 11 },
    greenLed: { driver: 'led', pin: 10 },
    redLed: { driver: 'led', pin: 9 }
  },


	work: function(my) {

// control variables 

		var blueBrightness = 0;
		var blueChange = 10;
		var greenBrightness = 127
		var greenChange = 10;
		var redBrightness = 255;
		var redChange = 10;

//make different colors 

		every((.1).second(), function() {

			my.blueLed.brightness(blueBrightness);
			my.greenLed.brightness(greenBrightness);
			my.redLed.brightness(redBrightness);

			blueBrightness += blueChange;
			greenBrightness += greenChange;
			redBrightness += redChange;

			if(blueBrightness < 0 || blueBrightness > 255) {
				blueChange =- blueChange;
			}

			if(greenBrightness < 0 || greenBrightness > 255) {
				greenChange =- greenChange;
			}
			if(redBrightness < 0 || redBrightness > 255) {
				redChange =- redChange;
			}
		});	
	}

}).start();
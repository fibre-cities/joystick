// from https://www.w3schools.com/nodejs/nodejs_raspberrypi_led_pushbutton.asp

const Gpio = require('onoff').Gpio; //include onoff to interact with the GPIO
const up = new Gpio(6, 'in', 'both',  {debounceTimeout: 50});
const down = new Gpio(12, 'in', 'both', {debounceTimeout: 50});

const upHandler = (err, value) => {
  if (err) {
    console.log('err', err);
  }
  console.log('up', value);
};

const downHandler = (err, value) => {
  if (err) {
    console.log('err', err);
  }
  console.log('down', value);
};

up.watch(upHandler);
down.watch(downHandler);

function unexportOnClose() {
  up.unexport();
  down.unexport();
};

process.on('SIGINT', unexportOnClose); //function to run when user closes using ctrl+c

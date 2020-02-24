// from https://www.w3schools.com/nodejs/nodejs_raspberrypi_led_pushbutton.asp
const Gpio = require('onoff').Gpio; //include onoff to interact with the GPIO

const onoffConnect = (onUp, onDown, onStop) => {
  // const up = new Gpio(6, 'in', 'both',  {debounceTimeout: 50});
  const up = new Gpio(6, 'in', 'both');
  // const down = new Gpio(12, 'in', 'both', {debounceTimeout: 50});
  const down = new Gpio(12, 'in', 'both');

  const upHandler = (err, value) => {
    if (err) {
      console.error('err', err);
    }
    console.info('onoffConnect upHandler', value);
    if (value === 0) {
      onUp();
    }
    if (value === 1) {
      onStop();
    }
  };

  const downHandler = (err, value) => {
    if (err) {
      console.log('err', err);
    }
    console.info('onoffConnect downHandler', value);
    if (value === 0) {
      onDown();
    }
    if (value === 1) {
      onStop();
    }
  };

  up.watch(upHandler);
  down.watch(downHandler);

  function unexportOnClose() {
    up.unexport();
    down.unexport();
  };

  process.on('SIGINT', unexportOnClose); //function to run when user closes using ctrl+c
  console.log('onoff GPIO successfully initialised');
};

module.exports = onoffConnect;


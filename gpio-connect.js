const Gpio = require('onoff').Gpio;

// Use GPIO pinsinput, and 'both' button presses, and releases should be handled
const upInput = new Gpio(17, 'in', 'both');
const downInput = new Gpio(31, 'in', 'both');

//function to run when exiting program
const unexportOnClose = () => {
  // Unexport Button GPIO to free resources
  upInput.unexport();
  downInput.unexport();
};

// Watch for hardware interrupts on pushButton GPIO, specify callback function
const upWatcher =  (err, value) => {
  if (err) {
    console.error('There was an error', err);
    return;
  }
  console.log('upWatcher activated', value);
};

const downWatcher =  (err, value) => {
  if (err) {
    console.error('There was an error', err);
    return;
  }
  console.log('downWatcher activated', value);
};

console.log('gpio-connect: accessibility = ', Gpio.accessible);
try {
  process.on('SIGINT', unexportOnClose); //function to run when user closes using ctrl+c
  upInput.watch(upWatcher);
  downInput.watch(downWatcher)
} catch (e) {
  console.log(e);
};






const rpio = require('rpio');

const options = {
  gpiomem: true,          /* Use /dev/gpiomem */
  mapping: 'physical',    /* Use the P1-P40 numbering scheme */
  mock: undefined,        /* Emulate specific hardware in mock mode */
};

rpio.init(options);

rpio.open(31, rpio.INPUT);
rpio.open(32, rpio.INPUT);


rpio.poll(31, down);
rpio.poll(32, up);

function up() {
  console.log('up');
}

function down() {
  console.log('down');
}



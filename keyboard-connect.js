const InputEvent = require('input-event');

const input = new InputEvent('/dev/input/event0');

const keyboard = new InputEvent.Keyboard(input);

const keyup = ev => {
  console.log('keyup', ev);
};

const keydown = ev => {
  console.log('keydown', ev);
};

const keypress = ev => {
  console.log('keypress', ev);
};

keyboard.on('keyup'   , console.log);
keyboard.on('keydown' , console.log);
keyboard.on('keypress', console.log);

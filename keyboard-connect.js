const InputEvent = require('input-event');

const input = new InputEvent('/dev/input/event0');

const keyboard = new InputEvent.Keyboard(input);

const onKeyUp = ev => {
  console.log('onKeyUp', ev);
};

const onKeyDowm = ev => {
  console.log('onKeyDowm', ev);
};

const onKeyPress = ev => {
  console.log('onKeyPress', ev);
};


keyboard.on('keyup'   , onKeyUp);
keyboard.on('keydown' , onKeyDowm);
keyboard.on('keypress', onKeyPress);

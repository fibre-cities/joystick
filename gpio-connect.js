var InputEvent = require('input-event');

var input = new InputEvent('/dev/input/event0');

var keyboard = new InputEvent.Keyboard(input);

keyboard.on('keyup'   , console.log);
keyboard.on('keydown' , console.log);
keyboard.on('keypress', console.log);

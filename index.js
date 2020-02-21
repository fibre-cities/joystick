

require('dotenv').config();

const client  = require('socket.io-client');

const onoffConnect = require('./onoff-connect');

global.__basedir = __dirname;

const app = require('express')();
const http = require('http').Server(app);
const port = process.env.PORT || 3001;
const host = process.env.HOST;
const city = process.env.CITY;

http.listen(port, function(){
  console.info('joystick listening on **:' + port);
  const nameSpaceConnectionString = `${host}${city}`;
  console.info('nameSpaceConnectionString', nameSpaceConnectionString);
  const clientSocket = client.connect(nameSpaceConnectionString, {
    query: {city, role: 'joystick'},
    transports: ['websocket'],
    transport: 'socket'
  });

  clientSocket.on('connect', onConnect);


  function onConnect() {
    onoffConnect(paddleUp, paddleDown, paddleStop);
  }

  function paddleUp() {
    console.info('Emitting moveUp');
    clientSocket.emit('moveUp', city);
  };

  function paddleDown() {
    console.info('Emitting moveDown');
    clientSocket.emit('moveDown', city);
  };

  function paddleStop() {
    console.info('Emitting stop');
    clientSocket.emit('stop', city);
  };
});





var io = require('socket.io')();

// Listen for new connections from clients (socket)
io.on('connection', function(socket) {

  console.log('Client connected to socket.io');

});

module.exports = io;
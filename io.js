var io = require('socket.io')();

// Listen for new connections from clients (socket)
io.on('connection', function(socket) {

  socket.on('add-circle', function(data) {
    io.emit('add-circle', data);
  });





});

module.exports = io;
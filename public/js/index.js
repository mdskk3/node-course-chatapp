var socket = io();

socket.on('connect', function() {
  console.log('Connected to Server');

  socket.emit('createMessage', {
    to: 'Ricky',
    text: 'Hey There'
  });
});

socket.on('disconnect', function() {
  console.log('Disconnected from Server');
});

socket.on('newMessage', function(message) {
  console.log('newMessage', message);
});

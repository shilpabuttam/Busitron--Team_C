const socketIo = require('socket.io');

const setupSocket = (server) => {
  const io = socketIo(server);

  io.on('connection', (socket) => {
    console.log('New user connected');
    
    socket.on('send_message', (messageContent) => {
      io.emit('receive_message', { content: messageContent, type: 'global' });
    });

    socket.on('disconnect', () => {
      console.log('User disconnected',socket.id);
    });
  });

  return io;
};

module.exports = setupSocket;

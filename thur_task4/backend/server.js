
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: '*' } });

let players = {};

io.on('connection', (socket) => {
    console.log(`Player connected: ${socket.id}`);
    players[socket.id] = { score: 0, rank: 'newPlayer', health: 0 };
    io.emit('playersUpdate', players);

    socket.on('updateScore', ({ playerId }) => {
        if (players[playerId]) {
           
            const randomScore = Math.floor(Math.random() * (200 - 10 + 1)) + 10;
            players[playerId].score = randomScore;
    
            
            if (players[playerId].score >= 150) {
                players[playerId].rank = 'LegendPlayer';
            } else if (players[playerId].score >= 50) {
                players[playerId].rank = 'ProPlayer';
            } else {
                players[playerId].rank = 'newPlayer';
            }
             
if (players[playerId].rank === 'LegendPlayer') {
    players[playerId].health = 100;
} else if (players[playerId].rank === 'ProPlayer') {
    players[playerId].health = 80;
} else {
    players[playerId].health = 60;
}

            io.emit('playersUpdate', players);
        }
    });
    

    socket.on('disconnect', () => {
        console.log(`Player disconnected: ${socket.id}`);
        delete players[socket.id];
        io.emit('playersUpdate', players);
    });

});

server.listen(5000, () => console.log('Server running on port 5000'));



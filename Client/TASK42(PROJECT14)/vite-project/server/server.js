const express = require("express");
const { WebSocketServer } = require("ws");
const cors = require("cors");

const app = express();
app.use(cors());

const PORT = 5000;
const server = app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// WebSocket Server
const wss = new WebSocketServer({ server });

let queue = []; // Store players in queue

wss.on("connection", (ws) => {
    console.log("New player connected");

    ws.on("message", (data) => {
        const player = JSON.parse(data);
        console.log("Player joined:", player);

        // Add player to queue
        queue.push({ ws, ...player });

        // Try to match players
        matchPlayers();
    });

    ws.on("close", () => {
        // Remove player from queue on disconnect
        queue = queue.filter(p => p.ws !== ws);
        console.log("Player disconnected");
    });
});

function matchPlayers() {
    while (queue.length >= 2) {
        const [player1, player2] = queue.splice(0, 2); // Take two players from the queue

        // Send match notification
        player1.ws.send(JSON.stringify({ type: "match_found", opponent: player2.username }));
        player2.ws.send(JSON.stringify({ type: "match_found", opponent: player1.username }));

        console.log(`Matched ${player1.username} with ${player2.username}`);
    }
}

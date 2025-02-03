import React, { useState } from "react";
import useWebSocket from "react-use-websocket";

const SOCKET_URL = "ws://localhost:5000";

const App = () => {
    const [username, setUsername] = useState("");
    const [isQueued, setIsQueued] = useState(false);
    const [match, setMatch] = useState(null);

    const { sendMessage, lastMessage } = useWebSocket(SOCKET_URL, {
        onOpen: () => console.log("Connected to server"),
        shouldReconnect: () => true,
    });

    // Handle match found message
    if (lastMessage) {
        const data = JSON.parse(lastMessage.data);
        if (data.type === "match_found" && !match) {
            setMatch(data.opponent);
            setIsQueued(false);
        }
    }

    const joinQueue = () => {
        if (username) {
            sendMessage(JSON.stringify({ username }));
            setIsQueued(true);
        }
    };

    return (
        <div className="p-6 text-center">
            <h2 className="text-2xl font-bold mb-4">Matchmaking Queue</h2>
            {!match ? (
                <>
                    <input
                        type="text"
                        className="border p-2 mb-4"
                        placeholder="Enter username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <button
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                        onClick={joinQueue}
                        disabled={isQueued}
                    >
                        {isQueued ? "Searching for match..." : "Join Queue"}
                    </button>
                </>
            ) : (
                <h3 className="text-xl text-green-600 mt-4">
                    Matched with: {match}
                </h3>
            )}
        </div>
    );
};

export default App;

import { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5000');  // Change to your server URL

export const useWebSocket = () => {
    const [messages, setMessages] = useState([]);
    const [viewerStats, setViewerStats] = useState({ viewers: 0, chatActivity: 0 });

    useEffect(() => {
        socket.on('connect', () => {
            console.log('Connected to WebSocket server');
        });

        socket.on('message', (message) => {
            setMessages((prevMessages) => [...prevMessages, message]);
        });

        socket.on('viewerStats', (stats) => {
            setViewerStats(stats);
        });

        return () => {
            socket.disconnect();
        };
    }, []);

    const sendMessage = (message) => {
        socket.emit('message', message);
    };

    return { messages, viewerStats, sendMessage };
};

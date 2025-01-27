import React from 'react';
import { useWebSocket } from './utilities/websocket';
import ChatMessage from './components/ChatMessage';
import ChatModerator from './components/ChatModerator';
import ViewerStats from './components/ViewerStats';
import ChatBox from './components/Chatbox';

const App = () => {
  const { messages, viewerStats } = useWebSocket();

  return (
    <div>
      <h1>Live Stream Chat</h1>
      <ViewerStats stats={viewerStats} />
      <div className="chat-window">
        {messages.map((message, idx) => (
          <ChatMessage key={idx} message={message} />
        ))}
      </div>
      <ChatBox />
      <ChatModerator onBlockUser={() => { }} onDeleteMessage={() => { }} />
    </div>
  );
};

export default App;

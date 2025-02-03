
import Message from "./Message";
import MessageInput from "./MessageInput";

const ChatBox = ({ messages, sendMessage }) => {
  return (
    <div>
      <div className="border p-3 mb-3 bg-light" style={{ height: "400px", overflowY: "scroll" }}>
        {messages.map((msg, index) => (
          <Message key={index} text={msg.text} sender={msg.sender || "Anonymous"} />
        ))}
      </div>
      <MessageInput onSendMessage={sendMessage} />
    </div>
  );
};

export default ChatBox;
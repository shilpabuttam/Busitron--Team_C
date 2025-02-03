import React from "react";

const Message = ({ text, sender }) => {
  return (
    <div className={`alert ${sender === 'me' ? 'alert-primary text-end' : 'alert-secondary text-start'}`} role="alert">
      <strong>{sender === 'me' ? 'You: ' : `${sender}: `}</strong>{text}
    </div>
  );
};

export default Message;
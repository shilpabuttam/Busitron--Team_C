import React, { useState } from "react";

function CommentItem({ comment, onReply }) {
  const [replyText, setReplyText] = useState("");

  const handleReplySubmit = (e) => {
    e.preventDefault();
    if (replyText.trim()) {
      onReply(comment.id, replyText);
      setReplyText("");
    }
  };

  return (
    <div className="comment-item">
      <p>{comment.text}</p>
      {comment.replies.map((reply) => (
        <div key={reply.id} className="reply">
          <p>{reply.text}</p>
        </div>
      ))}
      <form onSubmit={handleReplySubmit} className="reply-form">
        <input
          type="text"
          placeholder="Write a reply..."
          value={replyText}
          onChange={(e) => setReplyText(e.target.value)}
        />
        <button className='replyButton' type="submit">Reply</button>
      </form>
    </div>
  );
}

export default CommentItem;

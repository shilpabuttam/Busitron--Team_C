import React, { useState } from "react";

function CommentForm({ addComment }) {
  const [commentText, setCommentText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (commentText.trim()) {
      const newComment = { id: Date.now(), text: commentText, replies: [] };
      addComment(newComment);
      setCommentText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="comment-form">
      <input
        type="text"
        placeholder="Write a comment..."
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
      />
      <button className="postButton" type="submit">Post</button>
    </form>
  );
}

export default CommentForm;

import React from "react";
import CommentItem from "./CommentItem";

function CommentList({ comments, updateComments }) {
  const handleReply = (id, replyText) => {
    const updatedComments = comments.map((comment) => {
      if (comment.id === id) {
        comment.replies.push({ id: Date.now(), text: replyText });
      }
      return comment;
    });
    updateComments(updatedComments);
  };

  return (
    <div className="comment-list">
      {comments.map((comment) => (
        <CommentItem
          key={comment.id}
          comment={comment}
          onReply={handleReply}
        />
      ))}
    </div>
  );
}

export default CommentList;

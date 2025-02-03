import React from "react";

const Notifications = ({ users, userId }) => {
  const user = users.find((user) => user.id === userId);

  return (
    <div className="notifyMsgs">
      {user && user.notifications.length > 0 ? (
        user.notifications.map((notification, index) => (
          <div key={index}>{notification}</div>
        ))
      ) : (
        <p>No notifications</p>
      )}
    </div>
  );
};

export default Notifications;

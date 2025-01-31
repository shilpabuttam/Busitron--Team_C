import React from 'react';
import './Notification.css';

const Notification = ({ message }) => {
    return <div className='notify'><div className="notification">{message}</div></div>;
};

export default Notification;

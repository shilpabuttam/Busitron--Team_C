import React from 'react';

const ViewerStats = ({ stats }) => (
  <div>
    <p>Viewers: {stats.viewers}</p>
    <p>Chat Activity: {stats.chatActivity}</p>
  </div>
);

export default ViewerStats;

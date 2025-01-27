import React, { useState } from 'react';
import axios from 'axios';

const AnalyticsTracker = () => {
  const [event, setEvent] = useState({
    category: '',
    action: '',
    label: '',
    value: '',
  });

  const handleTrack = async () => {
    try {
      await axios.post('http://localhost:3000/track-event', event);
      alert('Event tracked successfully!');
    } catch (error) {
      console.error('Error tracking event:', error);
    }
  };

  return (
    <div>
      <h1>Track Analytics Event</h1>
      <input
        type="text"
        placeholder="Category"
        value={event.category}
        onChange={(e) => setEvent({ ...event, category: e.target.value })}
      />
      <input
        type="text"
        placeholder="Action"
        value={event.action}
        onChange={(e) => setEvent({ ...event, action: e.target.value })}
      />
      <input
        type="text"
        placeholder="Label"
        value={event.label}
        onChange={(e) => setEvent({ ...event, label: e.target.value })}
      />
      <input
        type="number"
        placeholder="Value"
        value={event.value}
        onChange={(e) => setEvent({ ...event, value: e.target.value })}
      />
      <button onClick={handleTrack}>Track Event</button>
    </div>
  );
};

export default AnalyticsTracker;

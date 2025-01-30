// client/src/components/Trends.js
import React, { useState, useEffect } from 'react';
import { getTrends } from '../services/api';

function Trends() {
  const [trends, setTrends] = useState(null);

  useEffect(() => {
    const fetchTrends = async () => {
      const data = await getTrends();
      setTrends(data);
    };
    fetchTrends();
  }, []);

  return (
    <div className="stats-card">
      <h3>Trends</h3>
      {trends ? (
        <div>
          <p>Peak Play Hours: {trends.peakPlayHours}</p>
          <p>Frequent Users: {trends.frequentUsers.join(', ')}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Trends;

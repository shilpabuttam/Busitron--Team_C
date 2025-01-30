// client/src/components/Maps.js
import React, { useState, useEffect } from 'react';
import { getMaps } from '../services/api';

function Maps() {
  const [maps, setMaps] = useState([]);

  useEffect(() => {
    const fetchMaps = async () => {
      const data = await getMaps();
      setMaps(data);
    };
    fetchMaps();
  }, []);

  return (
    <div className="stats-card">
      <h3>Map Statistics</h3>
      {maps.length ? (
        <ul>
          {maps.map((map) => (
            <li key={map._id}>
              {map.name} - Popularity: {map.popularity}
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Maps;

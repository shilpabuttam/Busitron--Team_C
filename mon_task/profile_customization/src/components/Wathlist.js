import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Watchlist = () => {
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    axios.get('/api/user/watchlist').then((response) => setWatchlist(response.data));
  }, []);

  return (
    <div>
      <h2>Your Watchlist</h2>
      <ul>
        {watchlist.map((video) => (
          <li key={video._id}>{video.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Watchlist;

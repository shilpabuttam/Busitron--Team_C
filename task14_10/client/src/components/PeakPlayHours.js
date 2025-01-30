import React from 'react';
import '../styles/peakPlayHours.css';
const PeakPlayHours = ({ peakPlayHours }) => {
  return (
    <div className="peak-play-hours">
      <h2>Peak Play Hours</h2>
      {peakPlayHours.map((hour, index) => (
        <div key={index}>
          <h3>{hour.hour}</h3>
          <p>Active Players: {hour.activePlayers}</p>
        </div>
      ))}
    </div>
  );
};

export default PeakPlayHours;

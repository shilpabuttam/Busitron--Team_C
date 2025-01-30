// client/src/components/PerformanceReport.js
import React, { useState, useEffect } from 'react';
import { getPerformanceReports } from '../services/api';

function PerformanceReport() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const fetchReports = async () => {
      const data = await getPerformanceReports();
      setReports(data);
    };
    fetchReports();
  }, []);

  return (
    <div className="stats-card">
      <h3>Performance Reports</h3>
      {reports.length ? (
        <ul>
          {reports.map((report) => (
            <li key={report._id}>
              Player: {report.playerId.name} - Peak Play Hours: {report.peakPlayHours}
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default PerformanceReport;

import React from 'react';
import '../styles/performanceReports.css';
const PerformanceReports = ({ performanceReports }) => {
  return (
    <div className="performance-reports">
      <h2>Performance Reports</h2>
      {performanceReports.map((report, index) => (
        <div key={index}>
          <h3>{report.player}</h3>
          <p>Performance: {report.performance}</p>
        </div>
      ))}
    </div>
  );
};

export default PerformanceReports;

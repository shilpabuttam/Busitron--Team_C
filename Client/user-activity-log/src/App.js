import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ActivityLog from './Components/ActivityLog';

function App() {
  const userId = '64f3ccefaf34f2e1b56a5b22'; // Replace with the actual logged-in user ID
 
  return (
    <Router>
      <div>
        <h1 className="text-center text-2xl font-bold mt-4">User Activity Tracker</h1>
        <Routes>
          {/* Activity Log Route */}
          <Route
            path="/activity-log"
            element={<ActivityLog userId={userId} />}
          />
          {/* Add other routes as needed */}
        </Routes>
      </div>
    </Router>

    

    
  

  );
}

export default App;

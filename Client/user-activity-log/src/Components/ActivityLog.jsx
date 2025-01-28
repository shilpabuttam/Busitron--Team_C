
// import React, { useState, useEffect } from 'react';

// const ActivityLog = () => {
//   const [activities, setActivities] = useState([]);
  
//   useEffect(() => {
//     fetch('http://localhost:5000/api/activities')  // Backend API to fetch activities
//       .then(response => response.json())
//       .then(data => {
//         console.log('Fetched activities:', data);  // Log the data to check
//         setActivities(data);
//       })
//       .catch(error => console.log('Error fetching activities:', error));
//   }, []);
  
  
//   return (
//     <div>
//       <h1>Activity Log</h1>
      
//       {activities.length === 0 ? (
//         <p>No activities recorded yet.</p>
//       ) : (
//         <ul>
//           {activities.map(activity => (
//             <li key={activity._id}>
//               <p><strong>Description:</strong> {activity.description}</p>
//               <p><strong>Timestamp:</strong> {new Date(activity.timestamp).toLocaleString()}</p>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default ActivityLog;


// Activity Log Component
// Technologies: React, Node.js, MongoDB

// import React, { useState, useEffect } from 'react';

// // Placeholder components for UI elements (replace with actual components or libraries as needed)
// const Card = ({ children }) => <div className="card border rounded-lg p-4 shadow">{children}</div>;
// const CardContent = ({ children }) => <div className="card-content">{children}</div>;
// const Select = ({ children, value, onValueChange }) => (
//     <select
//         value={value}
//         onChange={(e) => onValueChange(e.target.value)}
//         className="border p-2 rounded w-48"
//     >
//         {children}
//     </select>
// );
// const SelectTrigger = ({ children }) => <>{children}</>;
// const SelectValue = ({ placeholder }) => <option disabled>{placeholder}</option>;
// const SelectContent = ({ children }) => <>{children}</>;
// const SelectItem = ({ value, children }) => <option value={value}>{children}</option>;

// const ActivityLog = () => {
//     const [activities, setActivities] = useState([]);
//     const [filter, setFilter] = useState('all');
     

//     useEffect(() => {
//       const fetchActivities = async () => {
//           try {
//               const response = await fetch(`/api/activity-log?filter=${filter}`);
//               const data = await response.json();
//               setActivities(data);
//           } catch (error) {
//               console.error('Error fetching activity log:', error);
//           }
//       };
  
//       fetchActivities();
//   }, [filter]);

//     return (
//         <div className="p-4">
//             <h1 className="text-xl font-bold mb-4">User Activity Log</h1>

//             {/* Filter Options */}
//             <div className="mb-4 flex items-center gap-4">
//                 <Select value={filter} onValueChange={setFilter}>
//                     <SelectTrigger>
//                         <SelectValue placeholder="Filter by Type" />
//                     </SelectTrigger>
//                     <SelectContent>
//                         <SelectItem value="all">All Activities</SelectItem>
//                         <SelectItem value="video">Video Views</SelectItem>
//                         <SelectItem value="subscription">Subscriptions</SelectItem>
//                         <SelectItem value="comment">Comments</SelectItem>
//                     </SelectContent>
//                 </Select>
//             </div>

//             {/* Activity List */}
//             <div className="grid gap-4">
//                 {activities.length > 0 ? (
//                     activities.map((activity, index) => (
//                         <Card key={index}>
//                             <CardContent>
//                                 <p><strong>Type:</strong> {activity.type}</p>
//                                 <p><strong>Description:</strong> {activity.description}</p>
//                                 <p><strong>Date:</strong> {new Date(activity.date).toLocaleString()}</p>
//                             </CardContent>
//                         </Card>
//                     ))
//                 ) : (
//                     <p>No activities found.</p>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default ActivityLog;




import React, { useState, useEffect } from 'react';
import axios from 'axios';  // Make sure axios is installed

const ActivityLog = () => {
  const [activities, setActivities] = useState([]);
  const [filter, setFilter] = useState('all');

  // Fetch activities based on the filter
  const fetchActivities = async () => {
    try {
      const response = await axios.get(`/api/activity-log`, {
        params: { filter }
      });
      setActivities(response.data);  // Set the response data (activities)
    } catch (error) {
      console.error('Error fetching activities:', error);
    }
  };

  // Call fetchActivities when the filter changes
  useEffect(() => {
    fetchActivities();
  }, [filter]);  // Depend on filter

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">User Activity Log</h1>

      {/* Filter Dropdown */}
      <div className="mb-4 flex items-center gap-4">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}  // Update filter state on selection
          className="border p-2 rounded w-48"
        >
          <option value="all">All Activities</option>
          <option value="video_view">Video Views</option>
          <option value="subscription">Subscriptions</option>
          <option value="comment">Comments</option>
        </select>
      </div>

      {/* Activity List */}
      <div className="grid gap-4">
        {activities.length > 0 ? (
          activities.map((activity, index) => (
            <div key={index} className="card border rounded-lg p-4 shadow">
              <div className="card-content">
                <p><strong>Type:</strong> {activity.type}</p>
                <p><strong>Description:</strong> {activity.description}</p>
                <p><strong>Date:</strong> {new Date(activity.date).toLocaleString()}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No activities found.</p>
        )}
      </div>
    </div>
  );
};

export default ActivityLog;

import React, { useState } from 'react';
import PreferencesForm from './components/PreferencesForm';
import NotificationPanel from './components/NotificationPanel';

const App = () => {
    const [userEmail, setUserEmail] = useState('');

    return (
        <div style={{ padding: '2rem' }}>
            <h1>Local Notification System</h1>

            <div style={{ marginBottom: '1rem' }}>
                <label>Enter your email to fetch notifications: </label>
                <input
                    type="email"
                    placeholder="E.g., user@example.com"
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                />
            </div>

            <PreferencesForm />
            {userEmail && <NotificationPanel email={userEmail} />}
        </div>
    );
};

export default App;

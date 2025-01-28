import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Profile.css'; // Import the CSS file

const Profile = () => {
  const [user, setUser] = useState({});
  const [profilePicture, setProfilePicture] = useState('');
  const [bio, setBio] = useState('');

  useEffect(() => {
    // Fetch user data
    axios.get('/api/user/me').then((response) => setUser(response.data));
  }, []);

  const handleUpdateProfile = async () => {
    try {
      const updatedUser = await axios.put('/api/user/profile', {
        userId: user._id,
        profilePicture,
        bio,
      });
      setUser(updatedUser.data);
    } catch (err) {
      console.error('Error updating profile', err);
    }
  };

  return (
    <div className="profile-container">
      <h2 className="profile-title">User Profile</h2>
      <div className="profile-field">
        <label>Profile Picture:</label>
        <input
          type="text"
          placeholder="Profile picture URL"
          value={profilePicture}
          onChange={(e) => setProfilePicture(e.target.value)}
        />
      </div>
      <div className="profile-field">
        <label>Bio:</label>
        <textarea
          placeholder="Write about yourself"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
      </div>
      <button className="update-button" onClick={handleUpdateProfile}>
        Update Profile
      </button>
    </div>
  );
};

export default Profile;

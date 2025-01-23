
const API_URL = 'http://localhost:5000/api/activities/log';

export const logActivity = async (userId, videoId, activityType, additionalData = {}) => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId, videoId, activityType, additionalData }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error logging activity:', error);
  }
};

import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export const fetchActivities = (userId, type) => {
  return axios.get(`${API_URL}/activity/${userId}`, {
    params: { type },
  });
};

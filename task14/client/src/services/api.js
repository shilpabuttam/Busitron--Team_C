// client/src/services/api.js
const API_URL = 'http://localhost:5000/api'; // Adjust the backend URL if necessary

export const getPlayerStats = async () => {
  const response = await fetch(`${API_URL}/players`);
  return response.json();
};

export const getGameModes = async () => {
  const response = await fetch(`${API_URL}/game-modes`);
  return response.json();
};

export const getMaps = async () => {
  const response = await fetch(`${API_URL}/maps`);
  return response.json();
};

export const getPerformanceReports = async () => {
  const response = await fetch(`${API_URL}/performance-reports`);
  return response.json();
};

export const getTrends = async () => {
  const response = await fetch(`${API_URL}/trends`);
  return response.json();
};

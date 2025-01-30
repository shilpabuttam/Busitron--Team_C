import axios from 'axios';

const API_URL = 'http://localhost:5000/api/leaderboard';

export const getLeaderboard = async (filters) => {
    const response = await axios.get(API_URL, { params: filters });
    return response.data;
};

export const addPlayer = async (playerData) => {
    const response = await axios.post(API_URL, playerData);
    return response.data;
};

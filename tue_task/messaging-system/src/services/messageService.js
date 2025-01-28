

import axios from 'axios';

const API_URL = 'http://localhost:5600/api/messages';

export const sendMessage = (content, sender) => {
    return axios.post(`${API_URL}/send`, { content, sender });
};

export const getMessages = () => {
    return axios.get(`${API_URL}/get`);
};

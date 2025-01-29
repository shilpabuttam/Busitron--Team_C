import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const getVideos = async () => await axios.get(`${API_URL}/videos`);
export const updateVideoStats = async (data) =>
  await axios.post(`${API_URL}/videos/update`, data);
export const getRecommendations = async () =>
  await axios.get(`${API_URL}/videos/recommendations`);

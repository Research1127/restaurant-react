import axios from "axios";

// Create Axios instance
// Read API base URL from environment
const apiBaseURL = import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL: `${apiBaseURL}/api`, // Backend base URL for Docker

  // baseURL: "http://localhost:5204",  // For local testing outside Docker
});

// Automatically attach token to every request
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
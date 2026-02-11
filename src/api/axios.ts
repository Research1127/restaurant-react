import axios from "axios";

// Create Axios instance
const api = axios.create({
  baseURL: "http://localhost:5204/api", // Backend base URL
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
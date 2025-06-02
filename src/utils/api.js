// src/utils/api.js
import axios from "axios";
import { auth } from "../firebase";

const API = axios.create({
  baseURL: "https://scheduler-ai.onrender.com", // Flask backend URL
  headers: { "Content-Type": "application/json" },
});

// Attach Firebase ID token in Authorization header for each request
API.interceptors.request.use(
  async (config) => {
    const user = auth.currentUser;
    if (user) {
      const idToken = await user.getIdToken(/* forceRefresh */ true);
      config.headers["Authorization"] = "Bearer " + idToken;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default API;

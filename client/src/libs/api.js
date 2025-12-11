import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_SERVER_PATH,
  withCredentials: true,
});

// Interceptors to add token to requests
api.interceptors.request.use(
  (config) => {
    const accessToken =
      typeof window !== "undefined"
        ? window.localStorage.getItem("accessToken")
        : null;
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;



import type { AxiosInstance } from "axios";
import axios from "axios";

// Create a typed Axios instance
const axiosInstance: AxiosInstance = axios.create({
  baseURL:
    import.meta.env.MODE === "development"
      ? "http://localhost:5000/api"
      : "/api",
  withCredentials: true,
});

export default axiosInstance;

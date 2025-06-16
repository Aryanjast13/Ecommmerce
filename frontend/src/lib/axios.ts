

import type { AxiosInstance } from "axios";
import axios from "axios";
// Create a typed Axios instance
const axiosInstance: AxiosInstance = axios.create({
  baseURL:
    import.meta.env.MODE === "development"
      ? "http://localhost:5000/api"
      : `${import.meta.env.VITE_SERVER_URL}api`,
  withCredentials: true,
});

export default axiosInstance;

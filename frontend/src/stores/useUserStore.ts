import { toast } from "react-hot-toast";
import { create } from "zustand";
import axios from "../lib/axios";

// Define user type (adjust to match your backend response)
interface User {
  id: string;
  name: string;
  email: string;
  address: string; 
  // Add more fields as needed
}

// Define the shape of the store
interface UserStore {
  user: User | null;
  loading: boolean;
  checkingAuth: boolean;

  signup: (payload: {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
  }) => Promise<string | undefined>;

  login: (email: string, password: string) => Promise<void>;

  logout: () => Promise<void>;

  editPofile: (name:string,address:string) => Promise<void>;

  checkAuth: () => Promise<void>;

  refreshToken: () => Promise<any>; // You can type this better depending on your token response
}

export const useUserStore = create<UserStore>((set, get) => ({
  user: null,
  loading: false,
  checkingAuth: true,

  signup: async ({ name, email, password, confirmPassword }) => {
    set({ loading: true });

    if (password !== confirmPassword) {
      set({ loading: false });
      return toast.error("Passwords do not match");
    }

    try {
      const res = await axios.post<User>("/auth/signup", {
        name,
        email,
        password,
      });
      set({ user: res.data, loading: false });
    } catch (error: any) {
      set({ loading: false });
      toast.error(error.response?.data?.message || "An error occurred");
    }
  },

  editPofile: async (name,address) => {
    try {
      const res = await axios.patch("auth/editProfile", { name, address });
      set({ user: res.data.user });
    } catch (error:any) {
      toast.error(error.response?.data?.message || "An error occurred");
    }
  },

  login: async (email, password) => {
    set({ loading: true });

    try {
      const res = await axios.post<User>("/auth/login", { email, password });
      set({ user: res.data, loading: false });
    } catch (error: any) {
      set({ loading: false });
      toast.error(error.response?.data?.message || "An error occurred");
    }
  },

  logout: async () => {
	  try {
		console.log("logout");
      await axios.post("/auth/logout");
      set({ user: null });
    } catch (error: any) {
      toast.error(
        error.response?.data?.message || "An error occurred during logout"
      );
    }
  },

  checkAuth: async () => {
    set({ checkingAuth: true });

    try {
      const response = await axios.get<User>("/auth/profile");
      set({ user: response.data, checkingAuth: false });
    } catch (error: any) {
      console.log(error.message);
      set({ user: null, checkingAuth: false });
    }
  },

  refreshToken: async () => {
    // Prevent multiple simultaneous refresh attempts
    if (get().checkingAuth) return;

    set({ checkingAuth: true });

    try {
      const response = await axios.post("/auth/refresh-token");
      set({ checkingAuth: false });
      return response.data;
    } catch (error) {
      set({ user: null, checkingAuth: false });
      throw error;
    }
  },
}));

// Axios interceptor for token refresh
let refreshPromise: Promise<any> | null = null;

axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        // If a refresh is already in progress, wait for it to complete
        if (refreshPromise) {
          await refreshPromise;
          return axios(originalRequest);
        }

        // Start a new refresh process
        refreshPromise = useUserStore.getState().refreshToken();
        await refreshPromise;
        refreshPromise = null;

        return axios(originalRequest);
      } catch (refreshError) {
        useUserStore.getState().logout();
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

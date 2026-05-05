import { create } from "zustand";
import useAuthStore from "./userAuth";
import axios from "axios";

const API_CALL = `http://localhost:4000`;
const userJobApplicaiton = create((set, get) => ({
  applications: [],
  pagination: {},
  loading: false,
  error: null,

  fetchMyApplications: async () => {
    try {
      set({ loading: true, error: null });

      const token = useAuthStore.getState().token;

      const res = await axios.get(`${API_CALL}/api/my-applications`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
       
      
      set({
        applications: res.data.applications,
        pagination: {
          page: res.data.page,
          limit: res.data.limit,
        },
        loading: false,
      });
    } catch (err) {
      set({
        loading: false,
        error: err.response?.data?.message || "Failed to fetch",
      });
    }
  },
}));

export default userJobApplicaiton;

import { create } from "zustand";
import axios from "axios";
import useAuthStore from "./userAuth";

const API = import.meta.env.VITE_API_URL;

const useCompanyApplications = create((set) => ({
  applications: [],
  loading: false,
  error: null,

  fetchCompanyApplications: async () => {
    try {
      set({ loading: true, error: null });

      const token = useAuthStore.getState().token;

      const res = await axios.get(
        `${API}/api/company-applications`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      
      );


      set({
        applications: res.data.applications,
        loading: false,
      });
    } catch (err) {
      console.error(err);
      set({
        loading: false,
        error: err.response?.data?.message || "Failed to fetch",
      });
    }
  },
}));

export default useCompanyApplications;
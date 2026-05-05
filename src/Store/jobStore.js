import { create } from "zustand";
import axios from "axios";

const API_BASE = "http://localhost:4000";

const useJobStore = create((set, get) => ({
  jobs: [],
  loading: false,
  error: null,
  isFetch: false,

  // FETCH JOBS
  fetchJobs: async (token, role) => {
    const { jobs, isFetch } = get();

    if (isFetch && jobs.length > 0) {
      console.log("Using cached jobs");
      return;
    }

    try {
      set({
        loading: true,
        error: null,
      });

      const isCompanyUser = token && role !== "admin";

      const endpoint = isCompanyUser
        ? "/api/jobpostdata"
        : "/api/jobdata";

      const res = await axios.get(`${API_BASE}${endpoint}`, {
        ...(isCompanyUser && {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }),
      });

      set({
        jobs: res.data,
        isFetch: true,
        loading: false,
      });

    } catch (err) {
      console.error("Error Fetching Jobs:", err);

      set({
        error: err.response?.data?.message || "Failed to fetch jobs",
        loading: false,
      });
    }
  },

  clearJobs: () =>
    set({
      jobs: [],
      isFetch: false,
      error: null,
    }),
}));

export default useJobStore;
import axios from "axios";
import { create } from "zustand";

const useAdminStore = create((set) => ({
  adminStats: {
    user: 0,
    company: 0,
    admin: 0,
  },


  fetchAdminStats: async () => {
    try {
      const res = await axios.get("http://localhost:4000/api/user-count");

      set({
        adminStats: res.data.stats,
    });

    } catch (err) {
      console.log("Error fetching stats", err);
    }
  },
}));



export default useAdminStore;

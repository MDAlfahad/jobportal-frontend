import { create } from "zustand";
import axios from "axios";

const userDetaiilStore = create((set) => ({
  users: [],
  companies: [],
  loading: false,

  // Fetching users
  fetchUsers: async () => {
    try {
      set({ loading: true });

      const res = await axios.get("http://localhost:4000/api/all-users");
      set({
        users: res.data.users,
        loading: false,
      });

    } catch (error) {
      console.error("Users fetch error:", error);
      set({ loading: false });
    }
  },
  
  //  Fetching companies
  fetchCompanies: async () => {
    try {
      set({ loading: true });

      const res = await axios.get("http://localhost:4000/api/all-companies");

      set({
        companies: res.data.companies,
        loading: false,
      });

    } catch (error) {
      console.error("Companies fetch error:", error);
      set({ loading: false });
    }
  },
}));

export default userDetaiilStore;
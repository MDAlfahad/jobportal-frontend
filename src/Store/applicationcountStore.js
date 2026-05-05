import axios from "axios";
import { create } from "zustand";

const useApplication = create((set) => ({
  application: {
    applicationCount: 0,
  },
  fetchapplicaiton: async () => {
    try {
      const res = await axios.get("http://localhost:4000/api/form_count");
      set({
        application: res.data.stats,
      });
    } catch (err) {
      console.log("Error in frrtching stats", err);
    }
  },
}));
export default useApplication;

import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      token: null,
      isAuthenticated: false,
      message: "",
      success: null,
      loading: false,
      setLoading: (status)=>
        set({
          loading:status,
        }),
      

      setAuth: (userData, token) =>
        set({
          user: userData,
          token: token,
          isAuthenticated: true,
          loading: false,

        }),

      setMessage: (msg, status) =>
        set({
          message: msg,
          success: status,
        }),

      clearMessage: () =>
        set({
          message: "",
          success: null,
        }),

      logout: () =>
        set({
          user: null,
          token: null,
          isAuthenticated: false,
          loading: false,
        }),
    }),
    {
      name: "auth-storage",

      
      partialize: (state) => ({
        user: state.user,
        token: state.token,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
);

export default useAuthStore;  
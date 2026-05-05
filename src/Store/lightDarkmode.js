import { create } from "zustand";
import { persist } from "zustand/middleware";

const applyTheme = (theme) => {
  if (typeof document === "undefined") return;

  document.documentElement.classList.remove("light", "dark");
  document.documentElement.classList.add(theme);
};

const useThemeStore = create(
  persist(
    (set, get) => ({
      theme: "light",

      toggleTheme: () => {
        const newTheme = get().theme === "light" ? "dark" : "light";

        applyTheme(newTheme);

        set({ theme: newTheme });
      },

      setTheme: (theme) => {
        applyTheme(theme);
        set({ theme });
      },
    }),
    {
      name: "theme-store",

      onRehydrateStorage: () => (state) => {
        
        if (state?.theme) {
          applyTheme(state.theme);
        }
      },
    }
  )
);

export default useThemeStore;
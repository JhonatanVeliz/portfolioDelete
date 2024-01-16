import { create } from "zustand";

interface DarkMode {
    isDarkMode : boolean;
    validateMode : () => void;
    changeDarkMode : () => void;
}

export const stateDarkMode = create<DarkMode>((set, get) => ({

    isDarkMode: false,

    validateMode: () => {
      const hasMode = localStorage.getItem("mode");
      if (hasMode) {
        const isDarkMode = JSON.parse(hasMode);
        set({ isDarkMode });
      } else {
        set({ isDarkMode: false });
      }
    },

    changeDarkMode: () => {
      const currentMode = get().isDarkMode;
      localStorage.setItem("mode", String(!currentMode));
      set({ isDarkMode: !currentMode });
    },

  }));
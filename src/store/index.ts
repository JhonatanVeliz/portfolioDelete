import { create } from "zustand";

interface DarkMode {
    isDarkMode : boolean;
    changeDarkMode : () => void;
}

export const stateDarkMode = create<DarkMode>( (set) => ({
    isDarkMode : false,
    changeDarkMode : () => set( (state) => ({isDarkMode : !state.isDarkMode}))
}));
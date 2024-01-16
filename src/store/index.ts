import { create } from "zustand";

interface DarkMode {
    isDarkMode : boolean;
    changeDarkMode : () => void;
}

export const stateDarkMode = create<DarkMode>( (set) => ({
    isDarkMode : false,
    changeDarkMode : () => {
        return set( state => {
        localStorage.setItem('mode', JSON.stringify({isDarkMode : !state.isDarkMode}));
        return {isDarkMode : !state.isDarkMode};
        })
    },
}));
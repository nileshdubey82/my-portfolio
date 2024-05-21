import { createSlice } from "@reduxjs/toolkit";


const getInitialTheme = () => {
    const storedTheme = localStorage.getItem('Nilesh_theme');
    return storedTheme !== null ? JSON.parse(storedTheme) : window.matchMedia("(prefers-color-scheme: dark)").matches;
};


const initialState = getInitialTheme();

export const ThemeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        changeTheme: (state) => {
            const newState = !state;
            localStorage.setItem('Nilesh_theme', JSON.stringify(newState));
            return newState;
        },
    },
});

export const { changeTheme } = ThemeSlice.actions;
export default ThemeSlice.reducer;

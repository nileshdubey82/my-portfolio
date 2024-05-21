import { createSlice } from "@reduxjs/toolkit";

// Function to fetch the initial theme preference from local storage
const getInitialTheme = () => {
    const storedTheme = localStorage.getItem('Nilesh_theme');
    return storedTheme !== null ? JSON.parse(storedTheme) : window.matchMedia("(prefers-color-scheme: dark)").matches;
};

// Set the initial state based on the theme preference fetched from local storage
const initialState = getInitialTheme();

export const ThemeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        changeTheme: (state) => {
            const newState = !state;
            localStorage.setItem('Nilesh_theme', JSON.stringify(newState)); // Store the updated theme preference in local storage
            return newState;
        },
    },
});

export const { changeTheme } = ThemeSlice.actions;
export default ThemeSlice.reducer;

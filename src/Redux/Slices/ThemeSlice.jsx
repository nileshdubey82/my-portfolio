import { createSlice } from "@reduxjs/toolkit";

export const ThemeSlice = createSlice({
    initialState: false,
    name: 'ThemeSlice',
    reducers: {
        changeTheme: (state) => { return !state }
    }
})

export const { changeTheme } = ThemeSlice.actions;
export default ThemeSlice.reducer
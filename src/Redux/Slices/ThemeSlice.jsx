import { createSlice } from "@reduxjs/toolkit";

export const ThemeSlice = createSlice({
    initialState: true,
    name: 'ThemeSlice',
    reducers: {
        changeTheme: (state) => { return !state }
    }
})

export const { changeTheme } = ThemeSlice.actions;
export default ThemeSlice.reducer
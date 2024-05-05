import { configureStore } from "@reduxjs/toolkit";
import ThemeSlice from "../Slices/ThemeSlice";
const Store = configureStore({
    reducer: { ThemeSlice }
})

export default Store
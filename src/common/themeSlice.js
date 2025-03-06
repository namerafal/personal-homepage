import { createSlice } from "@reduxjs/toolkit";

const themeReducer = createSlice({
    name: 'theme',
    initialState: {
        isDarkTheme: false,
    },
    reducers: {
        toggleTheme: (state) => {
            state.isDarkTheme = !state.isDarkTheme;
        },
    },
});

export const {
    toggleTheme
} = themeReducer.actions;

const selectThemeState = (state) => state.theme;
export const selectIsDarkTheme = state => selectThemeState(state).isDarkTheme;

export default themeReducer.reducer;
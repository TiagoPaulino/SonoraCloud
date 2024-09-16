
import theme from "@/theme";
import { createSlice } from "@reduxjs/toolkit";



export const themeSlice = createSlice({
    name: "theme",
    initialState: theme,
    reducers: {
        themeBackgroundUpdate: (state, action) => {
            state.colors.background = action.payload
        },
        themeFontColorUpdate: (state, action) => {
            state.typography.color = action.payload
        }
    },
})

export default themeSlice.reducer
export const {themeBackgroundUpdate, themeFontColorUpdate} = themeSlice.actions
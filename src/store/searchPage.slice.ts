import { createSlice } from "@reduxjs/toolkit";


export const searchPageSlice = createSlice({
    name: "searchPage",
    initialState: {
        searchWord: "",
        results: [],
    } as any,
    reducers: {
        setSearchWord: (state, action) => {
            state.searchWord = action.payload
        },
        setResults: (state, action) => {
            state.results = action.payload
        },
    },
})

export const { setSearchWord, setResults } = searchPageSlice.actions
export default searchPageSlice.reducer
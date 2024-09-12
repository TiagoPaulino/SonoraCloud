import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface RowIten {
    id: string,
    name: string,
    album_id: string,
    artist_id: string,
    duration: string,
    artist_name: string,
    playlistadddate: string,
    position: string,
    license_ccurl: string,
    album_image: string,
    image: string,
    audio: string,
    audiodownload: string,
    audiodownload_allowed: boolean,
}
interface Row{
    name?: string,
    itens: RowIten[] 
}

interface HomePageState {
    rows: Row[] 
}


export const homePageSlice = createSlice({
    name: "homePage",
    initialState: {
        rows: []
    } as HomePageState,
    reducers: {
        rowUpdate: (state, action: PayloadAction<Row>) => {
            state.rows.push(action.payload);
        },
    }
});

export const { rowUpdate } = homePageSlice.actions;
export default homePageSlice.reducer
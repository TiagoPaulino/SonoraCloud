import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface Page {
    name: string
    link: string
    icon: string
}

interface Playlist {
    name: string
    id: string
}

export interface SideMenuState {
    pages: Page[],
    playlists: Playlist[]
}

export const sideMenuSlice = createSlice({
    name: "sideMenu",
    initialState: {
        pages: [
            { name: "Home", link: "/", icon: "home" },
            { name: "Library", link: "/library", icon: "library_music" },
            { name: "Search", link: "/search", icon: "search" }
        ],
        playlists: [],
    } as SideMenuState,
    reducers: {
        playlistUpdate: (state, action: PayloadAction<Playlist>) => {
            state.playlists.push(action.payload);
        },
    }
});

export const { playlistUpdate } = sideMenuSlice.actions;
export default sideMenuSlice.reducer
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AlbumData {
  id: string;
  name: string;
  releasedate: string;
  artist_id: string;
  artist_name: string;
  image: string;
  zip: string;
  zip_allowed: boolean;
  tracks: Track[];
}
export interface Track {
  id: string;
  position: string;
  name: string;
  duration: string;
  license_ccurl: string;
  audio: string;
  audiodownload: string;
  audiodownload_allowed: boolean;
}

export const albumPageSlice = createSlice({
  name: "albumPage",
  initialState: {
    albumData: {
      id: "",
      name: "",
      releasedate: "",
      artist_id: "",
      artist_name: "",
      image: "",
      zip: "",
      zip_allowed: false,
      tracks: [],
    } as AlbumData,
    albumId: "",
  },
  reducers: {
    albumUpdate: (state, action) => {
      state.albumData = action.payload;
    },
    setAlbumId: (state, action) => {
      state.albumId = action.payload;
    }
  },
});

export const { albumUpdate,setAlbumId } = albumPageSlice.actions;
export default albumPageSlice.reducer;

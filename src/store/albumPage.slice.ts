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
  initialState: {} as AlbumData,
  reducers: {
    albumUpdate: (state, action: PayloadAction<AlbumData>) => {
      state = action.payload;
    },
  },
});

export const { albumUpdate } = albumPageSlice.actions;
export default albumPageSlice.reducer
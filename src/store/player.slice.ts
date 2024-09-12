import { createSlice } from "@reduxjs/toolkit";

export interface PlayngSong {
  name: string;
  artist: string;
  album: Album;
  timeSeconds: number;
  timeMinutes: string;
  midiaPath: string;
  thumbPath: string;
  isLiked: boolean;
}

export interface NextSong extends PlayngSong {}

export interface PreviusSong extends PlayngSong {}

export interface Album {
  name: string;
  thumbPath: string;
}

export interface PlayerState {
  isPlayng: boolean;
  previusSong: PreviusSong;
  nextSong: NextSong;
  playngSong: PlayngSong;
  volume: number;
  currentTime: number;
  endTimeSong: number | string;
  percentTime: number;
  isMuted: boolean;
}

export const playerSlice = createSlice({
  name: "player",
  initialState: {
    isPlayng: false,
    previusSong: {
      name: "",
      artist: "",
      album: {
        name: "",
        thumbPath: "",
      },
      timeSeconds: 0,
      timeMinutes: "",
      midiaPath: "",
      thumbPath: "",
      isLiked: false,
    },
    nextSong: {
      name: "",
      artist: "",
      album: {
        name: "",
        thumbPath: "",
      },
      timeSeconds: 0,
      timeMinutes: "",
      midiaPath: "",
      thumbPath: "",
      isLiked: false,
    },
    playngSong: {
      name: "MK - Playing Song",
      artist: "MK - Artist",
      album: {
        name: "MK - Album",
        thumbPath: "",
      },
      timeSeconds: 0,
      timeMinutes: "",
      midiaPath: "",
      thumbPath: "",
      isLiked: false,
    },
    volume: 100,
    currentTime: 0,
    endTimeSong: 0,
    percentTime: 0,
    isMuted: false,
  } as PlayerState,
  reducers: {
    playerUpdateIsPlayng: (state, action) => {
      state.isPlayng = action.payload;
    },
    playerUpdate: (state, action) => {
      state = action.payload;
    },
    playerUpdateNextSong: (state, action) => {
      state.nextSong = action.payload;
    },
    playerUpdatePlayngSong: (state, action) => {
      state.playngSong = action.payload;
    },
    playerUpdateVolume: (state, action) => {
      state.volume = action.payload;
    },
    playerUpdateCurrentTime: (state, action) => {
      state.currentTime = action.payload;
    },
    playerUpdateEndTimeSong: (state, action) => {
      state.endTimeSong = action.payload;
    },
    playerUpdatePercentTime: (state, action) => {
      state.percentTime = action.payload;
    },
    playerUpdateIsMuted: (state, action) => {
      state.isMuted = action.payload;
    },
  },
});

export const {
  playerUpdate,
  playerUpdateNextSong,
  playerUpdatePlayngSong,
  playerUpdateVolume,
  playerUpdateCurrentTime,
  playerUpdateEndTimeSong,
  playerUpdatePercentTime,
  playerUpdateIsMuted,
  playerUpdateIsPlayng
} = playerSlice.actions;
export default playerSlice.reducer;

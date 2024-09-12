import { createSlice } from "@reduxjs/toolkit";



export interface PlayingState {
    playing: {
        songInfo: {
          songId: string,
          name: string,
          artist: string,
          album: {
            name: string,
            thumbPath: string,
          },
          timeSeconds: number,
          timeMinutes: string,
          midiaPath: string,
          thumbPath: string,
          isLiked: false,
        },
        isPlaying: false,
      },
}

export const playingSlice = createSlice({
    name: "playing",
    initialState: {
        playing: {
            songInfo: {
              songId: "",
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
            isPlaying: false,
          },
    } as PlayingState,
    reducers: {
        playingUpdate: (state, action) => {
            state.playing = action.payload
        },
        playingToggle: (state, action) => {
            state.playing.isPlaying = action.payload
        },
        playingSong: (state, action) => {
            state.playing.songInfo = action.payload
        }
    },
});

export default playingSlice.reducer;

export const { playingUpdate, playingToggle, playingSong } = playingSlice.actions;


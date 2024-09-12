// mainBoardSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MainBoardState {
  currentPage: 'home' | 'library' | 'search' | 'playlist' | 'album';
}

const mainBoardSlice = createSlice({
  name: 'mainBoard',
  initialState : {
    currentPage: 'home',
  },
  reducers: {
    setPage(state, action: PayloadAction<MainBoardState['currentPage']>) {
      state.currentPage = action.payload;
    },
  },
});

export const { setPage } = mainBoardSlice.actions;
export default mainBoardSlice.reducer;

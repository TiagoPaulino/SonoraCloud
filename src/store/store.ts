
import { configureStore } from '@reduxjs/toolkit';
import mainBoardSlice from './mainBoard.slice';
import sideMenuSlice from './sideMenu.slice';
import playListPageSlice from './playListPage.slice';
import playingSlice from './playing.slice';
import homePageSlice from './homePage.slice';
import playerSlice from './player.slice';
import searchPageSlice from './searchPage.slice';




export const store = configureStore({
  reducer: {
    mainBoard: mainBoardSlice,
    homePage: homePageSlice,
    sideMenu: sideMenuSlice,
    playListPage: playListPageSlice,
    playing: playingSlice,
    player: playerSlice,
    searchPage: searchPageSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

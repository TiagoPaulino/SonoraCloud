"use client";
import theme from "@/theme";
import { ThemeProvider } from "styled-components";
import { StyledPage } from "./page.styled";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import Player from "@/components/player";
import SideMenu from "@/components/sidemenu";
import { HomeBoard } from "@/components/maindashboard/Home/HomeBoard";


export default function Home() { 

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
          <StyledPage>
            <SideMenu />
              <HomeBoard />
            <Player />
          </StyledPage>
      </Provider>
    </ThemeProvider>
  );
}

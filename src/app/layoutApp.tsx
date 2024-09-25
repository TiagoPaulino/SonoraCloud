'use client'
import theme from "@/theme";
import { ThemeProvider } from "styled-components";
import { StyledPage } from "./page.styled";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import Player from "@/components/player";
import SideMenu from "@/components/sidemenu";

export default function LayoutApp ({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <StyledPage>
          <SideMenu />
            {children}
          <Player />
        </StyledPage>
      </Provider>
    </ThemeProvider>
  );
};
'use client'
import { ThemeProvider } from "styled-components";
import { PlayerCover } from "./components/PlayerCover/PlayerCover";
import { PlayListList } from "./components/PlayListList/PlayListList";
import { SectionSelector } from "./components/SectionSelector/SectionSelector";
import { Container } from "./sideMenu.styled";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import Skeleton from "react-loading-skeleton";

function SideMenu() {
  const theme = useSelector((state: RootState) => state.theme);
  const rows = useSelector((state: RootState) => state.homePage.rows);
  return (
    <ThemeProvider theme={theme}>
      {rows.length > 0 ?
      <Container>
        <SectionSelector />
        <PlayListList />
        <PlayerCover />
      </Container>
      :
      <Skeleton count={1} height={"100%"} width={"100%"} baseColor="#b6b6b6" direction="ltr" />
    }
    </ThemeProvider>
  );
}

export default SideMenu;

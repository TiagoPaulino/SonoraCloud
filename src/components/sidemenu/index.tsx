import { ThemeProvider } from "styled-components";
import { PlayerCover } from "./components/PlayerCover/PlayerCover";
import { PlayListList } from "./components/PlayListList/PlayListList";
import { SectionSelector } from "./components/SectionSelector/SectionSelector";
import { Container } from "./sideMenu.styled";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

function SideMenu() {
  const theme = useSelector((state: RootState) => state.theme);
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <SectionSelector />
        <PlayListList />
        <PlayerCover />
      </Container>
    </ThemeProvider>
  );
}

export default SideMenu;

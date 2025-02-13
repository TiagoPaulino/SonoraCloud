"use client";
import { ThemeProvider } from "styled-components";
import { Controls } from "./components/controls/controls";
import { MoreOptions } from "./components/moreOptons/moreOptions";
import { SongInfo } from "./components/songInfo/songInfo";
import { Container } from "./player.styled";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import Skeleton from "react-loading-skeleton";

export default function Player() {
  const theme = useSelector((state: RootState) => state.theme);
  const rows = useSelector((state: RootState) => state.homePage.rows);

  return (
    <ThemeProvider theme={theme}>
      {rows.length > 0 ? (
        <Container>
          <SongInfo />
          <Controls />
          <MoreOptions />
        </Container>
      ) : (
        <Container>
          <Skeleton
            count={1}
            height={"100%"}
            width={"100%"}
            baseColor="#b6b6b6"
            direction="ltr"
          />
        </Container>
      )}
    </ThemeProvider>
  );
}

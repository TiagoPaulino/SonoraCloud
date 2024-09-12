import { useSelector } from "react-redux";
import { Container, SongSubtitle, SongTitle } from "./songInfo.styled";
import { RootState } from "@/store/store";

export const SongInfo = () => {
  const {name, artist} = useSelector((state: RootState) => state.player.playngSong);
  return (
    <Container>
      <SongTitle>
        {name}
      </SongTitle>
      <SongSubtitle>{artist}</SongSubtitle>
    </Container>
  );
};

'use client';
import { IoPlay } from "react-icons/io5";
import {
  ActionsButtons,
  Button,
  Header,
  HeaderCover,
  HeaderImage,
  HeaderTexts,
  PlaylistDescription,
  PlaylistTitle,
  RigthAlign,
} from "./Header.styled";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { formatTime } from "@/utils/formatTime";

export const AlbumHeader: React.FC = () => {
  const { image, name, artist_name, tracks } = useSelector(
    (state: RootState) => state.albumPage.albumData
  );
  const TotalTIme = formatTime(
    tracks?.reduce((a, b) => a + parseInt(b.duration), 0)
  );
  return (
    <Header>
      <HeaderCover>
        <HeaderImage src={image} />
      </HeaderCover>
      <RigthAlign>
        <HeaderTexts>
          <PlaylistTitle>{name}</PlaylistTitle>
          <PlaylistDescription>
            {artist_name} - {TotalTIme}
          </PlaylistDescription>
        </HeaderTexts>
        <ActionsButtons>
          <Button>
            <IoPlay />
          </Button>
        </ActionsButtons>
      </RigthAlign>
    </Header>
  );
};

import { IoAdd, IoPlay } from "react-icons/io5";
import {
  Container,
  Cover,
  CoverContainer,
  CoverButton,
  Subtitle,
  Title,
  CoverActions,
} from "./Card.styled";
import { SoundPlayer } from "@/playerManager/playerManager";
import { setIsPlayng, setPlayngNow, setUpdateEndTimeSong } from "@/playerManager/playerManage.updateStore";
import { formatTime } from "@/utils/formatTime";

interface CardData {
  id: string,
  name: string,
  album_id: string,
  artist_id: string,
  duration: string,
  artist_name: string,
  playlistadddate: string,
  position: string,
  license_ccurl: string,
  album_image: string,
  image: string,
  audio: string,
  audiodownload: string,
  audiodownload_allowed: true | false,
  
}
export const Card: React.FC<{CardData: CardData}> = ({CardData}) => {
  const handleClick = () => {
    if (CardData.audio) {
      SoundPlayer.load(CardData.audio);
      setPlayngNow(
        {name: CardData.name,
        artist: CardData.artist_name,
        album: { name: CardData.album_id, thumbPath: CardData.album_image },
        timeSeconds: 0,
        timeMinutes: formatTime(Number(CardData.duration)),
        midiaPath: CardData.audio,
        thumbPath: CardData.image || CardData.album_image,
        isLiked: false}
      )}
    setUpdateEndTimeSong(CardData.duration)
    SoundPlayer.play();
    setIsPlayng(true)

  };

  return (
    <Container>
      <CoverContainer>
        <Cover src={CardData.image} />
        <CoverActions>
          <CoverButton>
            <IoPlay onClick={handleClick}/>
          </CoverButton>
{/*           <CoverButton>
            <IoAdd/>
          </CoverButton>   sera adicionado no futuro*/}
        </CoverActions>
      </CoverContainer>

      <Title>{CardData.name}</Title>
      <Subtitle>{CardData.artist_name}</Subtitle>
    </Container>
  );
};

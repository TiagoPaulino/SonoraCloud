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
import MediaSession from "@/components/global/mediasession/MediaSession";

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
export const Card: React.FC<CardData> = ({id,
  name,
  album_id,
  artist_id,
  duration,
  artist_name,
  playlistadddate,
  position,
  license_ccurl,
  album_image,
  image,
  audio,
  audiodownload,
  audiodownload_allowed}) => {
  const handleClick = () => {
    if (audio) {
      SoundPlayer.load(audio);
      setPlayngNow(
        {name: name,
        artist: artist_name,
        album: { name: album_id, thumbPath: album_image },
        timeSeconds: 0,
        timeMinutes: formatTime(Number(duration)),
        midiaPath: audio,
        thumbPath: image || album_image,
        isLiked: false}
      )}
    setUpdateEndTimeSong(duration)
    SoundPlayer.play();
    setIsPlayng(true)
    MediaSession()
  };

  return (
    <Container>
      <CoverContainer>
        <Cover src={image} />
        <CoverActions>
          <CoverButton>
            <IoPlay onClick={handleClick}/>
          </CoverButton>
{/*           <CoverButton>
            <IoAdd/>
          </CoverButton>   sera adicionado no futuro*/}
        </CoverActions>
      </CoverContainer>

      <Title>{name}</Title>
      <Subtitle>{artist_name}</Subtitle>
    </Container>
  );
};

import { IoPlay } from "react-icons/io5";
import {
  ArtistName,
  PlayButton,
  TimeSong,
  TrackContainer,
  TrackCover,
  TrackImage,
  TrackName,
} from "./TrackListItem.syled";
import { formatTime } from "@/utils/formatTime";

export interface TrackData {
  id: string;
  name: string;
  album_id?: string;
  artist_id?: string;
  duration: string;
  artist_name?: string;
  playlistadddate?: string;
  position?: string;
  license_ccurl?: string;
  album_image?: string;
  image?: string;
  audio: string;
  audiodownload?: string;
  audiodownload_allowed?: boolean;
}

interface TrackProps {
  track: TrackData;
}

export const TrackItemList: React.FC<TrackProps> = ({ track }) => {
  return (
    <TrackContainer>
      <TrackCover>{track.image && <TrackImage src={track.image} />}</TrackCover>
      <PlayButton>
        <IoPlay />
      </PlayButton>
      <TrackName>{track.name}</TrackName>
      <ArtistName>{track.artist_name}</ArtistName>
      <TimeSong>{formatTime(Number(track.duration))}</TimeSong>
    </TrackContainer>
  );
};

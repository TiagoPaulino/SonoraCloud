import { Router, useRouter } from "next/router";
import {
  Container,
  ImageCover,
  AlbumImage,
  AlbumName,
} from "./AlbumCard.styled";

export interface AlbumCardProps {
  artist_id?: string;
  artist_name?: string;
  id?: string;
  image?: string;
  name?: string;
  releasedate?: string;
  shareurl?: string;
  shorturl?: string;
  zip?: string;
  zip_allowed?: Boolean;
}

export const AlbumCard: React.FC<AlbumCardProps> = ({ name, image, id }) => {
  const router = useRouter();
  const handleClick = () => {
    if (id) {
      router.push(`/album/${id}`);
    }
  }
  return (
    <Container onClick={handleClick}>
      <ImageCover>
        <AlbumImage src={image} />
      </ImageCover>
      <AlbumName>{name}</AlbumName>
    </Container>
  );
};

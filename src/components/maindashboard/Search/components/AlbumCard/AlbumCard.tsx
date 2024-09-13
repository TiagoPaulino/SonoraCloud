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
  return (
    <Container>
      <ImageCover>
        <AlbumImage src={image} />
      </ImageCover>
      <AlbumName>{name}</AlbumName>
    </Container>
  );
};

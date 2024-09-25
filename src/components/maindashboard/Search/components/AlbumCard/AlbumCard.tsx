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
  const handleClick = () => {
    if (id) {
      window.location.href = `/album/${id}`;
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

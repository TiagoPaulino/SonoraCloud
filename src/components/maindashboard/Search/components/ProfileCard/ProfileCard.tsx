import { Container, ImageCover, ProfileImage,ProfileName } from "./ProfileCard.styled"
import { IoPersonOutline } from "react-icons/io5";

export interface ProfileCardProps {
    id ?: string,
    image ?: string,
    joindate ?: string,
    name ?: string,
    shareurl?: string,
    shorturl?: string,
    website?: string
}

export const ProfileCard:React.FC<ProfileCardProps> = ({ name, image }) => {

    return (
        <Container>
            <ImageCover>
                {image != ""?<ProfileImage src={image}/>:<IoPersonOutline size={"50px"}/>}
            </ImageCover>
            <ProfileName>{name}</ProfileName>
        </Container>
    )
}
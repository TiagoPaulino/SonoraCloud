import { AlbumCard, AlbumCardProps } from "../AlbumCard/AlbumCard"
import { ProfileCard, ProfileCardProps } from "../ProfileCard/ProfileCard"
import { Container, RowContainer, RowTitle } from "./Row.styled"

interface RowProps {
    title:string, 
    itens: ProfileCardProps[] | AlbumCardProps[]
}
export const Row:React.FC<RowProps> = ({ title, itens}) => {
    
    return (
    <Container>
        <RowTitle>{title}</RowTitle>
        <RowContainer>
        {title === "Artists" && itens.map((item, id)=>(
            <ProfileCard key={id} name={item.name} image={item.image} />
        ))}
        {title === "Albums" && itens.map((item, id)=>(
            <AlbumCard key={id} name={item.name} image={item.image} id={item.id} />
        ))}
        {title === "Tracks" && itens.map((item, id)=>(
            <AlbumCard key={id} name={item.name} image={item.image} id={item.id} />
        ))}
        </RowContainer>
    </Container>
    )

}

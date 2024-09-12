import { useSelector } from "react-redux"
import { Container, Cover } from "./PlayerCover.styled"
import { RootState } from "@/store/store"
import { IoImageOutline } from "react-icons/io5"


export const PlayerCover = () => {
    const cover = useSelector((state:RootState) => state.player.playngSong?.thumbPath)
    return (
        <Container>
            {cover? 
                <Cover src={cover} /> 
                : <IoImageOutline size={"64px"}/> 
            }
        </Container>
    )
}
import { PlayerCover } from "./components/PlayerCover/PlayerCover"
import { PlayListList } from "./components/PlayListList/PlayListList"
import { SectionSelector } from "./components/SectionSelector/SectionSelector"
import { Container } from "./sideMenu.styled"

function SideMenu() {
    return (
        <Container>
            <SectionSelector/>
            <PlayListList/>
            <PlayerCover/>
        </Container>
    )
}

export default SideMenu
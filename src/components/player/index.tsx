import { Controls } from "./components/controls/controls";
import { MoreOptions } from "./components/moreOptons/moreOptions";
import { SongInfo } from "./components/songInfo/songInfo";
import { Container } from "./player.styled";


export default function Player() {

    return (
        <Container>
            <SongInfo/>
            <Controls/>
            <MoreOptions/>
        </Container>
    )
}
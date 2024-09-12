import { Container } from "./controls.styled"
import { PlaybackControls } from "./playbackControls/playbackControls"
import { SeekBar } from "./seekBar/seekBar"



export const Controls = () => {
    return (
        <Container>
            <PlaybackControls/>
            <SeekBar/>
        </Container>
    )
}

import { useSelector } from "react-redux"
import { Button, Container } from "./playbackControls.styled"
import { IoPause, IoPlay, IoPlaySkipBack, IoPlaySkipForward } from "react-icons/io5"
import { RootState } from "@/store/store"
import {  SoundPlayer } from "@/playerManager/playerManager"
import { setIsPlayng } from "@/playerManager/playerManage.updateStore"


export const PlaybackControls = () => {
    const isPlaying = useSelector((state: RootState) => state.player.isPlayng) // Corrigir aqui

    const play = () => {
        SoundPlayer.play()
        setIsPlayng(true)
    }

    const pause = () => {
        SoundPlayer.pause()
        setIsPlayng(false)
    }

    return (
        <Container>
            <Button><IoPlaySkipBack /></Button>
            <Button onClick={() => {
                isPlaying ? pause() : play()
            }}>{!isPlaying ? <IoPlay /> : <IoPause />}</Button>
            <Button><IoPlaySkipForward /></Button>
        </Container>
    )
}

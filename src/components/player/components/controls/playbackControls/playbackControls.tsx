import { useSelector } from "react-redux"
import { Button, Container } from "./playbackControls.styled"
import { IoPause, IoPlay, IoPlaySkipBack, IoPlaySkipForward, IoReloadOutline  } from "react-icons/io5"
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
    const nextTenSeconds = () => {
        SoundPlayer.seek += 10
    }
    const previusTenSeconds = () => {
        if(SoundPlayer.seek < 10){
            SoundPlayer.seek = 0
            return
        }
        SoundPlayer.seek -= 10
    }

    return (
        <Container>
            <Button onClick={previusTenSeconds}><IoReloadOutline style={{ transform: "scaleX(-1)" }} /></Button>
            <Button onClick={() => {
                isPlaying ? pause() : play()
            }}>{!isPlaying ? <IoPlay /> : <IoPause />}</Button>
            <Button onClick={nextTenSeconds}><IoReloadOutline  /></Button>
        </Container>
    )
}

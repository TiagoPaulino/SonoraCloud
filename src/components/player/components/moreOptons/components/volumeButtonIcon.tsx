import { SoundPlayer } from "@/playerManager/playerManager"
import { playerUpdateIsMuted } from "@/store/player.slice"
import { RootState } from "@/store/store"
import { IoVolumeMediumOutline, IoVolumeMuteOutline, IoVolumeLowOutline, IoVolumeHighOutline } from "react-icons/io5"
import {  useDispatch, useSelector } from "react-redux"



export const VolumeButtonIcon: React.FC = () => {
    const volume = useSelector((state: RootState) => state.player.volume)
    const isMuted = useSelector((state: RootState) => state.player.isMuted)

    const dispach = useDispatch()
        
    function toggleMute() {
        isMuted ? dispach(playerUpdateIsMuted(false)) : dispach(playerUpdateIsMuted(true))
        isMuted ? SoundPlayer.unmute() : SoundPlayer.mute()
    }
    if(isMuted){
        return(
            <IoVolumeMuteOutline
                size={24}
                onClick={toggleMute}
            />
        )
    }
    if(volume >= 50){
        return(
            <IoVolumeHighOutline
                size={24}
                onClick={toggleMute}
            />
        )
    }
    else if(volume >= 20 && volume < 50)
    {
        return(
            <IoVolumeMediumOutline
            size={24}
            onClick={toggleMute}
            />
        )
    }
    else if(volume >= 0 && volume < 20)
    {
        return(
            <IoVolumeLowOutline
                size={24}
                onClick={toggleMute}
            />
        )
    }

}
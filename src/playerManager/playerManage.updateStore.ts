import {store} from "@/store/store";
import {playerUpdateCurrentTime, playerUpdateEndTimeSong, playerUpdateIsMuted, playerUpdateIsPlayng, playerUpdateNextSong, playerUpdatePlayngSong, playerUpdateVolume, PlayngSong} from "@/store/player.slice";


export const setIsPlayng = (isPlayng: boolean) => {
    store.dispatch(playerUpdateIsPlayng(isPlayng))
}
export const setPlayngNow= (playngSong: PlayngSong)=> {
    store.dispatch(playerUpdatePlayngSong(playngSong))
}
export const setVolumeState = (volume: number) => {
    store.dispatch(playerUpdateVolume(volume))
}
export const setIsMuted = (isMuted: boolean) => {
    store.dispatch(playerUpdateIsMuted(isMuted))
}
export const setCurrentTime = (currentTime: number) => {
    store.dispatch(playerUpdateCurrentTime(currentTime))
}
export const setUpdateEndTimeSong = (endTimeSong: number | string) => {
    store.dispatch(playerUpdateEndTimeSong(endTimeSong))
}
export const setNextSong = (nextSong: PlayngSong) => {
    store.dispatch(playerUpdatePlayngSong({nextSong}))
}

export const setPreviusSong = (previusSong: PlayngSong) => {
    store.dispatch(playerUpdateNextSong(previusSong))
}

import { playerUpdateEndTimeSong, playerUpdatePlayngSong } from "@/store/player.slice";
import { store } from "@/store/store";
import { formatTime } from "@/utils/formatTime";
import { Howl, Howler } from "howler";
export const TrackMock = {
  id: "242064",
  name: "Better",
  album_id: "35183",
  artist_id: "343598",
  duration: "244",
  artist_name: "Audra Hardt",
  playlistadddate: "2009-01-17 00:00:00",
  position: "5",
  license_ccurl: "http://creativecommons.org/licenses/by-sa/3.0/",
  album_image:
    "https://usercontent.jamendo.com?type=album&id=35183&width=300&trackid=242064",
  image:
    "https://usercontent.jamendo.com?type=album&id=35183&width=300&trackid=242064",
  audio:
    "https://prod-1.storage.jamendo.com/?trackid=242064&format=mp31&from=Jp67L8Dg3Jw1JrSZ9IhSXw%3D%3D%7CgJ5TzNq7xsRAEVqu0LPemQ%3D%3D",
  audiodownload:
    "https://prod-1.storage.jamendo.com/download/track/242064/mp32/",
  audiodownload_allowed: true,
};

export const updatePlayerState = (track: typeof TrackMock) => {
    const playngSong = {
        name: track.name, 
        artist: track.artist_name, 
        album: {
            name: track.album_id, 
            thumbPath: track.album_image
        },
        timeSeconds: track.duration, 
        timeMinutes: formatTime(Number(track.duration)),
        midiaPath: track.audio, 
        thumbPath: track.image, 
        isLiked: false
    }
    store.dispatch(playerUpdatePlayngSong(playngSong))
    store.dispatch(playerUpdateEndTimeSong(Number(track.duration)))
}
class Player{
    volumeValue:number
    player: Howl | null = null
    _playId: number = 0
    constructor(volumeValue:number|null = 100){
        if(volumeValue) this.volumeValue = volumeValue
        this.volumeValue = 100
    }
    load(url:string):void{
        this.player = new Howl({
            src: [url],
            html5: true,
            onend: ()=>{
                
            }
        })
    }
   
    play():void{
        if(!this.player) return
        this._playId = this.player.play()

    }
    get playId():number{
        return this._playId
    }
    pause(id?:number):void{
        if (!this.player) return
        const playIdToPause = id || this._playId
        this.player.pause(playIdToPause)
    }
    stop():void{
        if(!this.player) return
        this.player.stop()
    }
    set volume(value:number){
        if(!this.player) return
        this.volumeValue = value
        this.player.volume(this.volumeValue/100)
    }
    mute(){
        if(!this.player) return
        this.player.mute(true)
    }
    unmute(){
        if(!this.player) return
        this.player.mute(false)
    }
    get seek():number{
        return this.player?.seek() || 0
    }
    set seek(seek:number){
        this.player?.seek(seek)
    }
    set repeat(repeat:boolean){
        this.player?.loop(repeat)
    }
    get status():boolean{
        return this.player?.playing() || false
    }
}

class PlayerManager{
    _playList: string[] = []
    player: Player
    constructor(){
        this.player = new Player()
    }
    load(url:string):void{
        if(this.player.status){
            this.player.stop()}
        this.player.load(url)
    }
    play():void{
        this.player.play()
    }
    pause():void{
        this.player.pause()
    }
    stop():void{
        this.player.stop()
    }
    set volume(value:number){
        this.player.volume = value
    }
    set seek(seek:number){
        this.player.seek = seek
    }
    set repeat(repeat:boolean){
        this.player.repeat = repeat
    }
    get playId():number{
        return this.player.playId
    }
    get seek():number{
        return this.player.seek
    }
    nextSong():void{
        if(!this._playList.length) return
        const nextSong = this._playList.shift()
        if(!nextSong) return
        this.load(nextSong)
        this.play()
    }
    previusSong():void{
        if(!this._playList.length) return
        const previusSong = this._playList.pop()
        if(!previusSong) return
        this.load(previusSong)
        this.play()
    }
    set playList(list:string[]){
        this._playList = list
    }

}


export const SoundPlayer = new PlayerManager()



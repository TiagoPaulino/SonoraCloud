import { SoundPlayer } from "@/playerManager/playerManager";
import {store} from "@/store/store";

// Definindo a interface do estado do player para evitar o uso de 'any'
interface PlayerState {
  player: {
    playngSong: {
      name: string;
      artist: string;
      album: { name: string };
      thumbPath: string;
      duration: number;
    };
  };
}

export default function MediaSession() {
  const Playng = store.getState().player.playngSong;

  function initMediaSession() {
    if ('mediaSession' in navigator && Playng) {
      navigator.mediaSession.metadata = new MediaMetadata({
        title: Playng.name,
        artist: Playng.artist,
        album: Playng.album.name,
        artwork: [
          { src: Playng.thumbPath, sizes: '512x512', type: 'image/jpg' }
        ]
      });

      // Ações de mídia
      navigator.mediaSession.setActionHandler('play', function() {
        SoundPlayer.play(); // Iniciar a reprodução
      });

      navigator.mediaSession.setActionHandler('pause', function() {
        SoundPlayer.pause(); // Pausar a reprodução
      });

      navigator.mediaSession.setActionHandler('seekbackward', function() {
        SoundPlayer.seek = (Math.max(SoundPlayer.seek - 10, 0)); // Retroceder
      });

      navigator.mediaSession.setActionHandler('seekforward', function() {
        SoundPlayer.seek = (Math.min(SoundPlayer.seek + 10, Playng.timeSeconds)); // Avançar
      });

      navigator.mediaSession.setActionHandler('seekto', function(event) {
        if (event.seekTime !== undefined) {
          SoundPlayer.seek = (Number(event.seekTime)); // Procurar uma posição específica
        }
      });
    }
  }
  initMediaSession();
}

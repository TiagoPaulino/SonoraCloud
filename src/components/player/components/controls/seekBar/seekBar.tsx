import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { playerUpdateCurrentTime } from "@/store/player.slice";
import { Container, Seeker, Timer } from "./seekBar.styled";
import { RootState } from "@/store/store";
import { formatTime } from "@/utils/formatTime";
import { SoundPlayer } from "@/playerManager/playerManager";
import { setCurrentTime } from "@/playerManager/playerManage.updateStore";

export const SeekBar = () => {
  const { currentTime, endTimeSong } = useSelector((state: RootState) => state.player);
  const isPlaying = useSelector((state: RootState) => state.player.isPlayng);
  const percent = (currentTime / Number(endTimeSong)) * 100 || 0;

  const dispatch = useDispatch();

  // Atualizar currentTime em tempo real
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isPlaying) {
      interval = setInterval(() => {
        const newTime = Math.round(SoundPlayer.seek)
        setCurrentTime(newTime)
        /* dispatch(playerUpdateCurrentTime(newTime)); */
      }, 1000); // Atualizar a cada segundo
    } else if (interval) {
      clearInterval(interval);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isPlaying, dispatch]);

  const handleSeeker = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    dispatch(playerUpdateCurrentTime(value));
    setCurrentTime(value);
    SoundPlayer.seek = value;
  };

  return (
    <Container>
      <Timer>{formatTime(Number(currentTime))}</Timer>
      <Seeker onChange={handleSeeker} $percent={percent} value={currentTime || 0} min={0} max={endTimeSong} />
      <Timer>{formatTime(Number(endTimeSong))}</Timer>
    </Container>
  );
};

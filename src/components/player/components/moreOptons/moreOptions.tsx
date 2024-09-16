import { useDispatch, useSelector } from "react-redux";
import { VolumeButtonIcon } from "./components/volumeButtonIcon";
import {
  Container,
  SpeakerButton,
  VolumeControler,
} from "./moreOptions.styled";
import { RootState } from "@/store/store";
import { playerUpdateVolume } from "@/store/player.slice";
import { SoundPlayer } from "@/playerManager/playerManager";

export const MoreOptions = () => {
  const dispatch = useDispatch();
  const stateVolume = useSelector((state: RootState) => state.player.volume);

  const changeVolume = (volume: number) => {
    dispatch(playerUpdateVolume(volume));
    SoundPlayer.volume = stateVolume;
  };
  const handleWheel = (e: React.WheelEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.deltaY > 0) {
      if (stateVolume === 0) return;
      changeVolume(stateVolume - 5);
    } else {
      if (stateVolume === 100) return;
      changeVolume(stateVolume + 5);
    }
  };



  return (
    <Container>
      <SpeakerButton>
        <VolumeButtonIcon />
      </SpeakerButton>
      <VolumeControler
        onChange={(e) => changeVolume(Number(e.target.value))}
        onWheel={(e) => handleWheel(e)}
        onMouseEnter={(e) => e.stopPropagation()}
        min={0}
        max={100}
        value={stateVolume}
        percent={stateVolume}

      />
    </Container>
  );
};

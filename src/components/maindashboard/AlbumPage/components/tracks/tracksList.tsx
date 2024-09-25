import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import { TrackListContainer } from "./trackList.styled";
import { TrackItemList } from "./components/TrackItemList";


export const TracksList = () => {
    const Tracks = useSelector((state: RootState) => state.albumPage.albumData.tracks);
    return (
        <TrackListContainer>
            {Tracks.map((track) => (
                console.log(track),
                <TrackItemList key={track.id} track={track} />
            ))}
        </TrackListContainer>
    );
}
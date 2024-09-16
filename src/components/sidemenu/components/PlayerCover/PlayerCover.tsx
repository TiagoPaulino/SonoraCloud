import { useSelector } from "react-redux"
import { Container, Cover } from "./PlayerCover.styled"
import { RootState } from "@/store/store"
import { IoImageOutline } from "react-icons/io5"
import { useRef, useCallback } from "react"
import { setThemeColor } from "@/colorManager/colorManager"

export const PlayerCover: React.FC = () => {
    const cover = useSelector((state: RootState) => state.player.playngSong?.thumbPath)
    const coverRef = useRef<HTMLImageElement>(null)
    const handleLoad = useCallback(async () => {
    if (coverRef.current && coverRef.current instanceof HTMLImageElement) {
        try {
            setThemeColor(coverRef.current)
        } catch (error) {
            console.error("Error getting color:", error)
        }
    } else {
        console.error("Invalid image element or it is not loaded yet")
    }
}, [])

    return (
        <Container>
            {cover ? 
                <Cover id="Cover" ref={coverRef} src={cover} onLoad={handleLoad} crossOrigin="anonymous" /> 
                : <IoImageOutline size={"64px"} /> 
            }
        </Container>
    )
}

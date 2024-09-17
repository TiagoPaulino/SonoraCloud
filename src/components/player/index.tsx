'use client'
import { ThemeProvider } from "styled-components";
import { Controls } from "./components/controls/controls";
import { MoreOptions } from "./components/moreOptons/moreOptions";
import { SongInfo } from "./components/songInfo/songInfo";
import { Container } from "./player.styled";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";


export default function Player() {
    const theme = useSelector((state:RootState)=>state.theme)

    return (
        <ThemeProvider theme={theme}>
        <Container>
            <SongInfo/>
            <Controls/>
            <MoreOptions/>
        </Container>
        </ThemeProvider>
    )
}
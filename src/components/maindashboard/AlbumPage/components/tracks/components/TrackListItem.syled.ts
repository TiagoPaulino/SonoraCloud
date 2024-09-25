import styled from "styled-components";


export const TrackContainer = styled.div`
    display: grid;
    grid-template-columns: 50px 50px 1fr 1fr 50px;
    grid-template-rows: 50px;
    grid-template-areas: "cover button name artist duration";
    width: 100%;
    gap: ${({ theme }) => theme.spaces.small};
    box-sizing: border-box;
    &> *{
        display: flex;
        align-items: center;
    }
`

export const TrackCover = styled.div`
    width: 50px;
    height: 50px;
    border-radius: ${({ theme }) => theme.spaces.small};
    display: flex;
    align-items: center;
    justify-content: center;
    grid-area: cover;
`

export const TrackImage = styled.img`
    width: 50px;
    height: 50px;
`

export const TrackName = styled.p`
    font-size: ${({ theme }) => theme.typography.sizes.regular};
    font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
    grid-area: name;
`
export const PlayButton = styled.button`
    grid-area: button;
    color: ${({ theme }) => theme.typography.color.dark};
    border-radius: 50%;
    height: 30px;
    width: 30px;
    display: flex;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    border: none;
    margin: auto;
    background-color: ${({ theme }) => theme.colors.background.tertiary};
    &:hover{
        box-shadow: 0px 0px 10px ${({ theme }) => theme.colors.shadows.black};
    }

`
export const ArtistName = styled.p`
    font-size: ${({ theme }) => theme.typography.sizes.regular};
    font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
    grid-area: artist;
`
export const TimeSong = styled.p`
    font-size: ${({ theme }) => theme.typography.sizes.regular};
    font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
    grid-area: duration;
`
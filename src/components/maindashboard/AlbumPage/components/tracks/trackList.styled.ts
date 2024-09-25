import styled from "styled-components";


export const TrackListContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spaces.small};
    overflow-y: scroll;
    overflow-x: hidden;
    max-height: 100%;
    &::-webkit-scrollbar {
        display: none;
    }
    &:hover::-webkit-scrollbar {
        display: inherit;
        width: 5px;
        border-radius: ${({ theme }) => theme.spaces.small};
    }
    &::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.colors.background.highlight};
        border-radius: ${({ theme }) => theme.spaces.small};
        max-width: 20px;
        max-height: 20px;
    }
    box-sizing: border-box;
`

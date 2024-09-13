import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-direction: row;
    gap: ${({ theme }) => theme.spaces.small};
    align-items: center;
    justify-content: center;
    height: 100%;
    @media screen and (max-width: 768px) {
        display: none;
    }
`
export const SpeakerButton = styled.button`
 background: transparent;
 border: none;
 cursor: pointer;
 display: flex;
 justify-content: center;
 align-items: center;
 font-size: 18px;
`
export const VolumeControler = styled.input.attrs({type: "range"})<{percent?: number | string}>`
    appearance: none;
    width: 100px;
    height: 5px;
    background-color: transparent;
    outline: none;
    border-radius: 5px;
    cursor: pointer;
    &::-webkit-slider-runnable-track {
        height: 6px;
        background: linear-gradient(
            to right,
            ${({ theme }) => theme.colors.background.highlight} 0%,
            ${({ theme }) => theme.colors.background.highlight} ${({ percent }) => percent + "%"},
            ${({ theme }) => theme.colors.background.tertiary} 0%,
            ${({ theme }) => theme.colors.background.tertiary} 100%
        );
        border-radius: 5px;
    }
    &::-webkit-slider-runnable:hover {
        filter: brightness(1.1);
    }

    &::-webkit-slider-runnable {
        border-radius: 5px;
    }

    &::-webkit-slider-thumb {
        appearance: none;
        width: 12px; 
        height: 12px; 
        background: #242424; 
        cursor: pointer; 
        border-radius: 50%; 
        margin-top: -3px; 
    }
`
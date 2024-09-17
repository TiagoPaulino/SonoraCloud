import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${({ theme }) => theme.spaces.small};
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.colors.background.primary};
    grid-column: span 2;
    border-radius: ${({ theme }) => theme.spaces.small};
    grid-area: player;
    transition: all 0.3s ease-in-out;
    @media screen and (max-width: 768px) {
        max-height: 120px;
        grid-column: span 1;
        width: 100%;
        flex-direction: column;
    }
`

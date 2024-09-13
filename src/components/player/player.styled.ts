import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${({ theme }) => theme.spaces.small};
    box-sizing: border-box;
    background-color: #f0f0f0;
    grid-column: span 2;
    grid-area: player;
    @media screen and (max-width: 768px) {
        max-height: 120px;
        grid-column: span 1;
        max-width: 100%;
        flex-direction: column;
    }
`

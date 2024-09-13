import styled from "styled-components";



export const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.colors.background.primary};
    border-radius: ${({ theme }) => theme.spaces.small};
    box-sizing: border-box;
    grid-area: sidemenu;
    @media screen and (max-width: 768px) {
        flex-direction: row;
        width: 100%;
        max-height: 60px;}
`
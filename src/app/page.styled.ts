import styled from "styled-components";

export const StyledPage = styled.div`
    background: #fff;
    color: ${({ theme }) => theme.typography.color.dark};
    display: grid;
    height: 100vh;
    grid-template-columns:10rem 1fr;
    grid-template-rows: 1fr 80px;
    gap: ${({ theme }) => theme.spaces.small};
    padding: ${({ theme }) => theme.spaces.small};
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
    `
export const Sidebar = styled.div`
    background: ${({ theme }) => theme.colors.red};
    width:100%;
    height: 100%;
    border-radius:${({ theme }) => theme.spaces.small};
    grid-area: "sidebar";

`;
export const Player = styled.div`
    background: ${({ theme }) => theme.colors.blue};
    width:100%;
    height: 100%;
    border-radius:${({ theme }) => theme.spaces.small};
    grid-column: span 2;
    grid-area: "player";
`;

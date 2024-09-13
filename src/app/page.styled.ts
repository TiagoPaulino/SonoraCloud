import styled from "styled-components";

export const StyledPage = styled.div`
    background: #fff;
    color: ${({ theme }) => theme.typography.color.dark};
    display: grid;
    height: 100vh;
    grid-template-columns:10rem 1fr;
    grid-template-rows: 1fr 80px;
    grid-template-areas: 'sidemenu mainboard'
         'player player';
    gap: ${({ theme }) => theme.spaces.small};
    padding: ${({ theme }) => theme.spaces.small};
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
    @media (max-width: 768px) {
        grid-template-columns: 1fr; /* Oculta o menu lateral */
        grid-template-areas: 
         'mainboard'
         'player'
         'sidemenu';
        grid-template-rows: auto 120px 60px ; /* Move o rodapé para o fundo */
    }
    `

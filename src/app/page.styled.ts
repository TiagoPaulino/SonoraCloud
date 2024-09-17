import styled from "styled-components";

export const StyledPage = styled.div`
    background: #fff; 
    color: ${({ theme }) => theme.typography.color.dark} !important;
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
        height: calc(100vh - env(safe-area-inset-top) - 40px);
        width: 100%;
        grid-template-columns: 100vw; /* Oculta o menu lateral */
        box-sizing: initial;
        grid-template-areas: 
         'mainboard'
         'player'
         'sidemenu';
        grid-template-rows: auto 120px 60px ;
        padding :8px;
        /* Move o rodapé para o fundo */
    }
    `

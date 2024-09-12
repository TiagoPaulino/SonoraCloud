import styled from "styled-components";



export const Container = styled.div`
    width: 100%;
    max-height: 100%;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    background-color: ${({ theme }) => theme.colors.background.primary};
    padding: ${({ theme }) => theme.spaces.medium};
    box-sizing: border-box;
    border-radius: ${({ theme }) => theme.spaces.small};
    gap: ${({ theme }) => theme.spaces.medium};
    grid-area: "mainboard";
    &::-webkit-scrollbar {
    display: inherit;
    width: 8px;
    height: 8px;
    border-radius: ${({ theme }) => theme.spaces.small};
    box-sizing: border-box;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.background.highlight};
    border-radius: ${({ theme }) => theme.spaces.small};
    width: 8px !important;
    height: 5px !important;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: ${({ theme }) => theme.spaces.small};

  }
    
`
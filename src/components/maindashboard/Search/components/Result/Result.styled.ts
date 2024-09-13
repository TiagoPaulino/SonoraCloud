import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    gap: ${({ theme }) => theme.spaces.small};
    padding: ${({ theme }) => theme.spaces.small};
    box-sizing: border-box;
    border-radius: ${({ theme }) => theme.spaces.small};
    color: ${({ theme }) => theme.colors.white};
    font-size: 16px;
    overflow-y: scroll;
    overflow-x: hidden;
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
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
    grid-area: mainboard;
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

    @media screen and (max-width: 768px) {
        width: 100%;
        max-height: 100%;
        grid-area: mainboard;
    }
    
`
export const SeachForm = styled.form`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: ${({ theme }) => theme.spaces.small};
`
export const Input = styled.input`
    width: 100%;
    height: 40px;
    border-radius: 10px;
    padding: 0px 10px;
    box-sizing: border-box;
    border: none;
    background-color: ${({ theme }) => theme.colors.background.tertiary};
    color: ${({ theme }) => theme.typography.color.dark};
    font-size: 16px;
    outline: none;
`
import styled from "styled-components";

export const Container = styled.div`
  transition: all 0.3s ease-in-out;
  width: 100%;
  max-height: 100%;
  overflow-y: auto;
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
    width: 8px;
    height: 8px;
    border-radius: ${({ theme }) => theme.spaces.small};
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
    padding: ${({ theme }) => theme.spaces.small};
  }
`
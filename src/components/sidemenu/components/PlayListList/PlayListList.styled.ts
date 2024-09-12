import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: ${({ theme }) => theme.spaces.medium};
  padding: ${({ theme }) => theme.spaces.medium} 0px;
  width: 100%;
  box-sizing: border-box;
  flex:1;
  max-height: 300px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }

  &:hover::-webkit-scrollbar {
    display: inherit;
    width: 5px;
    border-radius: ${({ theme }) => theme.spaces.small};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.background.highlight};
    border-radius: ${({ theme }) => theme.spaces.small};
    max-width: 20px;
    max-height: 20px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: ${({ theme }) => theme.spaces.small};
  }
`;
export const PlayListItem = styled.span`
  padding-left: ${({ theme }) => theme.spaces.medium};
  cursor: pointer;
  font-size: ${({ theme }) => theme.typography.sizes.regular};
`;

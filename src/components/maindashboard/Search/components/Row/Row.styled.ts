import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: ${({ theme }) => theme.spaces.medium};
  max-width: 100%;
`;
export const RowTitle = styled.span`
  font-size: ${({ theme }) => theme.typography.sizes.large};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
`;
export const RowContainer = styled.div`

  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: start;
  gap: ${({ theme }) => theme.spaces.medium};
  width: 100%;
  overflow-y: hidden;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  scroll-snap-align: start;
  -webkit-overflow-scrolling: touch;
  padding-bottom: ${({ theme }) => theme.spaces.small};
  margin-bottom: 8px;
  &:hover {
    margin-bottom: 0px;
  }
  &::-webkit-scrollbar {
    display: none;
  }

  &:hover::-webkit-scrollbar {
    display: inherit;
    width: 2px;
    height: 8px;
    border-radius: ${({ theme }) => theme.spaces.small};
    box-sizing: border-box;
    filter: opacity(0.2);
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.background.highlight};
    border-radius: ${({ theme }) => theme.spaces.small};
    width: 5px !important;
    height: 5px !important;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: ${({ theme }) => theme.spaces.small};
  }
`;

import styled from "styled-components";
export const RigthAlign = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: end;
  height: 100%;
  gap: ${({ theme }) => theme.spaces.small};
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  gap: ${({ theme }) => theme.spaces.medium};
  width: 100%;
  padding: ${({ theme }) => theme.spaces.small};
  box-sizing: border-box;
`;
export const HeaderCover = styled.div`
  width: 220px;
  height: 220px;
  border-radius: ${({ theme }) => theme.spaces.small};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background.tertiary};
`;
export const HeaderImage = styled.img`
  width: 220px;
  height: 220px;
  border-radius: ${({ theme }) => theme.spaces.small};
  object-fit: cover;
`;
export const HeaderTexts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: ${({ theme }) => theme.spaces.small};
`;
export const PlaylistTitle = styled.h1`
  font-size: ${({ theme }) => theme.typography.sizes.large};
  margin: 0px;
`;
export const PlaylistDescription = styled.p`
  font-size: ${({ theme }) => theme.typography.sizes.regular};
  margin: 0px;
`;

export const ActionsButtons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  gap: ${({ theme }) => theme.spaces.small};
  `
export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.background.tertiary};
  color: ${({ theme }) => theme.typography.color.dark};
  padding: ${({ theme }) => theme.spaces.small};
  border-radius: 50%;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  &:hover{
    box-shadow: 0px 0px 10px ${({ theme }) => theme.colors.shadows.black};
  }
`
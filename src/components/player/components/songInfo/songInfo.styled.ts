import styled from "styled-components";


export const SongSubtitle = styled.p`
  margin: 0px;
  padding: 0px;
  font-size: ${({ theme }) => theme.typography.sizes.regular};
  font-weight: 400;
  color: ${({ theme }) => theme.typography.color.black};
  filter: opacity(0.8);
`;

export const SongTitle = styled.p<{animate?:boolean}>`
  margin: 0px;
  padding: 0px;
  font-size: ${({ theme }) => theme.typography.sizes.regular};
  font-weight: 600;
  color: ${({ theme }) => theme.typography.color.dark};
  display: inline;
  white-space: nowrap;
  flex-wrap: nowrap;
  ${({animate})=>animate&&`animation: marquee 10s linear infinite;`}
`;

export const Container = styled.div`
  min-width: 160px;
  max-width: 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  @keyframes marquee {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
  @media screen and (max-width: 768px) {
        min-width: 100%;
        font-size: ${({ theme }) => theme.typography.sizes.large};
    }
`;

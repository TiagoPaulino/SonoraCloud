import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  gap: ${({ theme }) => theme.spaces.small};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Seeker = styled.input.attrs({ type: "range" })<{
  percent: number | string;
}>`
  appearance: none;
  width: 300px;
  height: 5px;
  background-color: transparent;
  outline: none;
  border-radius: 5px;
  cursor: pointer;
  &::-webkit-slider-runnable-track {
    height: 6px;
    background: linear-gradient(
      to right,
      ${({ theme }) => theme.colors.background.highlight} 0%,
      ${({ theme }) => theme.colors.background.highlight} ${({ percent }) => percent + "%"},
      ${({ theme }) => theme.colors.background.tertiary} 0%,
      ${({ theme }) => theme.colors.background.tertiary} 100%
    );
    border-radius: 5px;
  };
  &::-webkit-slider-runnable:hover {
    background-color: red;
  };

  &::-webkit-slider-runnable {
    border-radius: 5px;
  };

  
  &::-webkit-slider-thumb {
    appearance: none;
    width: 12px; 
    height: 12px; 
    background: #242424; 
    cursor: pointer; 
    border-radius: 50%; 
    margin-top: -3px; 
  };

  
  &::-webkit-slider:hover {
    filter: brightness(80%); 
  };
 
  &::-webkit-slider-thumb:active {
    background: #3d3d3d; 
  };
`

export const Timer = styled.div`
  font-size: ${({ theme }) => theme.typography.sizes.regular};
  min-width: 40px;
  text-align: center;
`;

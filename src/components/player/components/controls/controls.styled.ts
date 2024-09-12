import styled from "styled-components";



export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: ${({ theme }) => theme.spaces.small};
    box-sizing: border-box;
    gap: ${({ theme }) => theme.spaces.small};
`
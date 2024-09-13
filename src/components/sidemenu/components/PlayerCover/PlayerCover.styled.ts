import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    height: 100%;
    max-height: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.background.tertiary};
    overflow: hidden;
    border-radius: 0px 0px ${({ theme }) => theme.spaces.small} ${({ theme }) => theme.spaces.small};
    @media screen and (max-width: 768px) {
        display: none;
    }
   
`
export const Cover = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;    
`
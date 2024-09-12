import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: ${({ theme }) => theme.spaces.small};
`

export const Button = styled.button`
    background-color: ${({ theme })=> theme.colors.background.tertiary};
    color: ${({ theme }) => theme.colors.black};
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
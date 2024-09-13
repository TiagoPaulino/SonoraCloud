import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    max-height: 100px;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    gap: ${({ theme }) => theme.spaces.medium};
    padding: ${({ theme }) => theme.spaces.medium} 0px;
    @media screen and (max-width: 768px) {
        flex-direction: row;
    }

`
export const SelectorItem = styled.span`
    max-height: 20px;
    border-radius: ${({ theme }) => theme.spaces.small};

    display: flex;
    flex-direction: row;
    gap: ${({ theme }) => theme.spaces.small};
    align-items: center;
    justify-content: center;
    padding-left: ${({ theme }) => theme.spaces.medium};
    cursor: pointer;
    font-size: ${({ theme }) => theme.typography.sizes.regular};
    &:hover{
        font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
    }
`
import styled from "styled-components";



export const CoverButton = styled.button`
        display: none;
        background-color: ${({ theme }) => theme.colors.background.tertiary};
        color: ${({ theme }) => theme.colors.black};
        padding: ${({ theme }) => theme.spaces.small};
        border-radius: 50%;
        cursor: pointer;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        border: none;
    `

export const CoverActions = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: ${({ theme }) => theme.spaces.small};
    position: absolute;
    bottom: ${({ theme }) => theme.spaces.medium};
    padding: 0px ${({ theme }) => theme.spaces.small};
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    max-width: 260px;
    min-width: 190px;
    gap: ${({ theme }) => theme.spaces.small};
    &:hover ${CoverButton} {
        display: flex;  
    }
`
export const Title = styled.span`
    font-size: ${({ theme }) => theme.typography.sizes.regular};
    font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    max-width: 190px;
    padding-left: ${({ theme }) => theme.spaces.small};
`
export const Subtitle = styled.span`
    font-size: ${({ theme }) => theme.typography.sizes.regular};
    font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
    padding-left:${({ theme }) => theme.spaces.small};
`
export const CoverContainer = styled.div`
    max-width: 220px;
    max-height: 220px;
    width: 100%;
    height: 100%;
    border-radius: ${({ theme }) => theme.spaces.small};
    overflow: hidden;
    position: relative;
`
export const Cover = styled.img`
    max-width: 220px;
    max-height: 220px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: ${({ theme }) => theme.spaces.small};
`




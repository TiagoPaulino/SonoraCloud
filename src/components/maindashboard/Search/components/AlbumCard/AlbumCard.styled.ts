import styled from "styled-components";

export const Container = styled.div`
    max-width: 160px;
    max-height: 180px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: ${({ theme }) => theme.spaces.small};
    padding: ${({ theme }) => theme.spaces.small};
    box-sizing: border-box;
    `
export const ImageCover = styled.div`
    width: 140px;
    height: 140px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.background.tertiary};
    `
export const AlbumImage = styled.img`
    width: 140px;
    height: 140px;
    border-radius: ${({ theme }) => theme.spaces.small};
    object-fit: cover;
    `
export const AlbumName = styled.p`
    margin: 0px;
    color: ${({ theme }) => theme.typography.color.dark};
    font-size: 14px;
    max-width: 140px;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: bold;
    white-space: nowrap;
`

    
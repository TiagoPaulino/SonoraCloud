import { Container } from "./AlbumPage.styled";




export default function AlbumPage({albumId}:{albumId?:string | string[]}) {

    return (
        <Container>
        <div>AlbumPage</div>
        <h1>{albumId}</h1>
        </Container>
    )
    
}
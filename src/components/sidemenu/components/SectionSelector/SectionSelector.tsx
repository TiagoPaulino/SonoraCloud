import { Container, SelectorItem } from "./SectionSelector.styled"
import { IoHomeOutline,IoLibraryOutline,IoSearch  } from "react-icons/io5";



export const SectionSelector = () => {
    return (
        <Container>
            <SelectorItem><IoHomeOutline size={24}/>Home</SelectorItem>
            {/* 
            <SelectorItem><IoLibraryOutline size={24}/>Library</SelectorItem>
            Será adicionado mais tarde
            */}
            <SelectorItem><IoSearch size={24}/>Search</SelectorItem>
        </Container>
    )
}
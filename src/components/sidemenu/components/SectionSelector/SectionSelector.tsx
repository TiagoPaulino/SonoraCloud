import Link from "next/link";
import { Container, SelectorItem } from "./SectionSelector.styled";
import { IoHomeOutline, IoLibraryOutline, IoSearch } from "react-icons/io5";

export const SectionSelector = () => {
  return (
    <Container>
      <Link style={{ textDecoration: "none", color: "inherit" }} href="/home">
        <SelectorItem>
          <IoHomeOutline size={24} />
          Home
        </SelectorItem>
      </Link>
      {/* 
            <SelectorItem><IoLibraryOutline size={24}/>Library</SelectorItem>
            Será adicionado mais tarde
            */}
      <Link style={{ textDecoration: "none", color: "inherit" }} href="/search">
        <SelectorItem>
          <IoSearch size={24} />
          Search
        </SelectorItem>
      </Link>
    </Container>
  );
};

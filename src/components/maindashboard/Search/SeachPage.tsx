import { ChangeEvent, FormEvent } from "react";
import { Container, Input, Results, SeachForm } from "./SearchPage.styled";
import { setSearchWord } from "@/store/searchPage.slice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";

export const SeachPage = () => {
    const dispatch = useDispatch()
    const {searchWord} = useSelector((state: RootState) => state.searchPage)


    const handleSearch = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(searchWord)
    }
    const handleSearchWord = (e:ChangeEvent<HTMLInputElement>)=>{
        dispatch(setSearchWord(e.target.value))
    }

  return (
    <Container>
      <SeachForm onSubmit={(e) => handleSearch(e)}>
        <Input onChange={(e) => handleSearchWord(e)} placeholder="Tacks, Albums, Artists, Tags..." />
      </SeachForm>
      <Results>
        
      </Results>
    </Container>
  );
};

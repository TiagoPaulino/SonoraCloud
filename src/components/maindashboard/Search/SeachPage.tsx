import { ChangeEvent, FormEvent } from "react";
import { Container, Input, SeachForm } from "./SearchPage.styled";
import { setResults, setSearchWord } from "@/store/searchPage.slice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import SearchResolts from "./actions/searchResolts";
import { ResultSeach } from "./components/Result/Result";

export const SeachPage = () => {
    const dispatch = useDispatch()
    const {searchWord} = useSelector((state: RootState) => state.searchPage)


    const handleSearch = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const newSearchResolts = new SearchResolts(searchWord).getResolts().then((resolts)=> {
            console.log(resolts)
            dispatch(setResults(resolts))})
    }
    const handleSearchWord = (e:ChangeEvent<HTMLInputElement>)=>{
        dispatch(setSearchWord(e.target.value))
    }

  return (
    <Container>
      <SeachForm onSubmit={(e) => handleSearch(e)}>
        <Input onChange={(e) => handleSearchWord(e)} placeholder="Tacks, Albums, Artists, Tags..." />
      </SeachForm>
      <ResultSeach />
    </Container>
  );
};

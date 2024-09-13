import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import { Container } from "./Result.styled";
import { Row } from "../Row/Row";



export const ResultSeach: React.FC = () => {
  const ResultData = useSelector((state: RootState) => state.searchPage);
  console.log(ResultData);

  return <Container>
        {ResultData.results.artists?  <Row title="Artists" itens={ResultData.results.artists} />: null}
        {ResultData.results.albums?  <Row title="Albums" itens={ResultData.results.albums} />: null}
        {ResultData.results.tracks?  <Row title="Tracks" itens={ResultData.results.tracks} />: null}
  </Container>;
};

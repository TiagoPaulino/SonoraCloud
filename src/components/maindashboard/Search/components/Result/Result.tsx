import { RootState } from "@/store/store"
import { useSelector } from "react-redux"
import { Container } from "./Result.styled"

export const ResultSeach:React.FC = () => {
    const ResultData = useSelector((state: RootState) => state.searchPage)
    console.log(ResultData)

    return (
        <Container>
            
        </Container>
    )
}
import { Card } from "@/components/global/Card/Card"
import { Container, RowContainer, RowTitle } from "./Row.styled"
import { RowIten } from "@/store/homePage.slice"

interface RowProps {
  name?: string
  itens: RowIten[] 
}

export const Row:React.FC<RowProps> = ({ name, itens }) => {



    return (
        <Container>
            <RowTitle>
                {name}
            </RowTitle>
            <RowContainer>

                {
                    itens?.map((item, id) => (
                        <Card key={id} {...item}  />
                    ))
                }

            </RowContainer>
        </Container>
    )
}
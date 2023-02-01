import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import styled from "styled-components";


const SummaryContainer = styled.section`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
	
	
  gap: 2rem;
  margin-top: -5rem;
`

const SummaryCard = styled.div`
	background: ${props => props.theme["gray-600"]};
  border-radius: 6px;
  padding: 2rem;
	display: flex;
	flex-direction: column;
	flex: 1;

	strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
  }

	${props => props.variant === "green"`
    background: ${props.theme["green-700"]}
  `}
`
const Card = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	color: ${props => props.theme["gray-300"]};
`  
  
  
  
  

export function Summary() {
  return (
    <SummaryContainer>
      <SummaryCard>
        <Card>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </Card>

        <strong>R$ 17.400,00</strong>
      </SummaryCard>

      <SummaryCard>
        <Card>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </Card>

        <strong>R$ 17.400,00</strong>
      </SummaryCard>

      <SummaryCard variant="green">
        <Card>
          <span>Total</span>
          <CurrencyDollar size={32} color="#fff" />
        </Card>

        <strong>R$ 17.400,00</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}
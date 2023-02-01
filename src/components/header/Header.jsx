import styled from "styled-components";
import * as Dialog from '@radix-ui/react-dialog';
import { NewTransactionModal } from "../newTransactionModal/NewTransactionModal";

const HeaderContainer = styled.header`
  background: ${props => props.theme["gray-900"]};
  padding: 2.5rem 0 7.5rem;
`

const HeaderContent = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const NewTransactionButton = styled.button`
  height: 50px;
  border: 0;
  background: ${props => props.theme["green-500"]};
  color: ${props => props.theme["white"]};
  font-weight: bold;
  padding: 0 1.25rem;
  border-radius: 6px;
  cursor: pointer;
  
  :hover {
    background: ${props => props.theme["green-700"]};
    transition: background-color 0.2s;
  }
`

export function Header() {
    return (
      <HeaderContainer>
        <HeaderContent>
          <img src="/logo.svg" alt="" />  
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <NewTransactionButton>Nova transação</NewTransactionButton>
            </Dialog.Trigger>
            <NewTransactionModal/>
          </Dialog.Root>
        </HeaderContent>
      </HeaderContainer>
    )
  }


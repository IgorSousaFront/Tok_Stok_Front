import React from "react";
import { Wrapper, Header, Actions } from './style'
import Button from "../Button";

const Layout = ({children}) => {
  return(
    <>
      <Wrapper>
        <Header>
          <h1>Listagem de fornecedores</h1> 
          <p>Estes são os fornecedores cadastrados</p>
        </Header>
        <main>
          {children}
        </main>
        <Actions>
          <Button>Adicionar fornecedor</Button>
        </Actions>
      </Wrapper>
    </>
  )
}

export default Layout

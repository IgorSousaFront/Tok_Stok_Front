import React, { useState } from "react";
import api from "../../services/api";
import Button from "../Button";
import Modal from '../Modal'
import { Wrapper, Header, Actions, InputField, Label } from './style'

const initialValue = {
  name: undefined,
  corporateName: undefined,
  cnpj: undefined,
  segment: undefined,
  address: {
    cep: undefined,
    street: undefined,
    number: undefined,
    complement: undefined
  },
  phone: undefined,
  email: undefined
}

const Layout = ({children}) => {
  const [showModal, setShowModal] = useState(false)
  const [provider, setProvider] = useState(initialValue)

  const onDataChange = (e) => {
    const { name, value } = e.target

    setProvider({
      ...provider, [name]: value
    })
  }

  const onAddProvider = (e) => {
    console.log(e)
    e.preventDefault()

    api.post('provider', provider)
      .then((response) => {
        window.location.reload();
      })
  }

  const toggleModal = () => setShowModal(!showModal)


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
          <Button onClick={() => toggleModal()}>Adicionar fornecedor</Button>
        </Actions>

        <Modal active={showModal} onCloseModal={() => toggleModal()} title="Cadastrar novo fornecedor">

          <form onSubmit={onAddProvider}>
            <Label>Nome:</Label>
            <InputField type="text" id="name" name="name" onChange={onDataChange} />
            <br />
            <Label>Nome da empresa:</Label>
            <InputField type="text" id="corporateName" name="corporateName" onChange={onDataChange} />
            <br />
            <Label>CNPJ:</Label>
            <InputField type="text" id="cnpj" name="cnpj" onChange={onDataChange} />
            <br />
            <Label>Seguimento:</Label>
            <InputField type="text" id="segment" name="segment" onChange={onDataChange} />
            <br />
            <Label>Telefone:</Label>
            <InputField type="number" id="phone" name="phone" onChange={onDataChange} />
            <br />
            <Label>Email:</Label>
            <InputField type="email" id="email" name="email" onChange={onDataChange} />

            <Button type="submit">Cadastrar</Button>
          </form>
        </Modal>
      </Wrapper>
    </>
  )
}

export default Layout

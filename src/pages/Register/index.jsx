import { useState } from "react";
import { Background, Header, Title } from "../../components";
import {
  Button,
  ButtonBack,
  ContainerButtonBack,
  ContainerInputs,
  Form,
  Image,
  Input,
  Main,
} from "./styles";

import arrowLeft from "../../assets/arrow-left.svg";

const Register = () => {
  const [page, setPage] = useState(0);

  function showRegistrationPartOne() {
    return (
      <Main>
        <Title content="Cadastre-se para ajudar os pets a encontrar um lar!" />
        <Form>
          <ContainerInputs>
            <Input placeholder="Nome da Instituição" type="text" />
            <Input placeholder="Telefone" type="tel" />
          </ContainerInputs>
          <ContainerInputs>
            <Input placeholder="CNPJ" type="text" />
            <Input placeholder="Email" type="email" />
          </ContainerInputs>
          <ContainerInputs>
            <Input placeholder="Senha" type="password" />
            <Input placeholder="Digite novamente a senha" type="password" />
          </ContainerInputs>
          <Button type="button" check={true} onClick={() => setPage(1)}>
            Avançar
          </Button>
        </Form>
      </Main>
    );
  }

  function showRegistrationPartTwo() {
    return (
      <Main>
        <ContainerButtonBack>
          <ButtonBack onClick={() => setPage(0)}>
            <Image src={arrowLeft} /> Voltar
          </ButtonBack>
        </ContainerButtonBack>
        <Title content="Coloque o endereço da ong 😉" />
        <Form>
          <ContainerInputs>
            <Input placeholder="CEP" type="text" />
            <Input placeholder="Bairro" type="text" />
          </ContainerInputs>
          <ContainerInputs>
            <Input placeholder="Cidade" type="text" />
            <Input placeholder="Estado" type="text" />
          </ContainerInputs>

          <Button type="button" check={true} onClick={() => setPage(2)}>
            Avançar
          </Button>
        </Form>
      </Main>
    );
  }

  function showRegistrationPartThree() {
    return (
      <Main>
        <ContainerButtonBack>
          <ButtonBack onClick={() => setPage(1)}>
            <Image src={arrowLeft} /> Voltar
          </ButtonBack>
        </ContainerButtonBack>
        <Title content="Falta pouco! Estamos perto de finalizar 🐶" />
        <Form>
          <ContainerInputs>
            <Input placeholder="Coloque seu Instagram" type="text" />
            <Input placeholder="Coloque seu Facebook" type="text" />
          </ContainerInputs>

          <Button type="button" check={true} onClick={() => setPage(3)}>
            Avançar
          </Button>
        </Form>
      </Main>
    );
  }

  function showRegistrationPartFour() {
    return (
      <Main>
        <ContainerButtonBack>
          <ButtonBack onClick={() => setPage(2)}>
            <Image src={arrowLeft} /> Voltar
          </ButtonBack>
        </ContainerButtonBack>
        <Title content="Coloque seus dados bancários para receber doações!" />
        <Form>
          <ContainerInputs>
            <Input placeholder="Banco" type="text" />
            <Input placeholder="Agência" type="text" />
          </ContainerInputs>
          <ContainerInputs>
            <Input placeholder="Operação" type="text" />
            <Input placeholder="Conta" type="text" />
          </ContainerInputs>
          <ContainerInputs>
            <Input placeholder="Pix" type="text" />
          </ContainerInputs>

          <Button type="button" check={false}>
            Cadastrar
          </Button>
        </Form>
      </Main>
    );
  }

  function renderPage() {
    if (page === 0) {
      return showRegistrationPartOne();
    } else if (page === 1) {
      return showRegistrationPartTwo();
    } else if (page === 2) {
      return showRegistrationPartThree();
    } else if (page === 3) {
      return showRegistrationPartFour();
    }
  }

  return (
    <Background>
      <Header />
      {renderPage()}
    </Background>
  );
};

export default Register;

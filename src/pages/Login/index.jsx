import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Background, Header, Title } from "../../components";

import {
  Main,
  Input,
  Form,
  Button,
  ForgotPassword,
  Container,
  Image,
  ButtonBack,
} from "./styles";
import arrowLeft from "../../assets/arrow-left.svg";

const Login = () => {
  const [page, setPage] = useState(0);

  const navigate = useNavigate();

  function showLogin() {
    return (
      <Main>
        <Form onSubmit={handleLogin}>
          <Input placeholder="Email" type="email" />
          <Input placeholder="Senha" type="password" />

          <Button type="submit">Entrar</Button>
          <ForgotPassword onClick={() => setPage(1)}>
            Esqueceu a Senha?
          </ForgotPassword>
        </Form>
      </Main>
    );
  }

  function showForgotPassword() {
    return (
      <Main>
        <Container>
          <ButtonBack onClick={() => setPage(0)}>
            <Image src={arrowLeft} /> Voltar
          </ButtonBack>
        </Container>
        <Title content="Coloque seu email para enviarmos uma nova senha" />
        <Form>
          <Input placeholder="Email" type="email" />
          <Button type="submit">Enviar</Button>
        </Form>
      </Main>
    );
  }

  function renderPage() {
    if (page === 0) {
      return showLogin();
    } else if (page === 1) {
      return showForgotPassword();
    }
  }

  function handleLogin(e) {
    e.preventDefault();

    try {
      navigate("/profile");
    } catch (err) {
      alert("Falha no login, tente novamente.");
    }
  }

  return (
    <Background>
      <Header />
      {renderPage()}
    </Background>
  );
};

export default Login;

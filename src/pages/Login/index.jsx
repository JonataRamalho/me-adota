import { useContext, useState } from "react";
import {
  Background,
  ContainerContent,
  ContainerHeader,
  Header,
  Main,
  Title,
} from "../../components";

import {
  Input,
  Form,
  Button,
  ForgotPassword,
  Container,
  Image,
  ButtonBack,
} from "./styles";
import arrowLeft from "../../assets/arrow-left.svg";

import { ToastContainer } from "react-toastify";
import { GeneralProviderContext } from "../../features";

const Login = () => {
  const [page, setPage] = useState(0);
  const { login, setLogin, handleLogin, handleTokenToEmail } = useContext(
    GeneralProviderContext
  );

  function showLogin() {
    return (
      <Form onSubmit={handleLogin}>
        <Input
          placeholder="Email"
          type="email"
          value={login.email}
          onChange={(e) => setLogin({ ...login, email: e.target.value })}
        />
        <Input
          placeholder="Senha"
          type="password"
          value={login.password}
          onChange={(e) => setLogin({ ...login, password: e.target.value })}
        />

        <Button type="submit">Entrar</Button>
        <ForgotPassword onClick={() => setPage(1)}>
          Esqueceu a Senha?
        </ForgotPassword>
      </Form>
    );
  }

  function showForgotPassword() {
    return (
      <>
        <Container>
          <ButtonBack onClick={() => setPage(0)}>
            <Image src={arrowLeft} /> Voltar
          </ButtonBack>
        </Container>
        <Title content="Coloque seu email para enviarmos uma nova senha" />
        <Form onSubmit={handleTokenToEmail}>
          <Input
            placeholder="Email"
            type="email"
            value={login.email}
            onChange={(e) => setLogin({ ...login, email: e.target.value })}
          />
          <Button type="submit">Enviar</Button>
        </Form>
      </>
    );
  }

  function renderPage() {
    if (page === 0) {
      return showLogin();
    } else if (page === 1) {
      return showForgotPassword();
    }
  }

  return (
    <Background>
      <Main>
        <ContainerHeader>
          <Header type={0} />
        </ContainerHeader>
        <ContainerContent>{renderPage()}</ContainerContent>
      </Main>
      <ToastContainer />
    </Background>
  );
};

export default Login;

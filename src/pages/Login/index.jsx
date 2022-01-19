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

import { ToastContainer, toast } from "react-toastify";
import api from "../../services/api";

const Login = () => {
  const [page, setPage] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function showLogin() {
    return (
      <Main>
        <Form onSubmit={handleLogin}>
          <Input
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="Senha"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

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

  async function handleLogin(e) {
    e.preventDefault();

    const data = JSON.stringify({
      username: email,
      password: password,
    });

    try {
      const response = await api.post("/login", data, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Request-Headers": "Authorization",
        },
      });

      localStorage.setItem(
        "@storage_Token",
        JSON.stringify(response.headers.authorization)
      );

      getInstituion();

      navigate("/menu");
    } catch (err) {
      console.log(err);
      toast.error("Erro ao realizar login!", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  }

  async function getInstituion() {
    try {
      const response = await api.get(
        "/api/institution/username",
        { params: { username: email } },
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );

      localStorage.setItem(
        "@storage_Institution",
        JSON.stringify(response.data)
      );
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Background>
      <Header type={0} />
      {renderPage()}
      <ToastContainer />
    </Background>
  );
};

export default Login;

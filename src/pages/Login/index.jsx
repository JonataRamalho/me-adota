import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Background, ContainerContent, ContainerHeader, Header, Main, Title } from "../../components";

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

import { ToastContainer, toast } from "react-toastify";
import api from "../../services/api";
import { useMutation } from "react-query";

const Login = () => {
  const [page, setPage] = useState(0);
  const [email, setEmail] = useState("");
  const [emailToken, setEmailToken] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const { mutate } = useMutation(
    'send-token-email',
    async ({ email }) => {

      return api.post("/api/forgot_password?username=", email);
    },
    {
      onError: () => {
        toast.error("Erro ao enviar o token", {
          position: toast.POSITION.TOP_CENTER,
        });
      },
      onSuccess: (data) => {
        toast.success(data, {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    }
  );

  async function handleTokenToEmail(e) {
    e.preventDefault();

    try {

      const response = await api.post("/api/forgot_password?username=" + emailToken);


      if (response.status === 200) {
        toast.success(response.data, {
          position: toast.POSITION.TOP_CENTER,
        });

        setTimeout(() => {
          navigate("/recuperar-senha");
        }, 6000);
      }

    } catch (err) {
      toast.error("Erro ao enviar o token", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  }

  function showLogin() {
    return (
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
          <Input placeholder="Email" type="email" value={emailToken}
            onChange={(e) => setEmailToken(e.target.value)} />
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
      <Main>
        <ContainerHeader>
          <Header type={0} />
        </ContainerHeader>
        <ContainerContent>
          {renderPage()}
        </ContainerContent>
      </Main>
      <ToastContainer />
    </Background>
  );
};

export default Login;

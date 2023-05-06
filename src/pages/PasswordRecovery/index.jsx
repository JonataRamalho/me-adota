import { ToastContainer, toast } from "react-toastify";
import { Background, ContainerContent, ContainerHeader, Header, Main, Title } from "../../components";
import api from "../../services/api";
import { Button, Form, Input, } from "./styles";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const PassworRecovery = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

  const navigate = useNavigate();

  async function changePassword(e) {
    e.preventDefault();

    try {

      const response = await api.post(`/api/reset_password?username=${email}&password=${password}&token=${token}`);

      if (response.status === 200) {
        toast.success(response.data, {
          position: toast.POSITION.TOP_CENTER,

        });

        setTimeout(() => {
          navigate("/");
        }, 6000);

      }

    } catch (err) {
      toast.error("Erro ao alterar a senha", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  }


  return (
    <Background>
      <Main>
        <ContainerHeader>
          <Header type={0} />
        </ContainerHeader>
        <ContainerContent>
          <Title content="Recuperar a senha" />
          <Form onSubmit={changePassword}>
            <Input placeholder="Token" type="text" onChange={(e) => setToken(e.target.value)} />
            <Input placeholder="Email" type="email" onChange={(e) => setEmail(e.target.value)} />
            <Input placeholder="Senha" type="password" onChange={(e) => setPassword(e.target.value)} />
            <Input placeholder="Digite novamente a senha" type="password" />

            <Button type="submit">Enviar</Button>
          </Form>
        </ContainerContent>
      </Main>
      <ToastContainer />
    </Background >
  );
};

export default PassworRecovery;

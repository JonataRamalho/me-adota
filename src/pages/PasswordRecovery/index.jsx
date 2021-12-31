import { Background, Header, Title } from "../../components";
import { Button, Form, Input, Main } from "./styles";

const PassworRecovery = () => {
  return (
    <Background>
      <Header />
      <Main>
        <Title content="Recuperar a senha" />
        <Form>
          <Input placeholder="Token" type="text" />
          <Input placeholder="Email" type="email" />
          <Input placeholder="Senha" type="password" />
          <Input placeholder="Digite novamente a senha" type="password" />

          <Button>Enviar</Button>
        </Form>
      </Main>
    </Background>
  );
};

export default PassworRecovery;

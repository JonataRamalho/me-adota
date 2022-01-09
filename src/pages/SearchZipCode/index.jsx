import { Background, Header, Title } from "../../components";
import { Button, ContainerTile, Form, Input, Main } from "./styles";

const SearchZipCode = () => {
  return (
    <Background>
      <Header type={2} />
      <Main>
        <ContainerTile>
          <Title content="Precisamos do seu cep para facilitar a nossa pesquisa 😁" />
        </ContainerTile>
        <Form>
          <Input placeholder="Ex: 57084040" />
          <Button to="/search/pets">Pesquisar</Button>
        </Form>
      </Main>
    </Background>
  );
};

export default SearchZipCode;

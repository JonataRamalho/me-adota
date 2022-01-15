import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Background, Header, Title } from "../../components";
import { Button, ContainerTile, Form, Input, Main } from "./styles";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import cepApi from "cep-promise";

const SearchZipCode = () => {
  const [cepUser, setCepUser] = useState("");

  const navigate = useNavigate();

  async function getCep(e) {
    e.preventDefault();

    try {
      const address = await cepApi(cepUser);

      const { cep, state, city, neighborhood } = address;

      const dataAddress = {
        zip_code: cep,
        state,
        city,
        neighborhood,
      };

      localStorage.setItem("@storage_Address", JSON.stringify(dataAddress));

      navigate("/pesquisar/instituicoes");
    } catch (error) {
      toast.error("CEP não encontrado! ", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  }

  return (
    <Background>
      <Header type={2} />
      <Main>
        <ContainerTile>
          <Title content="Precisamos do seu cep para facilitar a nossa pesquisa 😁" />
        </ContainerTile>
        <Form onSubmit={getCep}>
          <Input
            placeholder="Ex: 57084040"
            value={cepUser}
            onChange={(e) => setCepUser(e.target.value)}
            maxLength={8}
          />
          <Button type="submit">Pesquisar</Button>
        </Form>
      </Main>
      <ToastContainer />
    </Background>
  );
};

export default SearchZipCode;

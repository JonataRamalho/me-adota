import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import { Background } from "../../components";
import {
  Button,
  ContainerButtonBack,
  ContainerPet,
  Image,
  ImagePet,
  Main,
  ButtonBack,
  ContainerImagePet,
  ContainerDescriptionPet,
  Name,
  Detail,
  ContainerAboutPet,
  Title,
  AboutPet,
  Container,
} from "./styles";

import arrowLeft from "../../assets/arrow-left.svg";
import modelo from "../../assets/catModelo.jpg";
import { ToastContainer, toast } from "react-toastify";

const Pet = () => {
  const [dataPet, setDataPet] = useState([]);
  const [personalities, setPersonalities] = useState([]);
  const { idPet, id } = useParams();

  useEffect(() => {
    getCat();
  }, []);

  async function getCat() {
    try {
      const response = await api.get(`/api/cat/${idPet}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      setDataPet(response.data);
      setPersonalities(response.data.personalities);
    } catch (error) {
      if (error.response.status === 404) {
        getDog();
      } else {
        toast.error("Erro ao obter o pet :(", {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    }
  }

  async function getDog() {
    try {
      const response = await api.get(`/api/dog/${idPet}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      setDataPet(response.data);
      setPersonalities(response.data.personalities);
    } catch (error) {
      toast.error("Erro ao obter o pet :(", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  }

  return (
    <Background>
      <Main>
        <ContainerButtonBack>
          <ButtonBack to={`/pesquisar/instituicoes/${id}/pets`}>
            <Image src={arrowLeft} /> Voltar aos pets
          </ButtonBack>
        </ContainerButtonBack>
        <Container>
          <ContainerPet>
            <ContainerImagePet>
              <ImagePet src={`http://localhost:80/${dataPet.imagePath}`} />
              <Button to={`/pesquisar/instituicoes/${id}/pets/${idPet}/${id}`}>
                Entre em Contato
              </Button>
            </ContainerImagePet>
            <ContainerDescriptionPet>
              <Name>{dataPet.name}</Name>
              <Detail>
                {dataPet.age} - {dataPet.gender} -{" "}
                {dataPet === "s" ? "Castrado" : "Não castrado"}
              </Detail>
              <ContainerAboutPet>
                <Title>Sobre o pet</Title>
                <AboutPet>{dataPet.about}</AboutPet>
              </ContainerAboutPet>
              <ContainerAboutPet>
                <Title>Características</Title>
                <AboutPet>
                  {!!dataPet.size_dog ? `${dataPet.size_dog}, ` : ""}
                  {dataPet.color}
                  {personalities.map((item, index) => {
                    return `, ${item.name}`;
                  })}
                </AboutPet>
              </ContainerAboutPet>
            </ContainerDescriptionPet>
          </ContainerPet>
        </Container>
      </Main>
      <ToastContainer />
    </Background>
  );
};

export default Pet;

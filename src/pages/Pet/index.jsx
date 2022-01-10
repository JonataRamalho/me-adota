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

const Pet = () => {
  return (
    <Background>
      <Main>
        <ContainerButtonBack>
          <ButtonBack to="/pesquisar/pets">
            <Image src={arrowLeft} /> Voltar aos pets
          </ButtonBack>
        </ContainerButtonBack>
        <Container>
          <ContainerPet>
            <ContainerImagePet>
              <ImagePet src={modelo} />
              <Button to="/pesquisar/pets/pet/instituicao">
                Entre em Contato
              </Button>
            </ContainerImagePet>
            <ContainerDescriptionPet>
              <Name>Apollo</Name>
              <Detail>Adulto - Macho - Castrado</Detail>
              <ContainerAboutPet>
                <Title>Sobre o pet</Title>
                <AboutPet>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </AboutPet>
              </ContainerAboutPet>
              <ContainerAboutPet>
                <Title>Características</Title>
                <AboutPet>Cinza com Branco, Amigo, Carinhoso </AboutPet>
              </ContainerAboutPet>
            </ContainerDescriptionPet>
          </ContainerPet>
        </Container>
      </Main>
    </Background>
  );
};

export default Pet;

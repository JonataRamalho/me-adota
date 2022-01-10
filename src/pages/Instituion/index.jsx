import { Background } from "../../components";
import {
  ButtonBack,
  Container,
  ContainerAboutInstituion,
  ContainerButtonBack,
  ContainerDetail,
  ContainerDetails,
  ContainerInformation,
  ContainerInstituion,
  Image,
  Information,
  Main,
  Name,
  Social,
  Title,
} from "./styles";

import arrowLeft from "../../assets/arrow-left.svg";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";

const Instituion = () => {
  return (
    <Background>
      <Main>
        <ContainerButtonBack>
          <ButtonBack to="/pesquisar/pets/pet">
            <Image src={arrowLeft} /> Voltar ao pet
          </ButtonBack>
        </ContainerButtonBack>

        <Container>
          <ContainerInstituion>
            <Name>Ong Me Adota</Name>
            <ContainerInformation>
              <ContainerAboutInstituion>
                <Title>Endereço</Title>
                <Information>
                  Rua A-40 (Cj Benedito Bentes I) - Benedito Bentes - Maceió/AL
                </Information>
              </ContainerAboutInstituion>
              <ContainerAboutInstituion>
                <Title>Faça uma doação</Title>
                <ContainerDetails>
                  <ContainerDetail>
                    <Information>Banco - Caixa</Information>
                    <Information>1033 000 00000</Information>
                  </ContainerDetail>
                  <ContainerDetail>
                    <Information>Pix</Information>
                    <Information>00000000</Information>
                  </ContainerDetail>
                </ContainerDetails>
              </ContainerAboutInstituion>
              <ContainerAboutInstituion>
                <Title>Redes Sociais</Title>
                <ContainerDetails>
                  <ContainerDetail>
                    <Social href="https://instagram.com" target="_blank">
                      <Image src={instagram} />
                    </Social>
                  </ContainerDetail>
                  <ContainerDetail>
                    <Social href="https://facebook.com" target="_blank">
                      <Image src={facebook} />
                    </Social>
                  </ContainerDetail>
                </ContainerDetails>
              </ContainerAboutInstituion>
              <ContainerAboutInstituion>
                <Title>Contatos</Title>
                <ContainerDetails>
                  <ContainerDetail>
                    <Information>ongTeste@gmail.com</Information>
                    <Information>82 98888-8888</Information>
                  </ContainerDetail>
                </ContainerDetails>
              </ContainerAboutInstituion>
            </ContainerInformation>
          </ContainerInstituion>
        </Container>
      </Main>
    </Background>
  );
};

export default Instituion;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";
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
import { ToastContainer, toast } from "react-toastify";

const Instituion = () => {
  const [dataInstitution, setDataInstitution] = useState([]);
  const [dataAccount, setDataAccount] = useState([]);
  const { id, idPet } = useParams();

  useEffect(() => {
    getInstitution();
  }, []);

  async function getInstitution() {
    try {
      const response = await api.get(`/api/institution/${id}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      setDataInstitution(response.data);
      setDataAccount(response.data.account);
    } catch (error) {
      toast.error("Erro ao obter a instituição", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  }

  return (
    <Background>
      <Main>
        <ContainerButtonBack>
          <ButtonBack to={`/pesquisar/instituicoes/${id}/pets/${idPet}`}>
            <Image src={arrowLeft} /> Voltar ao pet
          </ButtonBack>
        </ContainerButtonBack>

        <Container>
          <ContainerInstituion>
            <Name>{dataInstitution.name}</Name>
            <ContainerInformation>
              <ContainerAboutInstituion>
                <Title>Endereço</Title>
                <Information>
                  {dataInstitution.place} - {dataInstitution.district} -{" "}
                  {`${dataInstitution.city}/${dataInstitution.state}`}
                </Information>
              </ContainerAboutInstituion>
              <ContainerAboutInstituion>
                <Title>Faça uma doação</Title>
                <ContainerDetails>
                  <ContainerDetail>
                    <Information>Banco - {dataAccount.bank}</Information>
                    <Information>{`${dataAccount.agency} ${dataAccount.operation} ${dataAccount.number}`}</Information>
                  </ContainerDetail>
                  <ContainerDetail>
                    <Information>Pix</Information>
                    <Information>{dataAccount.pix}</Information>
                  </ContainerDetail>
                </ContainerDetails>
              </ContainerAboutInstituion>
              <ContainerAboutInstituion>
                <Title>Redes Sociais</Title>
                <ContainerDetails>
                  <ContainerDetail>
                    <Social href={dataInstitution.instagram} target="_blank">
                      <Image src={instagram} />
                    </Social>
                  </ContainerDetail>
                  <ContainerDetail>
                    <Social href={dataInstitution.facebook} target="_blank">
                      <Image src={facebook} />
                    </Social>
                  </ContainerDetail>
                </ContainerDetails>
              </ContainerAboutInstituion>
              <ContainerAboutInstituion>
                <Title>Contatos</Title>
                <ContainerDetails>
                  <ContainerDetail>
                    <Information>{dataInstitution.username}</Information>
                    <Information>{dataInstitution.contact}</Information>
                  </ContainerDetail>
                </ContainerDetails>
              </ContainerAboutInstituion>
            </ContainerInformation>
          </ContainerInstituion>
        </Container>
      </Main>
      <ToastContainer />
    </Background>
  );
};

export default Instituion;

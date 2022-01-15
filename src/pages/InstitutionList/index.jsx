import { useEffect, useState } from "react";
import api from "../../services/api";
import { Background, Title } from "../../components";
import {
  ButtonBackMenu,
  Button,
  ContainerInstitutionsList,
  ContainerButtonBack,
  ContainerButton,
  ContainerInstitutions,
  ContainerInstitution,
  Detail,
  Image,
  Main,
  Name,
  ContainerPage,
  Number,
} from "./styles";

import arrowLeft from "../../assets/arrow-left.svg";
import { ToastContainer, toast } from "react-toastify";

const InstitutionList = () => {
  const [dataInstitution, setDataInstitution] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState("");

  useEffect(() => {
    const data = localStorage.getItem("@storage_Address");

    const { zip_code } = JSON.parse(data);

    getInstitution(zip_code);
  }, []);

  async function getInstitution(cep) {
    try {
      const response = await api.get(
        "/api/institution/zip_code",
        { params: { zip_code: cep, page: page } },
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );

      setDataInstitution(response.data.content);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      toast.error("Erro ao obter as instituições :(", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  }

  function next() {
    if (page < totalPages - 1) {
      setPage(page + 1);
    } else {
      toast.error("Opa! Não tem mais instituições", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  }

  function back() {
    if (page > 0) {
      setPage(page - 1);
    }
  }

  return (
    <Background>
      <Main>
        <ContainerButtonBack>
          <ButtonBackMenu to="/pesquisar">
            <Image src={arrowLeft} /> Voltar para pesquisar cep
          </ButtonBackMenu>
        </ContainerButtonBack>

        <Title content="Instituições próxima a você" />
        <ContainerInstitutionsList>
          <ContainerInstitutions>
            {dataInstitution.map((item, index) => {
              return (
                <ContainerInstitution
                  key={index}
                  to="/pesquisar/instituicoes/pets"
                >
                  <Name>{item.name}</Name>
                  <Detail>
                    {item.place} - {item.district}{" "}
                  </Detail>
                </ContainerInstitution>
              );
            })}
          </ContainerInstitutions>
        </ContainerInstitutionsList>
        <ContainerPage>
          <ContainerButton>
            <Button onClick={() => back()}>Anterior</Button>
            <Number>{page}</Number>
            <Button onClick={() => next()}> Próximo</Button>
          </ContainerButton>
        </ContainerPage>
      </Main>
      <ToastContainer />
    </Background>
  );
};

export default InstitutionList;

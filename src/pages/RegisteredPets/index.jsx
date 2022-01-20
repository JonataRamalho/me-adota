import { useEffect, useState } from "react";
import api from "../../services/api";
import { ToastContainer, toast } from "react-toastify";
import { Background, Title } from "../../components";
import {
  Button,
  ButtonBackMenu,
  ButtonNext,
  ButtonPet,
  ContainerButton,
  ContainerButtonBack,
  ContainerButtonNext,
  ContainerDetails,
  ContainerPage,
  ContainerPet,
  ContainerPets,
  ContainerRegisteredPets,
  ContainerSelectedPet,
  Detail,
  Image,
  ImagePet,
  Main,
  Name,
  Number,
} from "./styles";

import arrowLeft from "../../assets/arrow-left.svg";
import modelo from "../../assets/catModelo.jpg";

const RegisteredPets = () => {
  const [selectedTodosPets, setSelectedTodosPets] = useState(true);
  const [selectedCachorro, setSelectedCachorro] = useState(false);
  const [selectedGato, setSelectedGato] = useState(false);
  const [idInstitution, setIdInstitution] = useState("");
  const [dataAnimals, setDataAnimals] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState("");

  useEffect(() => {
    try {
      const data = localStorage.getItem("@storage_Institution");

      const { id } = JSON.parse(data);

      setIdInstitution(id);
      getAnimals(id);
    } catch (error) {}
  }, []);

  useEffect(() => {
    if (selectedTodosPets) {
      getAnimals();
    } else if (selectedCachorro) {
      setDataAnimals([]);
      setPage(0);
      getDogs();
    } else if (selectedGato) {
      setDataAnimals([]);
      setPage(0);
      getCats();
    }
  }, [selectedCachorro, selectedCachorro, selectedGato, page]);

  function changeButtonSelectedAllPets() {
    setSelectedTodosPets(true);
    setSelectedCachorro(false);
    setSelectedGato(false);
  }

  function changeSelectedButtonDog() {
    setSelectedCachorro(true);
    setSelectedTodosPets(false);
    setSelectedGato(false);
  }

  function changeSelectedButtonCat() {
    setSelectedGato(true);
    setSelectedTodosPets(false);
    setSelectedCachorro(false);
  }

  async function getAnimals(id = idInstitution) {
    if (id !== "") {
      try {
        const response = await api.get(
          "/api/animals/institution",
          { params: { id: id, page: page } },
          {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          }
        );

        setDataAnimals(response.data.content);
        setTotalPages(response.data.totalPages);
      } catch (error) {
        toast.error("Erro ao obter os pets :(", {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    }
  }

  async function getCats() {
    try {
      const response = await api.get(
        "/api/cats/institution",
        { params: { id: idInstitution, page: page } },
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );

      setDataAnimals(response.data.content);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      toast.error("Erro ao obter os gatos :(", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  }

  async function getDogs() {
    try {
      const response = await api.get(
        "/api/dogs/institution",
        { params: { id: idInstitution, page: page } },
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );

      setDataAnimals(response.data.content);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      toast.error("Erro ao obter os cachorros :(", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  }

  function next() {
    if (page < totalPages - 1) {
      setPage(page + 1);
    } else {
      toast.error("Opa! Não tem mais pets", {
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
          <ButtonBackMenu to="/menu">
            <Image src={arrowLeft} /> Voltar ao menu
          </ButtonBackMenu>
        </ContainerButtonBack>

        <Title content="Pets cadastrados" />

        <ContainerRegisteredPets>
          <ContainerSelectedPet>
            <ButtonPet
              onClick={() => changeButtonSelectedAllPets()}
              selected={selectedTodosPets}
            >
              Todos os pets
            </ButtonPet>
            <ButtonPet
              onClick={() => changeSelectedButtonDog()}
              selected={selectedCachorro}
            >
              Cachorro
            </ButtonPet>
            <ButtonPet
              onClick={() => changeSelectedButtonCat()}
              selected={selectedGato}
            >
              Gato
            </ButtonPet>
          </ContainerSelectedPet>
          <ContainerPets>
            {dataAnimals.map((item, index) => {
              return (
                <ContainerPet key={index} to="/menu/pets/pet">
                  <ImagePet src={`http://localhost:80/${item.imagePath}`} />
                  <ContainerDetails>
                    <Name>{item.name}</Name>
                    <Detail>
                      {item.age} - {item.gender} -{" "}
                      {item.castration === "s" ? "Castrado" : "Não castrado"}
                    </Detail>
                  </ContainerDetails>
                </ContainerPet>
              );
            })}
          </ContainerPets>
        </ContainerRegisteredPets>
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

export default RegisteredPets;

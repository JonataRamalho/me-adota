import { useEffect, useState } from "react";
import api from "../../services/api";
import { Background, Title } from "../../components";
import {
  ButtonBackMenu,
  Button,
  ButtonPet,
  Checkbox,
  ContainerAdoptionPets,
  ContainerButtonBack,
  ContainerButton,
  ContainerCheckbox,
  ContainerDetails,
  ContainerPet,
  ContainerPets,
  ContainerSearch,
  ContainerSearchPet,
  ContainerSelectedPet,
  Detail,
  Image,
  ImagePet,
  Input,
  Label,
  Main,
  Name,
  TitleSearch,
  ContainerPage,
  Number,
} from "./styles";
import Modal from "@mui/material/Modal";

import arrowLeft from "../../assets/arrow-left.svg";
import modelo from "../../assets/catModelo.jpg";
import { ToastContainer, toast } from "react-toastify";

const AdoptionPets = () => {
  const [selectedTodosPets, setSelectedTodosPets] = useState(true);
  const [selectedCachorro, setSelectedCachorro] = useState(false);
  const [selectedGato, setSelectedGato] = useState(false);
  const [open, setOpen] = useState(false);
  const [idInstitution, setIdInstitution] = useState("");
  const [dataAnimals, setDataAnimals] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState("");

  useEffect(() => {
    const data = localStorage.getItem("@storage_Institution");

    const { id } = JSON.parse(data);

    setIdInstitution(id);
    getAnimals(id);
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

  function handleOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
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
          <ButtonBackMenu to="/pesquisar/instituicoes">
            <Image src={arrowLeft} /> Voltar para pesquisar cep
          </ButtonBackMenu>

          <Input placeholder="Ex: Cinza" onClick={handleOpen} />
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <ContainerSearch>
              <Input
                placeholder="Ex: Cinza"
                onClick={handleOpen}
                modal={true}
              />
              <ContainerSearchPet>
                <TitleSearch>Qual é o pet?</TitleSearch>
                <ContainerCheckbox>
                  <Label>
                    <Checkbox type="checkbox" />
                    Cachoro
                  </Label>
                  <Label>
                    <Checkbox type="checkbox" />
                    Gato
                  </Label>
                </ContainerCheckbox>
              </ContainerSearchPet>
              <ContainerSearchPet>
                <TitleSearch>Porte?</TitleSearch>
                <ContainerCheckbox>
                  <Label>
                    <Checkbox type="checkbox" />
                    Grande
                  </Label>
                  <Label>
                    <Checkbox type="checkbox" />
                    Médio
                  </Label>
                  <Label>
                    <Checkbox type="checkbox" />
                    Pequeno
                  </Label>
                </ContainerCheckbox>
              </ContainerSearchPet>
              <ContainerSearchPet>
                <TitleSearch>Genêro?</TitleSearch>
                <ContainerCheckbox>
                  <Label>
                    <Checkbox type="checkbox" />
                    Macho
                  </Label>
                  <Label>
                    <Checkbox type="checkbox" />
                    Fêmea
                  </Label>
                </ContainerCheckbox>
              </ContainerSearchPet>
              <ContainerSearchPet>
                <TitleSearch>Castrado?</TitleSearch>
                <ContainerCheckbox>
                  <Label>
                    <Checkbox type="checkbox" />
                    Sim
                  </Label>
                  <Label>
                    <Checkbox type="checkbox" />
                    Não
                  </Label>
                </ContainerCheckbox>
              </ContainerSearchPet>
              <ContainerSearchPet>
                <TitleSearch>Faixa Etária?</TitleSearch>
                <ContainerCheckbox>
                  <Label>
                    <Checkbox type="checkbox" />
                    Adulto
                  </Label>
                  <Label>
                    <Checkbox type="checkbox" />
                    Filhote
                  </Label>
                  <Label>
                    <Checkbox type="checkbox" />
                    Jovem
                  </Label>
                  <Label>
                    <Checkbox type="checkbox" />
                    Sênior
                  </Label>
                </ContainerCheckbox>
              </ContainerSearchPet>
              <ContainerSearchPet button={true}>
                <Button>Pesquisar</Button>
              </ContainerSearchPet>
            </ContainerSearch>
          </Modal>
        </ContainerButtonBack>

        <Title content="Pets para adoção" />

        <ContainerAdoptionPets>
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
                <ContainerPet key={index} to="/pesquisar/pets/pet">
                  <ImagePet src={modelo} />
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
        </ContainerAdoptionPets>
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

export default AdoptionPets;

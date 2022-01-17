import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import { Background, Title } from "../../components";
import {
  ButtonBackMenu,
  Button,
  ButtonPet,
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
  Main,
  Name,
  TitleSearch,
  ContainerPage,
  Number,
  ButtonModal,
  ButtonSearch,
  ControlLabel,
} from "./styles";
import {
  Modal,
  Radio,
  RadioGroup,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";

import arrowLeft from "../../assets/arrow-left.svg";
import modelo from "../../assets/catModelo.jpg";
import { ToastContainer, toast } from "react-toastify";

const AdoptionPets = () => {
  const [selectedTodosPets, setSelectedTodosPets] = useState(true);
  const [selectedCachorro, setSelectedCachorro] = useState(false);
  const [selectedGato, setSelectedGato] = useState(false);
  const [open, setOpen] = useState(false);
  const [dataAnimals, setDataAnimals] = useState([]);
  const [page, setPage] = useState(0);
  const [pageSearch, setPageSearch] = useState(1);
  const [totalPages, setTotalPages] = useState("");
  const [search, setSearch] = useState(false);
  const [colorPet, setColorPet] = useState([]);
  const [color, setColor] = useState("");
  const [gender, setGender] = useState("");
  const [port, setPort] = useState("");
  const [castration, setCastration] = useState("");
  const [age, setAge] = useState("");

  const { id } = useParams();

  let colorDogs = [
    { value: "Amarelo", text: "Amarelo" },
    { value: "Branco", text: "Branco" },
    { value: "Bicolor", text: "Bicolor" },
    { value: "Chocolate", text: "Chocolate" },
    { value: "Cinza", text: "Cinza" },
    { value: "Creme", text: "Creme" },
    { value: "Dourado", text: "Dourado" },
    { value: "Ruivo", text: "Ruivo" },
    { value: "Marrom", text: "Marrom" },
    { value: "Preto", text: "Preto" },
  ];

  let colorCat = [
    { value: "Bege", text: "Bege" },
    { value: "Branco", text: "Branco" },
    { value: "Bicolor", text: "Bicolor" },
    { value: "Cinza", text: "Cinza" },
    { value: "Creme", text: "Creme" },
    { value: "Laranja", text: "Laranja" },
    { value: "Marrom", text: "Marrom" },
    { value: "Preto", text: "Preto" },
    { value: "Tricolor", text: "Tricolor" },
  ];

  useEffect(() => {
    getAnimals();
  }, []);

  useEffect(() => {
    if (selectedTodosPets && search !== true) {
      getAnimals();
    } else if (selectedCachorro && search !== true) {
      setDataAnimals([]);
      // setPage(0);

      getDogs();
    } else if (selectedGato && search !== true) {
      setDataAnimals([]);
      // setPage(0);
      getCats();
    } else if (search) {
      if (selectedTodosPets) {
        setDataAnimals([]);
        // setPage(0);
        getAnimalsSearch();
      } else if (selectedCachorro) {
        getDogsSearch();
      } else if (selectedGato) {
        getCatsSearch();
      }
    }
  }, [selectedCachorro, selectedCachorro, selectedGato, page, search]);

  useEffect(() => {
    if (selectedCachorro) {
      setColorPet(colorDogs);
    } else if (selectedGato) {
      setColorPet(colorCat);
    }
  }, [selectedCachorro, selectedGato]);

  function changeButtonSelectedAllPets() {
    setSelectedTodosPets(true);
    setSelectedCachorro(false);
    setSelectedGato(false);
    setSearch(false);
  }

  function changeSelectedButtonDog() {
    setSelectedCachorro(true);
    setSelectedTodosPets(false);
    setSelectedGato(false);
    setSearch(false);
  }

  function changeSelectedButtonCat() {
    setSelectedGato(true);
    setSelectedTodosPets(false);
    setSelectedCachorro(false);
    setSearch(false);
  }

  function handleOpen() {
    setOpen(true);
    setSelectedTodosPets(false);
    setSelectedGato(false);
    setSelectedCachorro(false);
    setPort("");
    setColor("");
    setGender("");
    setCastration("");
    setAge("");
    setSearch(false);
  }

  function handleClose() {
    if (selectedGato !== true && selectedCachorro !== true) {
      setSelectedTodosPets(true);
      getAnimals();
    }
    setOpen(false);
  }

  async function getAnimals() {
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
        { params: { id: id, page: page } },
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
        { params: { id: id, page: page } },
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
    if (search) {
      if (pageSearch < totalPages - 1) {
        setPageSearch(pageSearch + 1);
      } else {
        toast.error("Opa! Não tem mais pets", {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    } else {
      if (page < totalPages - 1) {
        setPage(page + 1);
      } else {
        toast.error("Opa! Não tem mais pets", {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    }
  }

  function back() {
    if (search) {
      if (pageSearch > 1) {
        setPageSearch(pageSearch - 1);
      }
    } else {
      if (page > 0) {
        setPage(page - 1);
      }
    }
  }

  function handleSearch() {
    setOpen(false);

    setSearch(true);

    if (selectedCachorro === false && selectedGato === false) {
      setSelectedTodosPets(true);
      setSelectedCachorro(false);
      setSelectedGato(false);
    } else if (selectedCachorro === true) {
      setSelectedTodosPets(false);
      setSelectedGato(false);
    } else if (selectedGato === true) {
      setSelectedTodosPets(false);
      setSelectedCachorro(false);
    }
  }

  async function getAnimalsSearch() {
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

  async function getCatsSearch() {
    try {
      const response = await api.get(
        "/api/cats/find",
        {
          params: {
            color: color,
            gender: gender,
            castration: castration,
            age: age,
            page: pageSearch,
          },
        },
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

  async function getDogsSearch() {
    try {
      const response = await api.get(
        "/api/dogs/find",
        {
          params: {
            color: color,
            gender: gender,
            castration: castration,
            age: age,
            page: pageSearch,
            size_dog: port,
          },
        },
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

  return (
    <Background>
      <Main>
        <ContainerButtonBack>
          <ButtonBackMenu to="/pesquisar/instituicoes">
            <Image src={arrowLeft} /> Voltar para pesquisar cep
          </ButtonBackMenu>

          <ButtonModal onClick={handleOpen}>Pesquise seu pet</ButtonModal>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <ContainerSearch>
              <ContainerSearchPet>
                <TitleSearch>Qual é o pet?</TitleSearch>
                <ContainerCheckbox>
                  <RadioGroup
                    row
                    aria-label="pet"
                    defaultValue=""
                    name="radio-buttons-group"
                  >
                    <ControlLabel
                      value="cachorro"
                      control={
                        <Radio
                          size="small"
                          onChange={() => {
                            setSelectedCachorro(true);
                            setSelectedGato(false);
                          }}
                        />
                      }
                      label="Cachorro"
                    />
                    <ControlLabel
                      value="gato"
                      control={
                        <Radio
                          size="small"
                          onChange={() => {
                            setSelectedCachorro(false);
                            setSelectedGato(true);
                          }}
                        />
                      }
                      label="Gato"
                    />
                  </RadioGroup>
                </ContainerCheckbox>
              </ContainerSearchPet>

              {selectedGato ? (
                <></>
              ) : (
                <ContainerSearchPet>
                  <TitleSearch>Porte?</TitleSearch>
                  <ContainerCheckbox>
                    <RadioGroup
                      row
                      aria-label="port"
                      defaultValue=""
                      name="radio-buttons-group"
                    >
                      <ControlLabel
                        value="grande"
                        control={
                          <Radio
                            size="small"
                            onChange={(e) => {
                              setPort(e.target.value);
                            }}
                          />
                        }
                        label="Grande"
                      />
                      <ControlLabel
                        value="medio"
                        control={
                          <Radio
                            size="small"
                            onChange={(e) => {
                              setPort(e.target.value);
                            }}
                          />
                        }
                        label="Médio"
                      />
                      <ControlLabel
                        value="pequeno"
                        control={
                          <Radio
                            size="small"
                            onChange={(e) => {
                              setPort(e.target.value);
                            }}
                          />
                        }
                        label="Pequeno"
                      />
                    </RadioGroup>
                  </ContainerCheckbox>
                </ContainerSearchPet>
              )}
              {selectedTodosPets === false &&
              selectedGato === false &&
              selectedCachorro === false ? (
                <></>
              ) : (
                <ContainerSearchPet>
                  <TitleSearch>Cor?</TitleSearch>
                  <ContainerCheckbox>
                    <FormControl sx={{ m: 1, minWidth: 325 }}>
                      <Select
                        labelId="color"
                        id="color"
                        displayEmpty
                        defaultValue=""
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                      >
                        {colorPet.map((item, index) => {
                          return (
                            <MenuItem key={item.value} value={item.value}>
                              {item.text}
                            </MenuItem>
                          );
                        })}
                      </Select>
                    </FormControl>
                  </ContainerCheckbox>
                </ContainerSearchPet>
              )}

              <ContainerSearchPet>
                <TitleSearch>Genêro?</TitleSearch>
                <ContainerCheckbox>
                  <RadioGroup
                    row
                    aria-label="gender"
                    defaultValue=""
                    name="radio-buttons-group"
                  >
                    <ControlLabel
                      value="macho"
                      control={
                        <Radio
                          size="small"
                          onChange={(e) => {
                            setGender(e.target.value);
                          }}
                        />
                      }
                      label="Macho"
                    />
                    <ControlLabel
                      value="femea"
                      control={
                        <Radio
                          size="small"
                          onChange={(e) => {
                            setGender(e.target.value);
                          }}
                        />
                      }
                      label="Fêmea"
                    />
                  </RadioGroup>
                </ContainerCheckbox>
              </ContainerSearchPet>
              <ContainerSearchPet>
                <TitleSearch>Castrado?</TitleSearch>
                <ContainerCheckbox>
                  <RadioGroup
                    row
                    aria-label="castrated"
                    defaultValue=""
                    name="radio-buttons-group"
                  >
                    <ControlLabel
                      value="s"
                      control={
                        <Radio
                          size="small"
                          onChange={(e) => {
                            setCastration(e.target.value);
                          }}
                        />
                      }
                      label="Sim"
                    />
                    <ControlLabel
                      value="n"
                      control={
                        <Radio
                          size="small"
                          onChange={(e) => {
                            setCastration(e.target.value);
                          }}
                        />
                      }
                      label="Não"
                    />
                  </RadioGroup>
                </ContainerCheckbox>
              </ContainerSearchPet>
              <ContainerSearchPet>
                <TitleSearch>Faixa Etária?</TitleSearch>
                <ContainerCheckbox>
                  <RadioGroup
                    row
                    aria-label="age"
                    defaultValue=""
                    name="radio-buttons-group"
                  >
                    <ControlLabel
                      value="adulto"
                      control={
                        <Radio
                          size="small"
                          onChange={(e) => {
                            setAge(e.target.value);
                          }}
                        />
                      }
                      label="Adulto"
                    />
                    <ControlLabel
                      value="jovem"
                      control={
                        <Radio
                          size="small"
                          onChange={(e) => {
                            setAge(e.target.value);
                          }}
                        />
                      }
                      label="Jovem"
                    />
                    <ControlLabel
                      value="senior"
                      control={
                        <Radio
                          size="small"
                          onChange={(e) => {
                            setAge(e.target.value);
                          }}
                        />
                      }
                      label="Sênior"
                    />
                  </RadioGroup>
                </ContainerCheckbox>
              </ContainerSearchPet>
              <ContainerSearchPet button={true}>
                <ButtonSearch onClick={handleSearch}>Pesquisar</ButtonSearch>
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
                <ContainerPet
                  key={index}
                  to={`/pesquisar/instituicoes/${id}/pets/${item.id}`}
                >
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
            <Number>{search ? pageSearch : page}</Number>
            <Button onClick={() => next()}> Próximo</Button>
          </ContainerButton>
        </ContainerPage>
      </Main>
      <ToastContainer />
    </Background>
  );
};

export default AdoptionPets;

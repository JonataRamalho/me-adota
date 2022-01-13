import { useEffect, useState } from "react";
import api from "../../services/api";
import { ToastContainer, toast } from "react-toastify";
import { Background, Title } from "../../components";
import {
  ButtonBackMenu,
  ButtonNext,
  ButtonPet,
  ContainerButtonBack,
  ContainerButtonNext,
  ContainerDetails,
  ContainerPet,
  ContainerPets,
  ContainerRegisteredPets,
  ContainerSelectedPet,
  Detail,
  Image,
  ImagePet,
  Main,
  Name,
} from "./styles";

import arrowLeft from "../../assets/arrow-left.svg";
import modelo from "../../assets/catModelo.jpg";

const RegisteredPets = () => {
  const [selectedTodosPets, setSelectedTodosPets] = useState(true);
  const [selectedCachorro, setSelectedCachorro] = useState(false);
  const [selectedGato, setSelectedGato] = useState(false);
  const [idInstituion, setIdInstituion] = useState("");
  const [dataAnimals, setDataAnimals] = useState([]);
  const [next, setNext] = useState("");

  useEffect(() => {
    const data = localStorage.getItem("@storage_Institution");

    const { id } = JSON.parse(data);

    setIdInstituion(id);
    // console.log(id);
  }, []);

  useEffect(() => {
    // if (selectedTodosPets) {
    getAnimals();
    // }
  }, []);

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

  async function getAnimals() {
    // console.log("Pets all");
    try {
      const response = await api.get(
        "/api/animals/institution",
        { params: { id: idInstituion } },
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );

      setDataAnimals(response.data.content);
    } catch (error) {
      toast.error("Erro ao obter os pets :(", {
        position: toast.POSITION.TOP_CENTER,
      });
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
          <ContainerButtonNext>
            <ButtonNext>Próximo</ButtonNext>
          </ContainerButtonNext>
        </ContainerRegisteredPets>
      </Main>
      <ToastContainer />
    </Background>
  );
};

export default RegisteredPets;

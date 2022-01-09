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

import { useState } from "react";

const RegisteredPets = () => {
  const [selectedTodosPets, setSelectedTodosPets] = useState(true);
  const [selectedCachorro, setSelectedCachorro] = useState(false);
  const [selectedGato, setSelectedGato] = useState(false);

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

  return (
    <Background>
      <Main>
        <ContainerButtonBack>
          <ButtonBackMenu to="/options">
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
            <ContainerPet to="/petsAdoption/pet">
              <ImagePet src={modelo} />
              <ContainerDetails>
                <Name>Apollo</Name>
                <Detail>Adulto - Macho - Castrado</Detail>
              </ContainerDetails>
            </ContainerPet>
            <ContainerPet to="/petsAdoption/pet">
              <ImagePet src={modelo} />
              <ContainerDetails>
                <Name>Apollo</Name>
                <Detail>Adulto - Macho - Castrado</Detail>
              </ContainerDetails>
            </ContainerPet>
            <ContainerPet to="/petsAdoption/pet">
              <ImagePet src={modelo} />
              <ContainerDetails>
                <Name>Apollo</Name>
                <Detail>Adulto - Macho - Castrado</Detail>
              </ContainerDetails>
            </ContainerPet>
            <ContainerPet to="/petsAdoption/pet">
              <ImagePet src={modelo} />
              <ContainerDetails>
                <Name>Apollo</Name>
                <Detail>Adulto - Macho - Castrado</Detail>
              </ContainerDetails>
            </ContainerPet>
            <ContainerPet to="/petsAdoption/pet">
              <ImagePet src={modelo} />
              <ContainerDetails>
                <Name>Apollo</Name>
                <Detail>Adulto - Macho - Castrado</Detail>
              </ContainerDetails>
            </ContainerPet>
            <ContainerPet to="/petsAdoption/pet">
              <ImagePet src={modelo} />
              <ContainerDetails>
                <Name>Apollo</Name>
                <Detail>Adulto - Macho - Castrado</Detail>
              </ContainerDetails>
            </ContainerPet>
            <ContainerPet to="/petsAdoption/pet">
              <ImagePet src={modelo} />
              <ContainerDetails>
                <Name>Apollo</Name>
                <Detail>Adulto - Macho - Castrado</Detail>
              </ContainerDetails>
            </ContainerPet>
            <ContainerPet to="/petsAdoption/pet">
              <ImagePet src={modelo} />
              <ContainerDetails>
                <Name>Apollo</Name>
                <Detail>Adulto - Macho - Castrado</Detail>
              </ContainerDetails>
            </ContainerPet>
            <ContainerPet to="/petsAdoption/pet">
              <ImagePet src={modelo} />
              <ContainerDetails>
                <Name>Apollo</Name>
                <Detail>Adulto - Macho - Castrado</Detail>
              </ContainerDetails>
            </ContainerPet>
            <ContainerPet to="/petsAdoption/pet">
              <ImagePet src={modelo} />
              <ContainerDetails>
                <Name>Apollo</Name>
                <Detail>Adulto - Macho - Castrado</Detail>
              </ContainerDetails>
            </ContainerPet>
          </ContainerPets>
        </ContainerRegisteredPets>
        <ContainerButtonNext>
          <ButtonNext>Próximo</ButtonNext>
        </ContainerButtonNext>
      </Main>
    </Background>
  );
};

export default RegisteredPets;

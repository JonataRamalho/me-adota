import { useState } from "react";
import { Background, Title } from "../../components";
import {
  ButtonBackMenu,
  ButtonNext,
  ButtonPet,
  ContainerAdoptionPets,
  ContainerButtonBack,
  ContainerButtonNext,
  ContainerDetails,
  ContainerPet,
  ContainerPets,
  ContainerSelectedPet,
  Detail,
  Image,
  ImagePet,
  Input,
  Main,
  Name,
} from "./styles";

import arrowLeft from "../../assets/arrow-left.svg";
import modelo from "../../assets/catModelo.jpg";

const AdoptionPets = () => {
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
          <ButtonBackMenu to="/search">
            <Image src={arrowLeft} /> Voltar para pesquisar cep
          </ButtonBackMenu>

          <Input placeholder="Ex: Cinza" />
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
            <ContainerPet to="/search/pets/pet">
              <ImagePet src={modelo} />
              <ContainerDetails>
                <Name>Apollo</Name>
                <Detail>Adulto - Macho - Castrado</Detail>
              </ContainerDetails>
            </ContainerPet>
            <ContainerPet to="/search/pets/pet">
              <ImagePet src={modelo} />
              <ContainerDetails>
                <Name>Apollo</Name>
                <Detail>Adulto - Macho - Castrado</Detail>
              </ContainerDetails>
            </ContainerPet>
            <ContainerPet to="/search/pets/pet">
              <ImagePet src={modelo} />
              <ContainerDetails>
                <Name>Apollo</Name>
                <Detail>Adulto - Macho - Castrado</Detail>
              </ContainerDetails>
            </ContainerPet>
            <ContainerPet to="/search/pets/pet">
              <ImagePet src={modelo} />
              <ContainerDetails>
                <Name>Apollo</Name>
                <Detail>Adulto - Macho - Castrado</Detail>
              </ContainerDetails>
            </ContainerPet>
            <ContainerPet to="/search/pets/pet">
              <ImagePet src={modelo} />
              <ContainerDetails>
                <Name>Apollo</Name>
                <Detail>Adulto - Macho - Castrado</Detail>
              </ContainerDetails>
            </ContainerPet>
            <ContainerPet to="/search/pets/pet">
              <ImagePet src={modelo} />
              <ContainerDetails>
                <Name>Apollo</Name>
                <Detail>Adulto - Macho - Castrado</Detail>
              </ContainerDetails>
            </ContainerPet>
            <ContainerPet to="/search/pets/pet">
              <ImagePet src={modelo} />
              <ContainerDetails>
                <Name>Apollo</Name>
                <Detail>Adulto - Macho - Castrado</Detail>
              </ContainerDetails>
            </ContainerPet>
            <ContainerPet to="/search/pets/pet">
              <ImagePet src={modelo} />
              <ContainerDetails>
                <Name>Apollo</Name>
                <Detail>Adulto - Macho - Castrado</Detail>
              </ContainerDetails>
            </ContainerPet>
            <ContainerPet to="/search/pets/pet">
              <ImagePet src={modelo} />
              <ContainerDetails>
                <Name>Apollo</Name>
                <Detail>Adulto - Macho - Castrado</Detail>
              </ContainerDetails>
            </ContainerPet>
            <ContainerPet to="/search/pets/pet">
              <ImagePet src={modelo} />
              <ContainerDetails>
                <Name>Apollo</Name>
                <Detail>Adulto - Macho - Castrado</Detail>
              </ContainerDetails>
            </ContainerPet>
          </ContainerPets>
          <ContainerButtonNext>
            <ButtonNext>Próximo</ButtonNext>
          </ContainerButtonNext>
        </ContainerAdoptionPets>
      </Main>
    </Background>
  );
};

export default AdoptionPets;

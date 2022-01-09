import { useState } from "react";
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
} from "./styles";
import Modal from "@mui/material/Modal";

import arrowLeft from "../../assets/arrow-left.svg";
import modelo from "../../assets/catModelo.jpg";

const AdoptionPets = () => {
  const [selectedTodosPets, setSelectedTodosPets] = useState(true);
  const [selectedCachorro, setSelectedCachorro] = useState(false);
  const [selectedGato, setSelectedGato] = useState(false);
  const [open, setOpen] = useState(false);

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

  return (
    <Background>
      <Main>
        <ContainerButtonBack>
          <ButtonBackMenu to="/search">
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
          <ContainerButton>
            <Button>Próximo</Button>
          </ContainerButton>
        </ContainerAdoptionPets>
      </Main>
    </Background>
  );
};

export default AdoptionPets;

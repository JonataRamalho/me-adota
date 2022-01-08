import { useEffect, useState } from "react";
import { Background, Title } from "../../components";
import {
  Button,
  ButtonBack,
  ButtonBackMenu,
  Checkbox,
  ContainerButtonBack,
  ContainerCheckbox,
  ContainerInputs,
  ContainerPersonality,
  Description,
  Form,
  Image,
  Input,
  Label,
  Main,
  Option,
  Select,
  Text,
} from "./styles";

import arrowLeft from "../../assets/arrow-left.svg";

const RegisterPet = () => {
  const [petType, setPetType] = useState("default");
  const [ageGroup, setAgeGroup] = useState("default");
  const [castrated, setCastrated] = useState("default");
  const [port, setPort] = useState("default");
  const [page, setPage] = useState(0);
  const [colorPet, setColorPet] = useState([]);
  const [color, setColor] = useState("default");

  let colorDogs = [
    { value: "amarelo", text: "Amarelo" },
    { value: "branco", text: "Branco" },
    { value: "bicolor", text: "Bicolor" },
    { value: "chocolate", text: "Chocolate" },
    { value: "cinza", text: "Cinza" },
    { value: "creme", text: "Creme" },
    { value: "dourado", text: "Dourado" },
    { value: "ruivo", text: "Ruivo" },
    { value: "marrom", text: "Marrom" },
    { value: "preto", text: "Preto" },
  ];

  let colorCat = [
    { value: "bege", text: "Bege" },
    { value: "branco", text: "Branco" },
    { value: "bicolor", text: "Bicolor" },
    { value: "Cinza", text: "Cinza" },
    { value: "Creme", text: "Creme" },
    { value: "laranja", text: "Laranja" },
    { value: "marrom", text: "Marrom" },
    { value: "preto", text: "Preto" },
    { value: "tricolor", text: "Tricolor" },
  ];

  function showRegistrationPartOne() {
    return (
      <Main>
        <ContainerButtonBack>
          <ButtonBackMenu to="/options">
            <Image src={arrowLeft} /> Voltar ao menu
          </ButtonBackMenu>
        </ContainerButtonBack>
        <Title content="Cadastro de pet para doação" />
        <Form>
          <ContainerInputs>
            <Input
              type="file"
              name="image-upload"
              id="input"
              accept="image/*"
            />
          </ContainerInputs>
          <ContainerInputs>
            <Input type="text" placeholder="Nome do pet" />
            <Select
              color={petType}
              value={petType}
              onChange={(e) => setPetType(e.target.value)}
            >
              <Option hidden value="default">
                Qual é o pet?
              </Option>
              <Option value="cachorro">Cachorro</Option>
              <Option value="gato">Gato</Option>
            </Select>
          </ContainerInputs>
          <ContainerInputs>
            {/* <Input type="text" placeholder="Qual é a faixa etária?" /> */}
            <Select
              color={ageGroup}
              value={ageGroup}
              onChange={(e) => setAgeGroup(e.target.value)}
            >
              <Option hidden value="default">
                Qual é a faixa etária?
              </Option>
              <Option value="jovem">Jovem</Option>
              <Option value="Adulto">Adulto</Option>
              <Option value="senior<">Sênior</Option>
            </Select>
            <Select
              color={castrated}
              value={castrated}
              onChange={(e) => setCastrated(e.target.value)}
            >
              <Option hidden value="default">
                É castrado?
              </Option>
              <Option value="sim">Sim castrado</Option>
              <Option value="nao">Não castrado</Option>
            </Select>
          </ContainerInputs>
          <Button type="button" check={true} onClick={() => setPage(1)}>
            Avançar
          </Button>
        </Form>
      </Main>
    );
  }

  function showRegistrationPartTwo() {
    return (
      <Main>
        <ContainerButtonBack>
          <ButtonBack onClick={() => setPage(0)}>
            <Image src={arrowLeft} /> Voltar
          </ButtonBack>
        </ContainerButtonBack>
        <Title content="Cadastro de pet para doação" />
        <Form>
          <ContainerInputs>
            {petType === "cachorro" ? (
              <Select
                color={port}
                value={port}
                onChange={(e) => setPort(e.target.value)}
              >
                <Option hidden value="default">
                  Qual é o porte?
                </Option>
                <Option value="pequeno">Pequeno</Option>
                <Option value="medio">Médio</Option>
                <Option value="grande">Grande</Option>
              </Select>
            ) : (
              <></>
            )}
            <Select
              color={color}
              value={color}
              onChange={(e) => setColor(e.target.value)}
            >
              <Option hidden value="default">
                Qual é a cor?
              </Option>

              {colorPet.map((item, index) => {
                return (
                  <Option key={item.value} value={item.value}>
                    {item.text}
                  </Option>
                );
              })}
            </Select>
          </ContainerInputs>
          <ContainerInputs>
            <ContainerPersonality>
              <Text>Qual é a personalidade? </Text>
              <ContainerCheckbox>
                <Label>
                  <Checkbox type="checkbox" />
                  Carinhoso
                </Label>
                <Label>
                  <Checkbox type="checkbox" />
                  Medroso
                </Label>
                <Label>
                  <Checkbox type="checkbox" />
                  Curioso
                </Label>
                <Label>
                  <Checkbox type="checkbox" />
                  Dócil
                </Label>
                <Label>
                  <Checkbox type="checkbox" />
                  Manhoso
                </Label>
                <Label>
                  <Checkbox type="checkbox" />
                  Brincalhão
                </Label>
                <Label>
                  <Checkbox type="checkbox" />
                  Amigo
                </Label>
              </ContainerCheckbox>
            </ContainerPersonality>
          </ContainerInputs>
          <ContainerInputs type={true}>
            <Description placeholder="Sobre o pet" />
          </ContainerInputs>
          <Button type="button" check={false}>
            Cadastrar
          </Button>
        </Form>
      </Main>
    );
  }

  function renderPage() {
    if (page === 0) {
      return showRegistrationPartOne();
    } else if (page === 1) {
      return showRegistrationPartTwo();
    }
  }

  useEffect(() => {
    if (petType === "cachorro") {
      setColorPet(colorDogs);
    } else if (petType === "gato") {
      setColorPet(colorCat);
    }
  }, [petType]);

  return <Background>{renderPage()}</Background>;
};

export default RegisterPet;

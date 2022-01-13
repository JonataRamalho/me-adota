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
import api from "../../services/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const RegisterPet = () => {
  const [petType, setPetType] = useState("default");
  const [ageGroup, setAgeGroup] = useState("default");
  const [castrated, setCastrated] = useState("default");
  const [port, setPort] = useState("default");
  const [page, setPage] = useState(0);
  const [colorPet, setColorPet] = useState([]);
  const [color, setColor] = useState("default");
  const [namePet, setNamePet] = useState("");
  const [descriptionPet, setDescriptionPet] = useState("");
  const [gender, setGender] = useState("default");
  const [personalities, setPersonalities] = useState([]);
  const [checkPersonalities, setCheckPersonalities] = useState([]);
  const [image, setImage] = useState(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState(null);
  const [idInstituion, setIdInstituion] = useState("");

  const token =
    "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhbWFkYUBnbWFpbC5jb20iLCJleHAiOjE2NDI4NjE4Mzh9.L4CPBgGWIpg3rN_051cuV3iOXFQ9PEYKkd0VW9B0W31cKZRL52zNuQ07EGO6ACXVO72ycXct_fem_qtqdtuepg";

  const navigate = useNavigate();

  useEffect(() => {
    if (petType === "Cachorro") {
      setColorPet(colorDogs);
    } else if (petType === "Gato") {
      setColorPet(colorCat);
    }
  }, [petType]);

  useEffect(() => {
    getPersonalities();
  }, []);

  useEffect(() => {
    const data = localStorage.getItem("@storage_Institution");

    const { id } = JSON.parse(data);

    setIdInstituion(id);
  }, []);

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

  function showRegistrationPartOne() {
    return (
      <Main>
        <ContainerButtonBack>
          <ButtonBackMenu to="/menu">
            <Image src={arrowLeft} /> Voltar ao menu
          </ButtonBackMenu>
        </ContainerButtonBack>
        <Title content="Cadastro de pet para doação" />
        <Form>
          <ContainerInputs>
            <img src={imagePreviewUrl} width="150px" height="150px" />
            <Input
              type="file"
              name="fileImage"
              id="fileImage"
              accept="image/png, image/jpeg"
              onChange={(e) => handleImageChange(e)}
            />
          </ContainerInputs>
          <ContainerInputs>
            <Input
              type="text"
              placeholder="Nome do pet"
              value={namePet}
              onChange={(e) => setNamePet(e.target.value)}
            />
            <Select
              color={petType}
              value={petType}
              onChange={(e) => setPetType(e.target.value)}
            >
              <Option hidden value="default">
                Qual é o pet?
              </Option>
              <Option value="Cachorro">Cachorro</Option>
              <Option value="Gato">Gato</Option>
            </Select>
          </ContainerInputs>
          <ContainerInputs>
            <Select
              color={ageGroup}
              value={ageGroup}
              onChange={(e) => setAgeGroup(e.target.value)}
            >
              <Option hidden value="default">
                Qual é a faixa etária?
              </Option>
              <Option value="Jovem">Jovem</Option>
              <Option value="Adulto">Adulto</Option>
              <Option value="Sênior<">Sênior</Option>
            </Select>
            <Select
              color={gender}
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <Option hidden value="default">
                Qual é o gênero?
              </Option>
              <Option value="Fêmea">Fêmea</Option>
              <Option value="Macho">Macho</Option>
            </Select>
          </ContainerInputs>
          <ContainerInputs>
            <Select
              color={castrated}
              value={castrated}
              onChange={(e) => setCastrated(e.target.value)}
            >
              <Option hidden value="default">
                É castrado?
              </Option>
              <Option value="s">Sim castrado</Option>
              <Option value="n">Não castrado</Option>
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
        <Form onSubmit={handleRegisterPet}>
          <ContainerInputs>
            {petType === "Cachorro" ? (
              <Select
                color={port}
                value={port}
                onChange={(e) => setPort(e.target.value)}
              >
                <Option hidden value="default">
                  Qual é o porte?
                </Option>
                <Option value="Pequeno">Pequeno</Option>
                <Option value="Médio">Médio</Option>
                <Option value="Grande">Grande</Option>
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
              <ContainerCheckbox>{personalitiesPets()}</ContainerCheckbox>
            </ContainerPersonality>
          </ContainerInputs>
          <ContainerInputs type={true}>
            <Description
              placeholder="Sobre o pet"
              id="description"
              value={descriptionPet}
              onChange={(e) => setDescriptionPet(e.target.value)}
            />
          </ContainerInputs>
          <Button type="submit" check={false}>
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

  function addPersonalities(checked, value) {
    let personalities = [];

    personalities = checkPersonalities;

    if (checked) {
      personalities.push({ id: value });

      setCheckPersonalities(personalities);
    } else {
      const newPersonalities = personalities.filter(
        (item) => item.id !== value
      );
      setCheckPersonalities(newPersonalities);
    }
  }

  async function getPersonalities() {
    const response = await api.get("/api/personalities", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    setPersonalities(response.data.content);
  }

  function personalitiesPets() {
    if (personalities !== undefined) {
      return personalities.map((value, index) => {
        return (
          <Label key={index}>
            <Checkbox
              type="checkbox"
              value={value.id}
              id={value.id}
              onChange={(e) =>
                addPersonalities(e.target.checked, e.target.value)
              }
            />
            {value.name}
          </Label>
        );
      });
    }
  }

  function handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      setImage(file);
      setImagePreviewUrl(reader.result);
    };

    reader.readAsDataURL(file);
  }

  async function handleRegisterPet(e) {
    e.preventDefault();

    if (petType === "Gato") {
      await dataCat();
    } else {
      await dataDog();
    }
  }

  function createFormData(body = {}) {
    var formData = new FormData();

    formData.append("photo", image);

    Object.keys(body).forEach((key) => {
      formData.append(key, body[key]);
    });

    return formData;
  }

  async function dataCat() {
    const jsoncat = JSON.stringify({
      cat: {
        name: namePet,
        age: ageGroup,
        castration: castrated,
        color: color,
        about: descriptionPet,
        gender: gender,
      },
      institution: {
        id: idInstituion,
      },
      personalities: checkPersonalities,
    });

    try {
      const response = await api.post("/api/cat", createFormData({ jsoncat }), {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type":
            'multipart/form-data; charset=utf-8; boundary="another cool boundary; application/json";',
          Authorization: `${token}`,
        },
      });

      if ((await response).status === 201) {
        toast.success("Pet cadastrado com sucesso!", {
          position: toast.POSITION.TOP_CENTER,
        });

        setTimeout(() => {
          navigate("/menu");
        }, 5000);
      }
    } catch (error) {
      if (
        !!namePet &&
        !!petType &&
        !!ageGroup &&
        !!gender &&
        !!castrated &&
        !!color &&
        !!checkPersonalities &&
        !!descriptionPet
      ) {
        toast.error("Erro ao cadastrar o pet", {
          position: toast.POSITION.TOP_CENTER,
        });
      } else {
        toast.error("Preencha todos os campos!", {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    }
  }

  async function dataDog() {
    const jsondog = JSON.stringify({
      dog: {
        name: namePet,
        age: ageGroup,
        castration: castrated,
        color: color,
        about: descriptionPet,
        gender: gender,
        size_dog: port,
      },
      institution: {
        id: idInstituion,
      },
      personalities: checkPersonalities,
    });

    try {
      const response = await api.post("/api/dog", createFormData({ jsondog }), {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type":
            'multipart/form-data; charset=utf-8; boundary="another cool boundary; application/json";',
          Authorization: `${token}`,
        },
      });

      if ((await response).status === 201) {
        toast.success("Pet cadastrado com sucesso!", {
          position: toast.POSITION.TOP_CENTER,
        });

        setTimeout(() => {
          navigate("/menu");
        }, 5000);
      }
    } catch (error) {
      if (
        !!namePet &&
        !!petType &&
        !!ageGroup &&
        !!gender &&
        !!castrated &&
        !!color &&
        !!checkPersonalities &&
        !!descriptionPet
      ) {
        toast.error("Erro ao cadastrar o pet", {
          position: toast.POSITION.TOP_CENTER,
        });
      } else {
        toast.error("Preencha todos os campos!", {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    }
  }

  return (
    <Background>
      {renderPage()}
      <ToastContainer />
    </Background>
  );
};

export default RegisterPet;

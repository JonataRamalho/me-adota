import { useEffect, useState } from "react";
import { Background, SelectMaterial, Title } from "../../components";
import {
  Button,
  ButtonBack,
  ButtonBackMenu,
  ContainerButtonBack,
  ContainerImage,
  ContainerInputs,
  Description,
  Form,
  Image,
  ImagePet,
  Input,
  InputImage,
  Main,
  Option,
  Select,
} from "./styles";

import arrowLeft from "../../assets/arrow-left.svg";
import api from "../../services/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { GeneralProviderContext } from "../../features";
import { useContext } from "react";

const RegisterPet = () => {
  const { institutionData, login } = useContext(GeneralProviderContext);

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
  const [image, setImage] = useState(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState(null);
  const [idInstituion, setIdInstituion] = useState("");
  const [token, setToken] = useState("");
  const [personality, setPersonality] = useState([]);
  const [animalStatus, setAnimalStatus] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    getToken();
    if (petType === "Cachorro") {
      setColorPet(colorDogs);
    } else if (petType === "Gato") {
      setColorPet(colorCat);
    }
  }, [petType, token]);

  useEffect(() => {
    getPersonalities();
  }, []);

  useEffect(() => {
    try {
      const { id } = JSON.parse(institutionData);

      setIdInstituion(id);
    } catch (error) {}
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

  function getToken() {
    try {
      setToken(login.token);
    } catch (error) {}
  }

  const status = {
    personality: personalities,
    animalStatus: ["Disponível para adoção", "Adotado"],
  };

  const title = {
    personality: {
      title: "Qual é  a personalidade?",
      type: "personality",
    },
    animalStatus: {
      title: "Situação do animal?",
      type: "animalStatus",
    },
  };

  const handleChangePersonality = (event) => {
    const {
      target: { value },
    } = event;

    setPersonality(typeof value === "string" ? value.split(",") : value);
  };

  const handleChangeAnimalStatus = (event, type) => {
    const {
      target: { value },
    } = event;

    setAnimalStatus([value]);
  };

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
          <ContainerImage>
            {!!imagePreviewUrl && <ImagePet src={imagePreviewUrl} />}
            {!imagePreviewUrl && (
              <InputImage
                type="file"
                name="fileImage"
                id="fileImage"
                accept="image/png, image/jpeg"
                onChange={(e) => handleImageChange(e)}
              />
            )}
          </ContainerImage>
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
              <Option value="Sênior">Sênior</Option>
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
          <div>
            <Button type="button" check={true} onClick={() => setPage(1)}>
              Avançar
            </Button>
          </div>
        </Form>
      </Main>
    );
  }

  function showRegistrationPartThree() {
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
            <SelectMaterial
              width={"290px"}
              height={"48px"}
              isMultiple={true}
              title={title.personality}
              status={status.personality}
              valueStatus={personality}
              handleChange={handleChangePersonality}
            />
            <SelectMaterial
              width={"290px"}
              height={"48px"}
              title={title.animalStatus}
              isMultiple={false}
              status={status.animalStatus}
              valueStatus={animalStatus}
              handleChange={handleChangeAnimalStatus}
            />
            {petType !== "Cachorro" && (
              <div style={{ width: "290px", height: "48px" }} />
            )}
            <Description
              placeholder="Sobre o pet"
              id="description"
              value={descriptionPet}
              onChange={(e) => setDescriptionPet(e.target.value)}
            />
          </ContainerInputs>
          <div>
            <Button type="submit" check={false}>
              Cadastrar
            </Button>
          </div>
        </Form>
      </Main>
    );
  }

  function renderPage() {
    if (page === 0) {
      return showRegistrationPartOne();
    } else if (page === 1) {
      return showRegistrationPartThree();
    }
  }

  async function getPersonalities() {
    const response = await api.get("/api/personalities", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    const namePersonalities = response?.data?.content?.map(
      (personalidade) => personalidade.name
    );

    setPersonalities(namePersonalities);
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
    const { zip_code, district } = JSON.parse(institutionData);

    const jsoncat = JSON.stringify({
      cat: {
        name: namePet,
        age: ageGroup,
        castration: castrated,
        color: color,
        about: descriptionPet,
        gender: gender,
        zip_code: zip_code,
        district: district,
        adopted: animalStatus[0] === "Adotado" ? "s" : "n",
      },
      institution: {
        id: idInstituion,
      },
      personalities: personality,
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
        !!personality &&
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
    const { zip_code, district } = JSON.parse(institutionData);

    const jsondog = JSON.stringify({
      dog: {
        name: namePet,
        age: ageGroup,
        castration: castrated,
        color: color,
        about: descriptionPet,
        gender: gender,
        adopted: animalStatus[0] === "Adotado" ? "s" : "n",
        size_dog: port,
        zip_code: zip_code,
        district: district,
      },
      institution: {
        id: idInstituion,
      },
      personalities: personality,
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
        !!personality &&
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

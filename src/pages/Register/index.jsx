import { useEffect, useState } from "react";
import { Background, Header, Title } from "../../components";
import {
  Button,
  ButtonBack,
  ContainerButtonBack,
  ContainerInputs,
  Form,
  Image,
  Input,
  Main,
} from "./styles";

import arrowLeft from "../../assets/arrow-left.svg";
import api from "../../services/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import cepApi from "cep-promise";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [page, setPage] = useState(0);
  const [nameInstituion, setNameInstituion] = useState("");
  const [phone, setPhone] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [cep, setCep] = useState("");
  const [district, setDistrict] = useState("");
  const [city, setCity] = useState("");
  const [place, setPlace] = useState("");
  const [state, setState] = useState("");
  const [instagram, setInstagram] = useState("");
  const [facebook, setFacebook] = useState("");
  const [bank, setBank] = useState("");
  const [agency, setAgency] = useState("");
  const [operation, setOperation] = useState("");
  const [account, setAccount] = useState("");
  const [pix, setPix] = useState("");
  const [address, setAddress] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    cepApi(cep)
      .then((data) => setAddress(data))
      .catch((error) => console.log());
  }, [cep]);

  useEffect(() => {
    setDistrict(address.neighborhood);
    setCity(address.city);
    setState(address.state);
    setPlace(address.street);
  }, [address]);

  function showRegistrationPartOne() {
    return (
      <Main>
        <Title content="Cadastre-se para ajudar os pets a encontrar um lar!" />
        <Form>
          <ContainerInputs>
            <Input
              placeholder="Nome da Instituição"
              type="text"
              value={nameInstituion}
              onChange={(e) => setNameInstituion(e.target.value)}
            />
            <Input
              placeholder="Telefone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </ContainerInputs>
          <ContainerInputs>
            <Input
              placeholder="CNPJ"
              type="text"
              value={cnpj}
              onChange={(e) => setCnpj(e.target.value)}
            />
            <Input
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </ContainerInputs>
          <ContainerInputs>
            <Input
              placeholder="Senha"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Input
              placeholder="Digite novamente a senha"
              type="password"
              value={passwordConfirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
            />
          </ContainerInputs>
          <Button
            type="button"
            check={true}
            onClick={() => checkRegistrationFieldsPartOne()}
          >
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
        <Title content="Coloque o endereço da ong 😉" />
        <Form>
          <ContainerInputs>
            <Input
              placeholder="CEP"
              type="text"
              value={cep}
              onChange={(e) => setCep(e.target.value)}
            />
            <Input
              placeholder="Bairro"
              type="text"
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
            />
          </ContainerInputs>
          <ContainerInputs>
            <Input
              placeholder="Cidade"
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <Input
              placeholder="Estado"
              type="text"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
          </ContainerInputs>
          <ContainerInputs>
            <Input
              placeholder="Rua/Conjunto"
              type="text"
              value={place}
              onChange={(e) => setPlace(e.target.value)}
            />
          </ContainerInputs>

          <Button
            type="button"
            check={true}
            onClick={() => checkRegistrationFieldsPartTwo()}
          >
            Avançar
          </Button>
        </Form>
      </Main>
    );
  }

  function showRegistrationPartThree() {
    return (
      <Main>
        <ContainerButtonBack>
          <ButtonBack onClick={() => setPage(1)}>
            <Image src={arrowLeft} /> Voltar
          </ButtonBack>
        </ContainerButtonBack>
        <Title content="Falta pouco! Estamos perto de finalizar 🐶" />
        <Form>
          <ContainerInputs>
            <Input
              placeholder="Coloque o link do Instagram"
              type="text"
              value={instagram}
              onChange={(e) => setInstagram(e.target.value)}
            />
            <Input
              placeholder="Coloque o link do Facebook"
              type="text"
              value={facebook}
              onChange={(e) => setFacebook(e.target.value)}
            />
          </ContainerInputs>

          <Button type="button" check={true} onClick={() => setPage(3)}>
            Avançar
          </Button>
        </Form>
      </Main>
    );
  }

  function showRegistrationPartFour() {
    return (
      <Main>
        <ContainerButtonBack>
          <ButtonBack onClick={() => setPage(2)}>
            <Image src={arrowLeft} /> Voltar
          </ButtonBack>
        </ContainerButtonBack>
        <Title content="Coloque seus dados bancários para receber doações!" />
        <Form onSubmit={handleRegister}>
          <ContainerInputs>
            <Input
              placeholder="Banco"
              type="text"
              value={bank}
              onChange={(e) => setBank(e.target.value)}
            />
            <Input
              placeholder="Agência"
              type="text"
              value={agency}
              onChange={(e) => setAgency(e.target.value)}
            />
          </ContainerInputs>
          <ContainerInputs>
            <Input
              placeholder="Operação"
              type="text"
              value={operation}
              onChange={(e) => setOperation(e.target.value)}
            />
            <Input
              placeholder="Conta"
              type="text"
              value={account}
              onChange={(e) => setAccount(e.target.value)}
            />
          </ContainerInputs>
          <ContainerInputs>
            <Input
              placeholder="Pix"
              type="text"
              value={pix}
              onChange={(e) => setPix(e.target.value)}
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
    } else if (page === 2) {
      return showRegistrationPartThree();
    } else if (page === 3) {
      return showRegistrationPartFour();
    }
  }

  function checkRegistrationFieldsPartOne() {
    if (
      !!nameInstituion &&
      !!phone &&
      !!cnpj &&
      !!email &&
      !!password &&
      !!passwordConfirmation
    ) {
      checkPasswords();
    } else {
      toast.error("Campos não preenchidos!", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  }

  function checkPasswords() {
    if (password === passwordConfirmation) {
      setPage(1);
    } else {
      toast.error("Digite novamente a senha! ", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  }

  function checkRegistrationFieldsPartTwo() {
    if (!!cep && !!district && !!city && !!state) {
      setPage(2);
    } else {
      toast.error("Campos não preenchidos!", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  }

  async function handleRegister(e) {
    e.preventDefault();

    const dataInstituion = {
      username: email,
      password: password,
      name: nameInstituion,
      facebook: facebook,
      instagram: instagram,
      contact: phone,
      place: place,
      district: district,
      zip_code: cep,
      city: city,
      state: state,
      cnpj: cnpj,
      account: {
        bank,
        number: account,
        operation,
        agency,
        pix,
      },
    };

    try {
      const responseInstituion = await api.post("/api/signup", dataInstituion, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      if ((await responseInstituion).status === 201) {
        toast.success(
          "Cadastro realizado com sucesso!",
          "Você será redirecionado para login!",
          {
            position: toast.POSITION.TOP_CENTER,
          }
        );

        setTimeout(() => {
          navigate("/login");
        }, 6000);
      }
    } catch (error) {
      toast.error("Esse email está em uso!", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  }

  return (
    <Background>
      <Header type={0} />
      {renderPage()}
      <ToastContainer />
    </Background>
  );
};

export default Register;

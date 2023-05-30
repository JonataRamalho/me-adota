import { useContext, useState } from "react";
import { SelectMaterial, Title } from "../../components";
import {
  ButtonCustom,
  ContainerButtons,
  ContainerContent,
  ContainerInputs,
  ContainerRegisterPetExpenses,
  Input,
} from "./styles";
import { useParams } from "react-router-dom";
import { GeneralProviderContext } from "../Providers/GeneralProvider";
import api from "../../services/api";
import { ToastContainer, toast } from "react-toastify";

const RegisterPetExpenses = () => {
  const { idPet } = useParams();
  const { typePet, login } = useContext(GeneralProviderContext);

  const [selectStatus, setSelectStatus] = useState({
    expenseName: [],
    vaccine: [],
  });
  const [additionalInformation, setAdditionalInformation] = useState();
  const [money, setMoney] = useState();

  const title = {
    expenseName: {
      title: "Qual é a despesa?",
      type: "expenseName",
    },
    vaccine: {
      title: "Qual é a vacina?",
      type: "vaccine",
    },
  };

  const vaccineCat = [
    "Panleucopenia felina (FPLV ou FVRCP)",
    "Raiva felina",
    "Clamidiose felina",
    "Leucemia felina (FeLV)",
    "Giardíase felina",
    "Rinotraqueíte viral felina (FVR)",
    "Calicivirose felina",
    "Clamidiose felina",
    "Bordetelose felina",
    "Doença do trato urinário felino (DTUF)",
  ];

  const vaccineDog = [
    "Múltipla (V8 ou V10)",
    "Raiva canina",
    "Tosse dos canis (traqueobronquite infecciosa canina)",
    "Leptospirose",
    "Parainfluenza canina",
    "Doença de Lyme",
    "Hepatite canina (adenovírus canino tipo 2)",
    "Parvovirose canina",
  ];

  const status = {
    expenseName: [
      "Vacina",
      "Remédio",
      "Cirurgia",
      "Alimento",
      "Brinquedos",
      "Outros",
    ],
    vaccine: typePet === "cat" ? vaccineCat : vaccineDog,
  };

  const handleChangeSelectStatus = (event, type) => {
    const {
      target: { value },
    } = event;

    setSelectStatus({
      ...selectStatus,
      [type]: [value],
    });
  };

  const registerExpenses = async () => {
    const typeVaccine =
      selectStatus.expenseName[0] === "Vacina"
        ? `/${selectStatus.vaccine}`
        : "";

    const dataPet = {
      expense: {
        name: `${selectStatus.expenseName[0]}${typeVaccine}`,
        value: money,
        description: additionalInformation,
      },
      ...(typePet.typePet === "dog" && {
        dog: {
          id: idPet,
        },
      }),

      ...(typePet.typePet === "cat" && {
        cat: {
          id: idPet,
        },
      }),
    };

    try {
      const response = await api.post("/api/expense", dataPet, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${login.token}`,
        },
      });

      if ((await response).status === 201 || (await response).status === 200) {
        toast.success("Despesa cadastrada com sucesso", {
          position: toast.POSITION.TOP_CENTER,
        });

        setSelectStatus({
          expenseName: [],
          vaccine: [],
        });
        setAdditionalInformation("");
        setMoney("");
      }
    } catch {
      toast.error("Erro ao cadastrar a despesa", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  return (
    <ContainerRegisterPetExpenses>
      <Title content="Cadastrar despesa" />
      <ContainerContent>
        <ContainerInputs>
          <SelectMaterial
            width={"258px"}
            height={"46px"}
            isMultiple={false}
            title={title.expenseName}
            status={status.expenseName}
            valueStatus={selectStatus.expenseName}
            handleChange={handleChangeSelectStatus}
          />
          <Input
            placeholder="Valor"
            value={money}
            onChange={(e) => setMoney(e.target.value)}
          />
          {selectStatus.expenseName[0] === "Vacina" && (
            <SelectMaterial
              width={"258px"}
              height={"46px"}
              isMultiple={false}
              title={title.vaccine}
              status={status.vaccine}
              valueStatus={selectStatus.vaccine}
              handleChange={handleChangeSelectStatus}
            />
          )}
          <Input
            placeholder="informação adicional"
            value={additionalInformation}
            onChange={(e) => setAdditionalInformation(e.target.value)}
          />
        </ContainerInputs>
      </ContainerContent>
      <ContainerButtons>
        <ButtonCustom onClick={registerExpenses}>Cadastrar</ButtonCustom>
      </ContainerButtons>
      <ToastContainer />
    </ContainerRegisterPetExpenses>
  );
};

export default RegisterPetExpenses;

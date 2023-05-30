import { useState } from "react";
import { SelectMaterial, Title } from "../../components";
import {
  ButtonCustom,
  ContainerButtons,
  ContainerContent,
  ContainerInputs,
  ContainerEditPetExpenses,
  Input,
} from "./styles";

const EditPetExpenses = () => {
  const [selectStatus, setSelectStatus] = useState({
    expenseName: [],
    vaccine: [],
  });

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
    vaccine: vaccineCat,
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

  return (
    <ContainerEditPetExpenses>
      <Title content="Atualizar despesa" />
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
          <Input placeholder="Valor" />
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
          <Input placeholder="informação adicional" />
        </ContainerInputs>
      </ContainerContent>
      <ContainerButtons>
        <ButtonCustom>Atualizar</ButtonCustom>
      </ContainerButtons>
    </ContainerEditPetExpenses>
  );
};

export default EditPetExpenses;

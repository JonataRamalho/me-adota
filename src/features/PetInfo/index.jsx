import { Skeleton, Tab } from "@mui/material";
import { SelectMaterial } from "../../components";
import {
  ButtonCustom,
  ContainerButtons,
  ContainerContent,
  ContainerPage,
  ContainerPetInfo,
  Content,
  Description,
  // Image,
  Input,
  TabsCustom,
  ContainerContentInputs,
  SkeletonImage,
} from "./styles";
import { Fragment, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GeneralProviderContext } from "../Providers/GeneralProvider";
import { useQuery } from "react-query";
import api from "../../services/api";

const PetInfo = () => {
  const { typePet } = useContext(GeneralProviderContext);
  const navigate = useNavigate();
  const { idPet } = useParams();

  const { isLoading, data } = useQuery(["get-pet", typePet], async () => {
    if (typePet.typePet === "cat") {
      return api.get(`api/cat/${idPet}`, {
        headers: { "Content-Type": "application/json" },
      });
    } else {
      return api.get(`api/dog/${idPet}`, {
        headers: { "Content-Type": "application/json" },
      });
    }
  });

  const dataPersonalities = useQuery(["get-Personalities"], async () => {
    return api.get("api/personalities", {
      headers: { "Content-Type": "application/json" },
    });
  });

  const getPersonalitiesNames = () => {
    if (dataPersonalities.isLoading === false)
      return dataPersonalities?.data?.data?.content?.map(
        (personalidade) => personalidade.name
      );
  };

  const title = {
    ageGroup: {
      title: "Qual é a faixa etária?",
      type: "ageGroup",
    },
    isCastrated: {
      title: "É castrado?",
      type: "isCastrated",
    },
    typePet: {
      title: "Qual é o pet?",
      type: "typePet",
    },
    size: {
      title: "Qual é o porte?",
      type: "size",
    },
    color: {
      title: "Qual é a cor?",
      type: "color",
    },
    personality: {
      title: "Qual é  a personalidade?",
      type: "personality",
    },
    animalStatus: {
      title: "Situação do animal?",
      type: "animalStatus",
    },
  };

  const status = {
    ageGroup: ["Adulto", "Filhote", "Jovem", "Sênior"],
    isCastrated: ["Castrado", "Não castrado"],
    typePet: [""],
    size: ["Pequeno", "Médio", "Grande"],
    //TODO: Ajustar a cor do tipo de animal
    color: ["Bicolor", "Cinza", "Preto"],
    personality: getPersonalitiesNames(),
    animalStatus: ["Disponível para adoção", "Adotado"],
  };

  const [selectStatus, setSelectStatus] = useState({
    ageGroup: [""],
    isCastrated: [""],
    typePet: [""],
    size: [""],
    color: [""],
    animalStatus: [""],
  });

  const [personality, setPersonality] = useState([""]);
  const [about, setAbout] = useState("");
  const [name, setName] = useState(data?.data?.name);

  const [valueTabs, setValueTabs] = useState(0);

  const handleChange = (event, type) => {
    const {
      target: { value },
    } = event;

    setSelectStatus({
      ...selectStatus,
      [type]: [value],
    });
  };

  const handleChangePersonality = (event) => {
    const {
      target: { value },
    } = event;

    setPersonality(typeof value === "string" ? value.split(",") : value);
  };

  const handleChangeTabs = (event, newValue) => {
    setValueTabs(newValue);
  };

  const infoMain = () => {
    return (
      <ContainerContent $isImage={true}>
        <SkeletonImage />

        <Content>
          <Input
            placeholder="Nome do pet"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <SelectMaterial
            width={"258px"}
            height={"46px"}
            isMultiple={false}
            title={title.typePet}
            isDisabled={true}
            status={status.typePet}
            valueStatus={selectStatus.typePet}
            handleChange={handleChange}
          />
          <SelectMaterial
            width={"258px"}
            height={"46px"}
            isMultiple={false}
            title={title.ageGroup}
            status={status.ageGroup}
            valueStatus={selectStatus.ageGroup}
            handleChange={handleChange}
          />
          <SelectMaterial
            width={"258px"}
            height={"46px"}
            title={title.isCastrated}
            isMultiple={false}
            status={status.isCastrated}
            valueStatus={selectStatus.isCastrated}
            handleChange={handleChange}
          />
        </Content>

        <ContainerButtons>
          {/* TODO: Atualizar pet */}
          <ButtonCustom>Salvar</ButtonCustom>
          {/* TODO: Excluir pet */}
          <ButtonCustom delete={true}>Excluir</ButtonCustom>
        </ContainerButtons>
      </ContainerContent>
    );
  };

  const infoCharacteristics = () => {
    return (
      <ContainerContent $isImage={false}>
        <ContainerContentInputs>
          <Content>
            <SelectMaterial
              width={"258px"}
              height={"46px"}
              isMultiple={false}
              title={title.size}
              status={status.size}
              valueStatus={selectStatus.size}
              isDisabled={typePet.typePet === "cat"}
              handleChange={handleChange}
            />

            <SelectMaterial
              width={"258px"}
              height={"46px"}
              isMultiple={false}
              title={title.color}
              status={status.color}
              valueStatus={selectStatus.color}
              handleChange={handleChange}
            />
            <SelectMaterial
              width={"258px"}
              height={"46px"}
              isMultiple={true}
              title={title.personality}
              status={status.personality}
              valueStatus={personality}
              handleChange={handleChangePersonality}
            />
            <SelectMaterial
              width={"258px"}
              height={"46px"}
              title={title.animalStatus}
              isMultiple={false}
              status={status.animalStatus}
              valueStatus={selectStatus.animalStatus}
              handleChange={handleChange}
            />
            <Description
              placeholder="Sobre o pet"
              id="description"
              value={about}
              onChange={(e) => setAbout(e.target.value)}
            />
          </Content>
        </ContainerContentInputs>

        <ContainerButtons>
          <ButtonCustom>Salvar</ButtonCustom>
          <ButtonCustom delete={true}>Excluir</ButtonCustom>
        </ContainerButtons>
      </ContainerContent>
    );
  };

  const expenses = () => {
    return (
      <ContainerContent $isImage={false}>
        <Content>
          <ButtonCustom
            variant="contained"
            onClick={() => navigate(`/menu/pets/${idPet}/cadastrar-despesas`)}
          >
            Cadastrar as despesas
          </ButtonCustom>
          <ButtonCustom
            variant="contained"
            onClick={() => navigate(`/menu/pets/${idPet}/visualizar-despesas`)}
          >
            Visualizar as despesas
          </ButtonCustom>
        </Content>
      </ContainerContent>
    );
  };

  const TabPanel = (props) => {
    const { children, value, index } = props;

    return (
      <Fragment
        role="tabpanel"
        hidden={value !== index}
        id={`info-tabpanel-${index}`}
        aria-labelledby={`info-tab-${index}`}
        key={`info-tabpanel-${index}-${value}`}
      >
        {value === index && children}
      </Fragment>
    );
  };

  useEffect(() => {
    if (isLoading === false) {
      setSelectStatus({
        ageGroup: [data?.data?.age],
        isCastrated: [
          data?.data?.castration === "s" ? "Castrado" : "Não castrado",
        ],
        typePet: [typePet.typePet === "cat" ? "Gato" : "Cachorro"],
        size: [typePet.typePet === "dog" ? data?.data?.size_dog : "Nenhum"],
        color: [data?.data?.color],
        animalStatus: [
          data?.data.adopted === "s" ? "Adotado" : "Disponível para adoção",
        ],
      });

      setAbout(data?.data?.about);

      setName(data?.data?.name);

      const namePersonalities = data?.data?.personalities?.map(
        (personalidade) => personalidade.name
      );

      setPersonality(namePersonalities);
    }
  }, [data, typePet, isLoading]);

  return (
    <ContainerPetInfo>
      <ContainerPage>
        <TabsCustom
          value={valueTabs}
          onChange={handleChangeTabs}
          aria-label="info-tabs"
        >
          <Tab label="Principal" />
          <Tab label="Características" />
          <Tab label="Despesa do Animal" />
        </TabsCustom>
      </ContainerPage>
      <ContainerContent>
        <TabPanel value={valueTabs} index={0}>
          {infoMain()}
        </TabPanel>
        <TabPanel value={valueTabs} index={1}>
          {infoCharacteristics()}
        </TabPanel>
        <TabPanel value={valueTabs} index={2}>
          {expenses()}
        </TabPanel>
      </ContainerContent>
    </ContainerPetInfo>
  );
};

export default PetInfo;
